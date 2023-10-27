console.log('////// Objects ///////')
// A. Make a user object
// Create an object called user.
//const user = '';

// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.
    const user1={"name":"Suneetha","email":'fgf@gmail.com','age':25,'purchased':[]};
    console.log("The User Created");
    console.log(user1)

// B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

    user1.email = "hytthhg@gmail.com";
    user1.age++;
    console.log("The edited User");
    console.log(user1)
// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

    user1.location = 'Pittsburgh'
    console.log("The User after adding Location")
    console.log(user1)
// D. Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

    user1.purchased.push("Carbohydrates","Peace of Mind","Merino Jodhpurs");
    console.log(user1.purchased[2])

    console.log('///// Object - WITHIN - Object /////')
//1. Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)

    user1.friend = {
        name: "Lincoln",
        age: 95,
        location:"Washington",
        purchased:[]
    }
    console.log("The User object after adding a friend object in it..")
    console.log(user1);

//2. Console.log just the friend's name
    console.log(`The user friend name is: ${user1.friend.name}`)

//3. Console.log just the friend's location
    console.log(`User friend lives in : ${user1.friend.location}`)

//4. CHANGE the friend's age to 55
    user1.friend.age = 55;
    console.log(`My friends age edited to 55: ${user1.friend.age}`)

//5. The friend has purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
    user1.friend.purchased.push("The One Ring");
    console.log(user1)
//6. The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
    user1.friend.purchased.push("A latte");
    console.log(user1)
//7. Console.log just "A latte" from the friend's purchasedarray.
    console.log(user1.friend.purchased[1])

// console.log('////////// LOOPS //////////')
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
    user1.purchased.forEach((item) => {
        console.log(item);
    })
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
    user1.friend.purchased.forEach((items) => {
        console.log(items);
    })

  console.log ( '///// Functions can operate on objects //////')  
//   Write a single function updateUser that takes no parameters. When the function is run, it should:
//   it should increment the user's age by 1
//   make the user's name uppercase
//   The function does not need a returnstatement, it will merely modify the user object.

    function updateUser(){
        user1.age++;
        user1.name = user1.name.toUpperCase();   
    }
    updateUser();
    console.log('After using UpdateUser function:')
    console.log(user1)

// Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it 
// to only work on our userobject, make it take a parameter person, and have it modify the object that is passed
// in as an argument when the function is called. Call your oldAndLoud function with useras the argument.

    function oldAndLoud(person){
        person.age++;
        person.location = person.location.toUpperCase();
    }
    oldAndLoud(user1);
    console.log('After using oldAndLoud function:')
    console.log(user1)



