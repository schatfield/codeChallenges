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