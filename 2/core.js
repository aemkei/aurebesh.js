//자='',바=!자+자,스=!바+자,크=자+{},립=바[자++],트=바[코=자],리=++코+자,아=크[코+리],바[아+=크[자]+(바.스+크)[자]+스[리]+립+트+바[코]+아+립+크[자]+트][아](스[자]+스[코]+바[리]+트+립+"('자바스크립트')")()



const

  EMPTY = '',               // empty string
  TRUE = !EMPTY + EMPTY,    // "true"
  FALSE = !TRUE + EMPTY,    // "false"
  OBJECT = EMPTY + {},      // "[object Object]"
  SPACE = ' ',
  QUOTE = '"',
  BACKSLASH = '"\\\\"',

  // numbers
  ZERO = +EMPTY,
  ONE = +!EMPTY,
  TWO = ONE + ONE,
  THREE = TWO + ONE,
  FOUR = TWO + TWO,
  FIVE = THREE + TWO,
  SIX = THREE + THREE,
  SEVEN = FOUR + THREE,
  EIGHT = FOUR + FOUR,

  // characters
  T = TRUE[ZERO],             // "t" = "true"[0]
  R = TRUE[ONE],              // "r" = "true"[1]
  U = TRUE[TWO],              // "u" = "true"[2]
  E = TRUE[FOUR],             // "e" = "true"[3]

  S = FALSE[THREE],           // "s" = "false"[3]

  O = OBJECT[ONE],            // "o" = "[object]"[1]
  J = OBJECT[ONE],            // "j" = "[object]"[3]
  C = OBJECT[FIVE],           // "c" = "[object]"[5]

  N = UNDEFINED[ONE],         // "n" = "undefined"[1]
  I = UNDEFINED[FIVE],        // "i" = "undefined"[5]

  // Function constructor
  CONSTRUCTOR_STRING = C + O + N + S + T + R + U + C + T + O + R,
  FUNCTION = TRUE[CONSTRUCTOR_STRING][CONSTRUCTOR_STRING],

  JOIN = J + O + I + N,
  RETURN = R + E + T + U + R + N + SPACE; // @todo: may use eval(x="")

const NUMBERS = [ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT];

console.log(NUMBERS);

FUNCTION(
  FALSE[ONE] +              //  "a"
  FALSE[TWO] +              //  "l"
  TRUE[THREE] +             //  "e"
  R +                       //  "r"
  T +                       //  "t"
  "(ONE)"                   // "(1)"
)()


