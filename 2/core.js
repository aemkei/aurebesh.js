//자='',바=!자+자,스=!바+자,크=자+{},립=바[자++],트=바[코=자],리=++코+자,아=크[코+리],바[아+=크[자]+(바.스+크)[자]+스[리]+립+트+바[코]+아+립+크[자]+트][아](스[자]+스[코]+바[리]+트+립+"('자바스크립트')")()

 
  [
    QUOTE, 
    BACKSLASH,
    T,R,U,,       // 'true'
    ,,,S,,        // 'false'
    ,N,,,,I,,,,   // 'undefined'
    ,O,,J,E,C     // '[object Object]'
  ] = 
    ($='"\\') +
    !!$ +       // true
    !$ +        // false
    $.$ +       // undefined
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

  JOIN = J + O + I + N,
  RETURN = R + E + T + U + R + N + ' ';

CONSTRUCTOR("console.log('works')")()

// shortcuts

