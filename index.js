function isPalindrome(word) {
  // Write your algorithm here
  let left = 0;
  let right = word.length-1;
  while( left< right){
    if(word.charAt(left) != word.charAt(right)){
      return false;
    }
    left ++;
    right --;
  } 
  return true;
}

/* 
  Add your pseudocode here
  Initalize left and right pointers (left starts at index 0 and right starts at the end of the string)
  While loop: Check if left and right pointers have met up and end loop once they have
    check if the characters at left and right pointers are the same --> if not return false
      if they are the same, increment left pointer and decrement right pointer
  
  return true after the while loop ends 
    
*/

/*
  Add written explanation of your solution here
  I iterated through the string checking if the left and right characters of the string matched until 
  the left pointer met up with/passed the right pointer.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("map"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
