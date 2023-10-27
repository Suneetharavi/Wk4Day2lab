console.log('////// Arrays & Control Flow ///////')

// A. Talk about it:
// What are the things in an array called?
    console.log('\n The Things in an Array are called Elements ')
// Do Arrays guarantee those things will be in order?
     console.log(' Yes, Arrays always maintain an order')
// What real-life thing could you model with an array?
  //Contacts on a cell phone, Water bottles in cartons, A Biscuit packet.

  console.log('\n ///////////////////// \n')
  //B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes/

const quotes=['Great Job..!!','Keep it up...!!','Well said..!!']

 //////////////////////////////////////////////

//C. Accessing elements
// Given the following array
 const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
console.log(`The first elemenet in the Array is: ${randomThings[0]}`)
// Change the value of "Hello"to "World"
randomThings[2]='World'
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)

console.log('/////////////////////////////////////////////////')
// D. Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
console.log(ourClass[2]);
// Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
// Add a new element, "Cloud City" to the array
ourClass.push("Cloud City");
console.log("The new ourClass Array: \n"+ourClass)

console.log('/////////////////////////////////////////')

// E. Mix It Up
// Given the following array: 
const myArray = [5, 10, 500, 20]
console.log('The Initial array is \n' +myArray)
//Add the string "Aegon"to the end of the array. 
//Add another string of your choice to the end of the array.
myArray.push('Aegon')
console.log('The  array after adding Aegon : \n' +myArray)
//Remove the 5 from the beginning of the array.
myArray.shift()
console.log('The  array after removing element from beginning : \n' +myArray)
//Add the string "Bob Marley" to the beginning of the array.
myArray.unshift('Bob Marley')
console.log('The  array after adding element to beginning : \n' +myArray)
//Remove the string of your choice from the end of the array.
myArray.pop()
console.log('The  array after deleting an element from the end : \n' +myArray)
//Reverse this array using Array.prototype.reverse(). Did you mutate the array? 
//What does mutate mean? Did the .reverse()method return anything?
myArray.reverse()
console.log('The  array after using reverse() : \n' +myArray)
 // Yes ,it mutates the array. Mutate means 'changing' the original array (Here , methods that will modify the original element)...
 //reverse() method overwrites the original array...reverse() Returns the Array after it has been reversed.


 console.log('//////////////////////////////////////////////////')
//  F. Biggie Smalls
// Create a variable that contains an integer.
let variable = 60;
// Write an if ... elsestatement that:
// console.log()s "little number" if the number is entered is less than 100
// console.log()s big numberif the number is greater than or equal to 100.
if(typeof variable === 'number' && variable<100){
    console.log(`The number ${variable} is "little number"`)
}
else if(typeof variable === 'number' && variable>=100){
    console.log(`The number ${variable} is "big number"`)
}
else{
    console.log("Please enter a valid number")
}

console.log('/////////// Monkey in the Middle //////////////')
// Write an if ... else if ... elsestatement:
// console.log()little numberif the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".

let input_number = 8;
if(typeof input_number === "number" && input_number < 5){
    console.log(input_number+ "is a Little number");
}
else if(typeof input_number === "number" && input_number > 10){
    console.log(input_number+ " is a Big Number");
}
else{
    console.log("Monkey");
}

console.log("//////// What's in Your Closet ////////")
//Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  //What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset,
  // log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
  
  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

  //2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".

  kristynsCloset.splice(6,0,"Raybans");
  console.log(kristynsCloset);

  //3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.

  kristynsCloset[5] = "Stained Knit hat";
  console.log('The Array after changin to stained KLnit Hat is: \n ');
  console.log(kristynsCloset)

  //4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
  console.log(`The First element in Thom's shirt Array is: ${thomsCloset[0][0]}`);

  //5. In the same way, access one item from Thom's pants array.
  console.log(thomsCloset[1][2]);

  //6. Access one item from Thom's accessories array.
  console.log(thomsCloset[2][2]);

  //7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"

  console.log(`Thom is looking handsome in a ${thomsCloset[0][3]},${thomsCloset[1][1]} and ${thomsCloset[2][2]}`)

  //8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

  thomsCloset[1][2] = "Footie Pajamas";
  console.log(thomsCloset);




