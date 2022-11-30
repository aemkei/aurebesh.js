function aurebesh(alphabet, code) {

  if (alphabet.indexOf(',') > 0) {
    alphabet = alphabet.split(',');
  } else {
    alphabet = [... alphabet];
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

  if (alphabet.length < 9) {
    return 'Please enter at least nine different symbols.';
  }

  while (alphabet.length < 26) {
    alphabet.forEach(function(a) {
      if (alphabet.length >= 26) {
        return;
      }
      alphabet.forEach(function(b) {
        if (alphabet.indexOf(a + b) === -1) {
          if (alphabet.length >= 26) {
            return;
          }
          alphabet.push(a + b);
        }
      });
    });
  }

  return convert(alphabet, code);
}

var $alphabet = document.getElementById('your-input'),
  $code = document.getElementById('your-code'),
  $preview = document.getElementById('your-output');

input.addEventListener('keyup', function() {
  var alphabet = $alphabet.value;
  var code = $code.value;
  $preview.innerHTML =  aurebesh(alphabet, code);

  if (alphabet || code) {
    document.location.hash = escape(JSON.stringify({alphabet, code}));
  } else {
    document.location.hash = '';
  }
});

var hash = document.location.hash;

if (hash) {
  hash = JSON.parse(unescape(hash.slice(1)))
} else {
  hash = {};
}

if (hash.alphabet){
  $alphabet.value = hash.alphabet;
} else {
  hash.alphabet = $alphabet.value
}

if (hash.code) {
  $code.value = hash.code;
} else {
  hash.code = $code.value;
}

$preview.innerHTML = aurebesh(hash.alphabet, hash.code);
