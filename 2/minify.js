// input source to be converted
const input = 'console.log("WORKS!")';

async function loadBootstrapCode() {
  const fs = require('fs');
  const path = require('path');
  const { minify } = require("terser");

  const file = path.resolve(__dirname, 'core.js')
  const code = fs.readFileSync(file, 'utf8');

  const options = {
    module: true,
    compress: false,
    mangle: false,
    rename: {},
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

  console.log({bootstrap, mapping});

  return {bootstrap, mapping};
}

// main entry point
async function main() {

  const {bootstrap, mapping} = await loadBootstrapCode()

  // shortcuts to mapping characters
  const { BACKSLASH, CONSTRUCTOR, JOIN, QUOTE, RETURN } = mapping;

  // convert to octal sequence (backslash + char code)
  let output = [...input]
    .map(c => `${BACKSLASH}${c.charCodeAt(0).toString(8)}`)
    .join('');

  // join characters with '+' sign
  output = `[..."${output}"][${JOIN}]('+')`;

  // wrap output with Function constructor
  // Function(`return ${output}`)();
  output = `${CONSTRUCTOR}(${RETURN}+${output})()`;

  // wrap "output" with Function constructor
  // Function(`return "${output}"`)();
  output = `${CONSTRUCTOR}(${RETURN}+${QUOTE}+${output}+${QUOTE})()`;

  // wrap output
  // Function(output)();
  output = `${CONSTRUCTOR}(${output})()`;

  // prepend compressed bootstrap code with output
  output = bootstrap + output;

  // call the obfuscated code
  console.log(output);
  Function(output)();
}

main();