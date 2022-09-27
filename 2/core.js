[
  QUOTE,          // '""
  BACKSLASH,      // '\\'
  T,R,U,,         // 'true'
  ,,,S,,          // 'false'
  ,N,,,,I,,,,     // 'undefined'
  ,O,,J,E,C       // '[object Object]'
] = 
  (X='"\\') +     // "\
  !!X +           // true
  !X +            // false
  X.X +           // undefined
  {}              // {}

_0 = +!O,         // 0
_1 = +!!O,        // 1
_2 = _1 + _1,     // 2
_3 = _2 + _1,     // 3
_4 = _2 + _2,     // 4
_5 = _3 + _2,     // 5
_6 = _3 + _3,     // 6
_7 = _4 + _3,     // 7

// Function constructor
CONSTRUCTOR = C + O + N + S + T + R + U + C + T + O + R,
CONSTRUCTOR = CONSTRUCTOR[CONSTRUCTOR][CONSTRUCTOR],

// shortcut to "join" and "return "
JOIN = J + O + I + N,
RETURN = R + E + T + U + R + N + ' ';