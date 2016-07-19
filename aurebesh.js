function aurebesh(alphabet) {
  var code = 'A=\'\',B=!A+A,C=!B+A,D=A+{},E=B[A++],' +
    'F=B[G=A],H=++G+A,I=D[G+H],B[I+=D[A]+(B.C+D)[A]' +
    '+C[H]+E+F+B[G]+I+E+D[A]+F][I](C[A]+C[G]+B[H]+F+E+"(A)")``';

  if (!alphabet || !alphabet.length) {
    return 'Please enter at least one character.';
  }

  if (typeof alphabet == 'string') {
    var separator = alphabet.indexOf(',') < 0 ? '' : ',';
    alphabet = alphabet.split(separator);
  }

  var invalid = alphabet.filter(function(char) {
    var valid = true;

    try {
      eval(`${char} = 1`);
    } catch (e) {
      valid = false;
    }
    return !valid;
  });

  if (invalid.length) {
    return `Invalid identifier name: ${invalid}. <br>
      Read more here:
      https://mathiasbynens.be/notes/javascript-identifiers`;
  }

  alphabet = alphabet.filter(function(char, index) {
    return index <= alphabet.indexOf(char);
  });

  while (alphabet.length < 9) {
    alphabet.forEach(function(a) {
      alphabet.forEach(function(b) {
        if (alphabet.indexOf(a + b) === -1) {
          alphabet.push(a + b);
        }
      });
    });
  }

  code = code.replace(/[A-Z]/g, function(char) {
    return alphabet[char.charCodeAt(0) - 65];
  });

  return code;
}

var alphabets = {
  'Aurebesh': 'ロコYㅣᗐΞΔᐳㅡ',
  'Katakana': 'アウセヌネハヘホミ',
  'Greek': 'πβεγμτφθλ',
  'Hangul': 'ᅺᅻᅼᅽᅾᅿᆀᆁᆂᆃ',
  'Thai': 'กวอซฝคงญฒ',
  'Cyrillic': 'БДИЖЩЗЛЮФ',
  'Gurmukhi': 'ਗਨਹਤਕੲਲੜਵ',
  'Hebrew': 'אבגדהוחטכ',
  'Javanese': 'ꦊꦄꦌꦍꦎꦏꦐꦑꦒ',
  'Diacritical Marks': 'ò́̂,o̖̔̕,o̞̟̠,ò́̂̃,o̖̗̔̕,o̡̞̟̠,o̡̢̞̟̠̣,o̖̗̘̙̔̕,ò́̂̃̄',
  'Arabic': 'غػؼؽؾؿـفق',
  'ᐳㅣᐸ': 'ᐳᐸㅣ',
  'ooo': 'òŏôǒöőõȯōȍ',
  'Deutsch': 'Ä,ja,nein,ö,Ü,sch,Schnitzel,Bier,ß',
  'SPACE': '_',
  'XXX': 'xX',
  'Kannada': 'ಠಉನಊಝಏೡಖತ',
  'Symbols': '_ʽːᆢ〱〳ㅡㅣㆍ',
  'Kanji': '㒓㒲㒳㒴㒵㒶㒷㒸㒺',
  'ABC': 'ABCDEFGHI',
  'Emoticons': ['ó‿ó', 'σ_σ', 'δﺡό', 'סּ_סּ', 'ಠ_ಠ', 'ö‿o', 'oﺡo', 'σ_o', 'ಠ‿ಠ'],
  'Slash': '〳'
};

var output = document.getElementById('output');

Object.keys(alphabets).forEach(function(name) {
  var alphabet = alphabets[name],
    translation = aurebesh(alphabet);

  output.innerHTML += `<article>
    <h3>${name}</h3>
    <div class="alphabet">//&nbsp;${alphabet}</div>
    <div>${translation}</div>
    </article>`;
});

var input = document.getElementById('your-input'),
  preview = document.getElementById('your-output');

input.addEventListener('keyup', function() {
  var value = input.value;
  preview.innerHTML = aurebesh(value);
  document.location.hash = escape(value);
});

var hash = document.location.hash;
if (hash) {
  var value = unescape(hash.slice(1));
  input.value = value;
  preview.innerHTML = aurebesh(value);
}
