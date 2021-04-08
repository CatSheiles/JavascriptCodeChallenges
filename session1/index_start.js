// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    str = str.split("")
    .reverse()
    .join("");
     return str;
}

//in C++ you would do this, but lots of room for errors
//let reverseString = "";
//for(let i=0; i<=str.length -1; i++){
  //reverseString = str[i] + reverstString;
  //}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  if(str == reverseString (str)) {
    return true;
  }
    else
      return false;
}



// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  let reverseNum = reverseString(int.toString());
  return reverseNum;
}



// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  
  //let capString = str.toUpperCase(); // returns all capitals option just these 2 lines
  //return capString;

    let capitalizeLetters = str.split(" ");

    for (let i = 0; i < capitalizeLetters.length; i++){
      capitalizeLetters[i] = capitalizeLetters[i][0].toUpperCase() + capitalizeLetters[i].substr(1);
    }
    return capitalizeLetters.join(" ");
}

//option 2 - Challenge 4:
function capitalizeLetters2(str){
  let capitalizeLetters = str.split(" ");

  capitalizeLetters = capitalizeLetters.map((word)=>{
    word = word[0].toUpperCase() + word.substr(1);
    return word;
  });

  return capitalizeLetters.join(" ");
}


// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {

  let max = 0; //this is a moon logic problem --haha

  for(i = 0; i < str.length; i++){ //checking first character
    let sameChar = 1;
    for(let j = 0; j < str.length; j++) //check if any other characters are the same as first character
    { //                                  and repeat for all characters  
      if(str[i] == str [j] && i != j) sameChar++; //&&i !=j means dont recount the letter you are checking twice
    }
    if(sameChar > max) max = i; //setting character with maximum value and setting it to the index of the character
  }
  
  return str[max]; //returning the index of the max character as the actual character
}



// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", 
//for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".

//cat note - are you kidding me!! more moon logic!!
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
      console.log("fizz");
    }
    if (i % 5 == 0 && i % 3 != 0) {
      console.log("buzz");
    }
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    }

    if(i % 3 != 0 && i % 5 != 0)
    {
      console.log(i);
    }
  }
}

//fizzBuzz Wookie Cheat Sheet version - soooooo very clever!! defeats moon logic!!
function fizzbuzz2()
{
  for(let i = 1; i <= 100; i++)
  {
    let str = "";

    if(i % 3 == 0) str += "Fizz";
    if(i % 5 == 0) str += "buzz";

    if(str == "") console.log(i)
    else console.log(str);
  }
}


// Call Function
//const output = reverseString('hello');
//const output = isPalindrome('racecar');
//const output = isPalindrome('hello');
//const output = reverseInt(521);
//const output = capitalizeLetters('i love javascript');
//const output2 = capitalizeLetters2('i love javascript');
//const output = capitalizeLetters('i love javascript'); //all caps

//const output = maxCharacter('javascript');
const output = fizzBuzz();
//const output = fizzbuzz2();


console.log(output);
