[
  QUOTE, 
  BACKSLASH,
  T,R,U,,     // 'true'
  ,,,S,,      // 'false'
  ,N,,,,I,,,, // 'undefined'
  ,O,,J,E,C   // '[object Object]'
] = 
  (X='"\\') +
  !!X +       // true
  !X +        // false
  X.X +       // undefined
  []+{}

_0 = +!O, 
_1 = +!!O,
_2 = _1 + _1,
_3 = _2 + _1,
_4 = _2 + _2,
_5 = _3 + _2,
_6 = _3 + _3,
_7 = _4 + _3,

// Function constructor
CONSTRUCTOR = C + O + N + S + T + R + U + C + T + O + R,
CONSTRUCTOR = CONSTRUCTOR[CONSTRUCTOR][CONSTRUCTOR],

// shortcut to "join" and "return "
JOIN = J + O + I + N,
RETURN = R + E + T + U + R + N + ' ';
