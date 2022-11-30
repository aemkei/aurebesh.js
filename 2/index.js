function aurebesh(alphabet, code) {
  var code = `[A,B,C,D,E,,,,,F,,,G,,,,H,,,,,I,,J,K,L]=($='"\\\\')+!!$+!$+$.$+[]+{};M=+!I,N=+!!I,O=N+N,P=O+N,Q=O+O,R=P+O,S=P+P,T=Q+P,U=L+I+G+F+C+D+E+L+C+I+D,U=U[U][U],V=J+I+H+G,W=D+K+C+E+D+G+" ";U("console.log('works')")()`;

  if (!alphabet || !alphabet.length) {
    return 'Please enter at least one character.';
  }

  if (typeof alphabet == 'string') {
    if (alphabet.indexOf(',') > 0) {
      alphabet = alphabet.split(',');
    } else {
      alphabet = [... alphabet];
    }
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

  console.log(alphabet.length, alphabet);

  code = code.replace(/[A-Z]/g, function(char) {
    return alphabet[char.charCodeAt(0) - 65];
  });

  return code;
}

var $alphabet = document.getElementById('your-input'),
  $code = document.getElementById('your-code'),
  $preview = document.getElementById('your-output');

input.addEventListener('keyup', function() {
  var alphabet = $alphabet.value;
  var code = $code.value;
  $preview.innerHTML = aurebesh(alphabet, code);

  if (alphabet || code) {
    document.location.hash = escape(JSON.stringify({alphabet, code}));
  } else {
    document.location.hash = '';
  }

});

var hash = document.location.hash;
if (hash) {
  const {alphabet, code} = JSON.parse(unescape(hash.slice(1)));
  $alphabet.value = alphabet;
  $code.value = code;
  $preview.innerHTML = aurebesh(alphabet, code);
}
