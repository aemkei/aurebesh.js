const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, 'core.js')
const code = fs.readFileSync(file, 'utf8');

const { minify } = require("terser");

function encode(){
  const numbers = "abcdefghi";

  function convert(input) {
    let output = [...input]
      .map(c => `B${
        c.charCodeAt(0).toString(8).split('').map(index => numbers[index]).join('')
      }`)
      .join('');

    return `[..."${output}"].join('+')`;
  }

  const level1 = convert('alert(1)');
  const level2 = FUNCTION(RETURN + level1)();
  const level3 = FUNCTION(RETURN + level2)();
  const level4 = FUNCTION(RETURN + Q + level3 + Q)();

  console.log({level1, level2, level3, level4});

  FUNCTION(level4)();
}
 

async function run(){
  
  const options = {
    module: true,
    compress: false,
    mangle: false,
    rename: {},
  };

  let compressed = await minify(code, options);
  compressed = compressed.code.replace('const ', '');
  
  let counter = 0;
  const mapping = {};
  
  compressed = compressed.replace(/[A-Z_]+/g, function(name){
    
    if (!mapping[name]) {
      mapping[name] = `_${counter}`;
      counter++;
    }
    
    return mapping[name];
  })
  
  console.log(compressed);
  // encode();

}

run();