const EVAL = true.constructor.constructor;
const SPACE = ' ';
const RETURN = 'return' + SPACE;
const QUOTE = '"';
Q = QUOTE;
B = '\\';

function convert(input) {
  let output = [...input]
    .map(c => `B${c.charCodeAt(0).toString(8)}`)
    .join('');

  return `[..."${output}"].join('+')`;
}

const level1 = convert('alert(1)');
const level2 = EVAL(RETURN + level1)();
const level3 = EVAL(RETURN + level2)();
const level4 = EVAL(RETURN + Q + level3 + Q)();

console.log({level1, level2, level3, level4});

EVAL(level4)();

// eval(eval("'"+eval('"\\\\"+1+4+1+"\\\\"+1+5+4+"\\\\"+1+4+5+"\\\\"+1+6+2+"\\\\"+1+6+4+"\\\\"+5+0+"\\\\"+6+1+"\\\\"+5+1')+"'"))

// eval(eval("'"+eval("'\\"+1+4+1+"\\"+1+5+4+"\\"+1+4+5+"\\"+1+6+2+"\\"+1+6+4+"\\"+5+0+"\\"+6+1+"\\"+5+1+"'")+"'"));