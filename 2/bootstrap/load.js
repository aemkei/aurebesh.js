async function load() {
  const fs = require('fs');
  const path = require('path');
  const { minify } = require("terser");

  const file = path.resolve(__dirname, 'core.js')
  const code = fs.readFileSync(file, 'utf8');

  const options = {
    module: true,
    compress: false,
    mangle: false,
    rename: {}
  };

  // tha character map to use for the variables
  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWX"];

  // holds the mapping of single characters to original names
  const mapping = {};

  // load and minify the bootstrap code from core.js
  let bootstrap = (await minify(code, options)).code;

  // remove all 'const' overhead from the orignal code
  bootstrap = bootstrap.replace('const ', '');

  // replace names in original code with alphabet
  bootstrap = bootstrap.replace(/[A-Z_0-9]+/g, function (name) {
    // get the next unused character
    if (!mapping[name]) {
      mapping[name] = alphabet.shift()
    }
    return mapping[name];
  });

  return {bootstrap, mapping};
}

module.exports = load;