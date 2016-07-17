function aurebesh(alphabet) {
  var code = 'A=\'\',B=!A+A,C=!B+A,D=A+{},E=B[A++],F=B[G=A],H=++G+A,I=D[G+H],B[I+=D[A]+(D.D+D)[A]+C[H]+E+F+B[G]+I+E+D[A]+F][I](C[A]+C[G]+B[H]+F+E+"`A`")``';

  if (!alphabet || !alphabet.length) {
    return 'Please enter at least one character.';
  }

  if (typeof alphabet == 'string') {
    alphabet = alphabet.split('');
  }

  var invalid = alphabet.filter(char => {
    try {
      eval(`${char} = 1`);
    } catch (e) {
      return true;
    }
  });

  if (invalid.length) {
    return `Invalid variable names: ${invalid}.`
  }


  while (alphabet.length < 9) {
    var length = alphabet.length;

    alphabet.forEach(a => {
      alphabet.forEach(b => {
        if (alphabet.indexOf(a + b) == -1){
          alphabet.push(a+b);
        }
      });
    });
  }

  for (var input, i = 0; i < 9; i++) {
    input = String.fromCharCode(65 + i);
    code = code.split(input).join(alphabet[i] || "XXX");
  }

  return code;
}

var alphabets = {
  'aurebesh': 'ロコYㅣᗐΞΔᐳㅡ',
  'katakana': 'アウセヌネハヘホミ',
  'greek': 'πβεγμτφθλ',
  'hangul': 'ᅺᅻᅼᅽᅾᅿᆀᆁᆂᆃ',
  'thai': 'กวอซฝคงญฒ',
  'cyrillic': 'БДИЖЩЗЛЮФ',
  'gurmukhi': 'ਗਨਹਤਕੲਲੜਵ',
  'hebrew': 'אבגדהוחטכ',
  'javanese': 'ꦊꦄꦌꦍꦎꦏꦐꦑꦒ',
  'arabic': 'غػؼؽؾؿـفق',
  'ᐳㅣᐸ': 'ᐳᐸㅣ',
  'o': 'òŏôǒöőõȯōȍ',
  'symbols': '_ʽːᆢ〱〳ㅡㅣㆍ',
  'abc': 'ABCDEFGHI',
  'emoticons': ['ó‿ó', 'σ_σ', 'δﺡό', 'סּ_סּ', 'ಠ_ಠ', 'ö‿o', 'oﺡo', 'σ_o', 'ಠ‿ಠ'],
  'slash': '〳',
  'test invalid chars': '01'
}

var output = document.getElementById('output');

Object.keys(alphabets).forEach(name => {

  var alphabet = alphabets[name],
    translation = aurebesh(alphabet);

  output.innerHTML += `<article><h3>${name.toUpperCase()}</h3><div class="alphabet">// ${alphabet}</div><div>${translation}<div></article>`;
});


