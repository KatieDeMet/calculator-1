const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);

	if (mathSymbol === '+'){
		console.log(num1 + num2);
	} else if (mathSymbol === '-'){
		console.log(num1 - num2);
	} else if (mathSymbol === '*') {
		console.log(num1 * num2);
	} else if (mathSymbol === '/') {
		console.log(num1 / num2);
	} else if (mathSymbol === 'sqrt') {
		console.log(Math.sqrt(num1));
	} else if (mathSymbol === 'square') {
		console.log(num1 * num1);
	} else if (mathSymbol === 'cube') {
		console.log(num1 * num1 * num1);
	} else if (mathSymbol === '^') {
		console.log(Math.pow(num1, num2));
	} else if (mathSymbol === '%') {
		console.log(num1 % num2);
	} 
	else {
		console.log('The calculator does not recognize your math symbol.')
	}


	// This line closes the connection to the command line interface.
	reader.close()

});
