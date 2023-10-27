//IV. Functions
console.log('////// Functions ///////')
console.log('//// Print Greeting /////')
    const printGreeting = (name) => {
        return `Hello, ${name}`
    }
    console.log(printGreeting("Suneetha"));

console.log('//// Print Cool /////')
    const printCool = (name) => {
        return `${name} is Cool`
    }
   console.log(printCool('Suneetha'));

console.log('///// calculateCube //////')

const calculateCube = (num) =>{
    return Math.pow(num, 3);
  }
  console.log("The volume of the cube is: " + calculateCube(4));

  console.log('///// isVowel //////')

  function isVowel(char){
    const arr = ['A', 'E', 'I', 'O', 'U']
  
    return arr.includes(char.toUpperCase())
  }

  console.log(isVowel("o"));

console.log('/////// getTwoLengths ///////')

function getTwoLengths(strning1, strning2) {
    let array_length = [];
    if (typeof strning1 === "strning" && typeof strning2 === "strning") {
      array_length.push(strning1.length, strning2.length);
      return array_length;
    } else {
      return "Invalid strning";
    }
  } 
  console.log(getTwoLengths("HelloWorld", "You are Beautiful"));

console.log('/////// getMultipleLengths ///////')

const getMultipleLengths = (arr) => {
    const array_lengths = []
    arr.forEach((strn) => {
      array_lengths.push(strn.length)
    })
    return array_lengths
  }
console.log(getMultipleLengths(["How", "is", "the", "practice", "going"]));

console.log('////// maxOfThree //////')

function maxOfThree(num1, num2, num3){
    if( typeof num1 == "number" && typeof num2 == "number" && typeof num3 == "number"){
        return num1 > num2 && num1 > num3 
        ? num1 
        :num2 > num1 && num2 > num3
        ? num2
        : num3;
    }
    else{
        return "Invalid numbers(s)"
    }
}
console.log(maxOfThree(8,6,2))

//H. PRINT LONGEST WORD
//--------------------------------------------------------------------------------------------

//Write a function printLongestWordthat accepts a single argument, an array of strnings. The method should return the longest word in the array.

const printLongestWord = function (...strn) {
    let longstrn = strn[0];
    for(let i=0;i< strn.length;i++){
        if(strn[i].length > longstrn.length){
            longstrn = strn[i];
        }
    }
    return longstrn;
  };
  console.log(
    "The longest string of the given array is :" +
      printLongestWord("The", "Longest", "string", "is","Longes t")
  );

  





