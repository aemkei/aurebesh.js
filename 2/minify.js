// input source to be converted
const input = 'console.log("WORKS!")';

// main entry point
async function main() {

  const loadBootstrapCode = require('./load-bootstrap.js');
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