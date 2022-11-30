// input source to be converted
const input = 'alert("CYPHER")';
const ciphers = "𐊣𐊦𐊧𐊨𐊭𐊳𐊵𐊶𐊷𐊸𐊺𐊻𐊼𐊽𐊾𐊿𐋀𐋁𐋂𐊫𐋄𐋅𐋇𐋈𐋎𐋐";

// generate bootstrap code from source
// only needed for local scripts
// for browser add the output to bootstrap.js
async function loadBootstrap(){
  const load = require('./bootstrap/load.js');
  const config = await load();

  bootstrap = config.bootstrap;
  mapping = config.mapping;

  console.log(`
    // place this into bootstrap.js
    const bootstrap = ${JSON.stringify(bootstrap)};
    const mapping = ${
      JSON.stringify(mapping).replace(/"([^"]+)":/g, '$1:')
    };
  `);
}

// main entry point
async function convert(input, ciphers) {

  ciphers = [... ciphers];

  if (!globalThis.bootstrap) {
    await loadBootstrap();
  }

  // shortcuts to mapping characters
  const { BACKSLASH, CONSTRUCTOR, JOIN, QUOTE, RETURN } = mapping;

  // convert characters to octal sequence (backslash + char code)
  let output = [...input]
    .map(c => `${BACKSLASH}${c.charCodeAt(0).toString(8)}`)
    .join('');

  // replace digits with substitute 
  output = output.replace(/[0-7]/g, digit => {
    return mapping["_" + digit];
  });

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

  // replace original chars with ciphers
  const alphabet = Object.values(mapping);
  
  output = output.replace(/[A-Z]/g, char => {
    return ciphers[alphabet.indexOf(char)];
  });

  // call the obfuscated code
  console.log(output);
  // Function(output)();
}

convert(input, ciphers);
