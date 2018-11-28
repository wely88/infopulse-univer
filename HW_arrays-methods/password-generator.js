//password with range a-z
var password = '',
    passLength = 10,
    m = 97,
    n = 122;
	

for(var i = 0; i < passLength; i++){
  var passSymbol = Math.floor(Math.random() * (n - m + 1)) + m;
  password += String.fromCharCode(passSymbol) + ''
}

console.log(password)

console.log('----------')

//password with ranges a-z, A-Z, 0-9

var password = '',
    passLength = 10,
    m = 48,
    n = 122,
    i = 0;
	

while(i < passLength){
  var passSymbol = Math.floor(Math.random() * (n - m + 1)) + m;
    if((passSymbol <= 57) || (passSymbol >= 65 && passSymbol <= 90) || (passSymbol >=97)){
     password += String.fromCharCode(passSymbol) + '';
     i++;
    }
}

console.log(password)
