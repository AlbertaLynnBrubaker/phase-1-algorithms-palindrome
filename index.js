function isPalindrome(word) {
  const splitWord = word.split('');

  let truth;
  for(let i = 0; i < splitWord.length; i++) {
    if(splitWord[i] !== splitWord[(splitWord.length - 1) - i]) {
      truth = false;
      console.log(truth);
      return truth; // <--- this doesn't need to be done but makes the if easier to understand
    } else {
      truth = true;
    }
  }
  console.log(truth);
  return truth;
}

isPalindrome('mom')

// A function that takes a word as an input and checks to see if it is the same read backwards as it is forwards

/* 
  // Function
    // breaks word into array of individual letters
    // for loop
    // if statement
      // true if first and last letter are equal
      // true if second and second last letter ...

*/



/*
  The .split breaks the work into a new array of separated letters
  then for loop iterates through for a variable i vs. the array.length
  then the if statement asks if the letter for the first index equals the letter for the last index. If it comes back false then in sets truth to false and returns the function as false.
  then the for loop iterates again for i = 1
  then the if statement asks if the letter for the second index equals the second to last. Then the third... etc until it reaches the middle letter, which will always equal itself (for odd array lengths). So long as each iteration passes the if statement, the else will keep setting truth = true and the function with return truth as true

*/

//You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
