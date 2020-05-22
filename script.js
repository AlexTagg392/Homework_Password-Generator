var generateBtn = document.querySelector('#generate');
 function generatePassword() {
    var totalCharacters = prompt('How many characters would you like to use for your new secure password? (8-128) ');
      if (isNaN(totalCharacters) || totalCharacters < 8 || totalCharacters > 128) {
        alert("Wrong! Length must be 8-128 characters.");
        return '';
      } 
    var typesOfCharacters = {
      'lowercase': 'abcdefghijklmnopqrstuvwxyz',
      'uppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      'symbols': '!#$%&*+-:;<=>',
    }
    var useLower = confirm('Would you like lower-case characters in your password?');
    var useUpper = confirm('Would you like upper-case characters in your pasword?');
    var useNumbers = confirm('Would you like numbers in your password?');
    var useSymbols = confirm('Would you like special characters in your password?');
    
    var possibleCharacters = [];
    if (useLower) {
      possibleCharacters = possibleCharacters.concat(typesOfCharacters.
        lowercase.split(""));
    }
    if (useUpper) {
      possibleCharacters = possibleCharacters.concat(typesOfCharacters.
        lowercase.toUpperCase().split(""));
    }
    if (useNumbers) {
      for (var i = 0; i < 10; i++) {
        possibleCharacters.push(i)
      }
    }
    if (useSymbols) {
      possibleCharacters = possibleCharacters.concat(typesOfCharacters.
        symbols.split(""));
    }
    else {
      alert('You must choose one, Click Generate Password again');
    }

    var password = '';
    for (var i = 0; i < totalCharacters; i++) {
      var position = Math.floor(Math.random() * possibleCharacters.length);
      password = password + possibleCharacters[position];
    } 
  return password;
}
  function writePassword() {
    event.preventDefault();
    var password = generatePassword();
    var securePassword = document.getElementById('password');
    securePassword.value = password;
  }
generateBtn.addEventListener('click', writePassword);
  
  
  
