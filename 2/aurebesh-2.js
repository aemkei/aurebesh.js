const EVAL = true.constructor.constructor;
const SPACE = ' ';
const RETURN = 'return' + SPACE;
const QUOTE = '"';
const BACKSLASH = '"\\\\"';

function convert(input) {
  let output = [
    ...input
  ].map(character => {
    const octal = character.charCodeAt(0).toString(8);
    const numbers = String(octal).split('').join('+');
    return `${BACKSLASH}+${numbers}`;
  }).join('+');

  return output;
}

const level1 = convert('alert(1)');
const level2 = EVAL(RETURN + level1)();
const level3 = EVAL(RETURN + QUOTE + level2 + QUOTE)();

console.log({level1, level2, level3});

// EVAL(level3)();

// eval(eval("'"+eval('"\\\\"+1+4+1+"\\\\"+1+5+4+"\\\\"+1+4+5+"\\\\"+1+6+2+"\\\\"+1+6+4+"\\\\"+5+0+"\\\\"+6+1+"\\\\"+5+1')+"'"))

// eval(eval("'"+eval("'\\"+1+4+1+"\\"+1+5+4+"\\"+1+4+5+"\\"+1+6+2+"\\"+1+6+4+"\\"+5+0+"\\"+6+1+"\\"+5+1+"'")+"'"));