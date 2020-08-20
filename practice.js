function questionMarks(string) {
    const str = string.split("");
     return str;
   }
   
   function isIsogram(str) {
       const charCheck = /(\w).*\1/i.test(str); 
     return !charCheck;
   } 
   
   // count the amoutn of vowels in string by comparing the string that's passed in against one that holds the vowels you're looking for
   function getCount(str) {
     let vowelsMatch = "aeiou";
     //this is your counter
     let vowelsCount = 0;
     //loop over the string that is passed in 
     for (i=0; i < str.length; i++) {
     //loop over the vowels string to compare each index position against the string that was passed in to find any matches
       for (v=0; v < vowelsMatch.length; v++) {
         // if any 2 indexes are equal, add 1 to the vowel count
         if (str[i] === vowelsMatch[v]) {
           vowelsCount++;
         }
       }
     }
     return vowelsCount;
   }
   
   
   function vowelCount(str) {
     let word = str.split("");
     let vowelsMatch = ["a", "e", "i", "o", "u"];
     //this is your counter
     let vowelsCount = 0;
     //loop over the string that is passed in 
     for (i=0; i < word.length; i++) {
     //loop over the vowels string to compare each index position against the string that was passed in to find any matches
       for (v=0; v < vowelsMatch.length; v++) {
         // if any 2 indexes are equal, add 1 to the vowel count
         if (str[i] === vowelsMatch[v]) {
           vowelsCount++;
         }
       }
     }
     return vowelsCount;
   }
   
   function count(str) {
   let word = str.split("");
   console.log(word)
   const vowelCount = word.match(/[aeiou]/);
     return vowelCount;  
   }
   
   //function getCount2(str) {
    // var vowelsCount = 0;
    // vowelsCount = str.match(/[aeiou]/gi);
     //return vowelsCount ? vowelsCount.length:0;
   //} 
   
   const numbers = [1,78,-5,22]
     
   function findLowest(firstNum, secondNum) {
     return firstNum -secondNum;
   }
   
   const smallestInt = numbers.sort(findLowest);
   console.log(smallestInt[0]);
   
   
   class SmallestIntegerFinder {
     findSmallestInt(args) {
       args.sort(function(a, b) {return a - b;});
       return args[0];
     }
   }

   
   function arrayDiff(a, b) {
     const newArray = [];
    a.forEach(aEl => {
      console.log(aEl);
      b.forEach(bEl => {
        if (aEl === bEl) {
          newArray.push(aEl);
        } 
      });
    });
    return newArray;
  }
  
  // how do we call this? 
  var summation = function (num) {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      result = i + result;
    }
    
  }

  //summation(num);

  // Not working yet
  function towerBuilder(nFloors) {
    //empty array to push the end result to
    let tower = [];
    //you need something that adds the *s for the floors 
    let towerBlock = '*';
    let space = " ".repeat(nFloors - i);
    //a loop that increments to build the passed in # of floors
    for (i = 1; i <= nFloors; i++) {
      //do something
      towerBlock.repeat(2);
      console.log(towerBlock);
    }
    //you'll need to push the result to your empty array
    //return your array
    return tower;
  }


  const array = [7,5,4,6,3,1,8];

  function sortArray(array) {
    
    let oddArray = [];
    let evenArray = [];

    function sortOdd(a, b) {
      return a - b;
    }

    //check each number in the array is odd or even
    array.forEach(index => {
      if (index % 2 ===1) {
        //if odd, push to odd array
        //console.log(index);
        oddArray.push(index);
      } else {
        evenArray.push(index);
      }
    })

    let combined = oddArray.sort(sortOdd).concat(evenArray);
    
    // Return a sorted array.
    return combined;
  }


//TASK
// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.

// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//EXAMPLE
//sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]


// SOLUTION
function sortArray2(array) {

  var odd = array.filter(is_odd).sort(ascending);
  return array.map(replace_odd_inorder);


  function ascending(a, b) {

    return a > b;
  }

  function is_odd(num) {

    return num % 2;
  }

  function replace_odd_inorder(num) {

    return is_odd(num) ? odd.shift() : num;
  }
}


// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// you're going to need to replace certain characters with nothing to create camel casing

//you'll need to upper case the first letter of each word as in camel casing

// you'll need to check if the first word of the string was passed in as capitalized. it should stay that way if so

function toCamelCase(string) {
  //let re1 = new RegExp("-_");
  let newString = string.replace(/-_/g, "");
  console.log(newString);
}
