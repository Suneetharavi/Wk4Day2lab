//  1)How do we assign a value to a variable?
        let myName='Suneetha';
//  2)How do we change the value of a variable?
        myName='Swetha';
//  3)How do we assign an existing variable to a new variable?
        let new_name=myName;
//  4)Remind me, what are declare, assign, and define?
        let num; // declare
        num = 10; // assign and define the variable

//  5)What is pseudocoding and why should you do it?
        // Pseudocode is a technique used to describe the distinct steps of an algorithm 
        // in a manner that's easy to understand for anyone with basic programming knowledge.
        // It is used as a planning and communication tool during the early stages of software 
        // development to outline the steps and algorithms that a program will follow.
        // It is used for creating an outline or a rough draft of a program.
        // Pseudocode summarizes a program's flow, but excludes underlying details.

//  6)What percentage of time should be spent thinking about how 
     //you're going to solve a problem vs actually typing in code to solve it?

    // In my Opinion it depends on the Problem and Experience we have. Its around 60% of time we
    //will spent on thinking about how we are solving vs actual typing in code.  

    //  B. STRINGS
console.log('///// STRINGS //////')
// 1.Create a variable called firstVariable
        let firstVariable;

//2.Assign it the value of the string "Hello World"
        firstVariable = "Hello World";

//3.Change the value of this variable to some number
        firstVariable = 34;

//4.Store the value of firstVariable in a new variable called secondVariable
        let secondVariable = firstVariable

//5.Change the value of secondVariable to any string.
        secondVariable = 'Strong'

//6.What is the value of firstVariable?
        34

//Create a variable called yourName and set it equal to your name as a string.
//Then, write an expression that takes the string "Hello, my name is " and the variable yourName
//so that it returns a new string with them concatenated.

    let yourName = 'Suneetha'
    console.log(`My name is ${yourName}`); //Prints-  My name is Suneetha

//C. Booleans
//Using the provided variable definitions, replace the blanks so that all log statements print true in the console. 
//Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
  console.log('//////  Booleans /////')
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a != b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false && false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

console.log('/////// The Farm ///////')

const animal = 'cow'
if ( animal === 'cow')
console.log("mooooo")
else 
console.log("Hey! You're not a cow")

// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or,
//  if the age is younger than 16,a message should print "Sorry, you're too young."

  let age = 16;
  if(typeof age == "number" && age >= 16){
    console.log("Here are the keys!");
  }
  else{
    if(typeof age == "number"){
        console.log("Sorry, you're too young.")
    }
    else{
        console.log("Not a valid Input");
    }
  }

//   A. The basics
console.log('\n ////// The Basics ///////')

// Write a loop that will print out all the numbers from 0 to 10, inclusive
console.log('/n Printing numbers from 0 to 10')
for (let i=0; i<=10; i++){
        console.log(i);
}

// Write a loop that will print out all the numbers from 10 up to and including 400
console.log('/n Printing numbers from 10 to and including 400')
for (let j=10; j<=400; j++){
        console.log(j);
}

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
console.log('/n Printing every third number starting with 12 and going no higher than 4000')
for (let k=12; k<=4000; k+=3){
        console.log(k);
}

// B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
console.log('\n///// Get Even ///// \n')

for(let l=1; l<100; l++)
if(l%2 == 0){
        console.log(l+'is an even number')
}
else{
        console.log(l)
}

// C. Give me Five
// For the numbers 0 - 100, 
// print out "I found a number. High five!" if the number is a multiple of five

console.log('\n ////// Give me Five //////// \n')
for(let h=1; h<=100; h++){
        //For numbers divisible by both three and five, be sure your code prints both messages
        if(h%3 == 0 && h%5 == 0){
                console.log("I found a number. High five! and I found a ${h}. Three is a crowd")
        }
        else if(h%5 == 0){
                console.log("I found a number. High five!")
        }
        //Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
        else if(h%3 == 0){
                console.log(`I found a ${h}. Three is a crowd`)
        }
        else{
                console.log(h)
        }
}

//D. Savings account
console.log('\n //////// Savings Account /////////')
// Write code that will save the sum of all the numbers between 1 - 10
//  to a variable called bank_account.
let bank_account = 0;
for(let s=1; s<=10; s++){
        bank_account = bank_account+ s;
        //console.log(bank_account)
}
console.log(`/n Bank balance = $${bank_account}`)

//You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
//Check your work! Your bank_account should have $10,100 in it.

let bank_acct = 0;
for(let b=1; b<=100; b++){
        bank_acct = (bank_acct+ b);
}
console.log(`/n Bank balance after Bonus = $${(bank_acct)*2}`)

















