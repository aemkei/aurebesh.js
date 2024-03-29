function convert(ciphers, input) {

  ciphers = [... ciphers];

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

  return output;
}