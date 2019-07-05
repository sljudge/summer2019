// example crowd gathering
let crowd = 'P1CP2PCC3P4P5P6CCCP7PC8P9';

let reCriminals = /C+/g; 

let matchedCriminals = crowd.match(reCriminals);
// console.log(matchedCriminals);

////////////////////////////////////////////////////////

// username checker
/*1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.

2) Username letters can be lowercase and uppercase.

3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z]{2,}\d*$/i; // \w for letters and numbers (\W = [^\w]) and \d for numbers
let result = userCheck.test(username);
// console.log(result);

///////////////////////////////////////////////////////////////////////////

//check for mulitple whitespace
let sample = "Whitespace is important in separating  words";
let countWhiteSpace = /\s{2,}/g; // \s = [\r\t\f\n\v]
let result2 = sample.match(countWhiteSpace);
console.log(result2);

///////////////////////////////////////////////////////////////

//Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long and have two consecutive digits.

let sampleWord = "astron91aut";
let pwRegex = /(?=\w{5,})(?=.*\d{2}.*)/; // ?= looks ahead to make sure search pattern is there and ?! looks ahead to check pattern is not there
let result3 = pwRegex.test(sampleWord);
// console.log(result3);

/////////////////////////////////////////////////////////////////

//Use capture groups in reRegex to match numbers that are repeated only three times in a string, each separated by a space.

let repeatNum = "42 42 42";
let reRegex = /(\d+)(\s)\1\2\1/; //
let result4 = reRegex.test(repeatNum);
// console.log(result4);

/////////////////////////////////////////////////////////////////////

let hello = "   Hello, World!  ";
let wsRegex = /^\s*|\s*$/; // .trim()
let result5 = hello.replace(wsRegex, '');
console.log(result5);
