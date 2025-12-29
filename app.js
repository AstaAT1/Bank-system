// let data = []
// let special = /[!@#$%^&*()\-+={}[\]:;"'<>,.?\/|\\]/

// let askUser = prompt("Log In || Sign Up || Reset Password")
// if (askUser == "sign up"){
//     let fullname = prompt("What is your Name (Full)")
//     if (fullname.length < 5) {
//          alert("your name is incorrect , try again")
//     }
    
//     else if (special.test(fullname)){
//         alert("your name is incorrect , try again")
//     }
// }


// function capitalized(c) {
//   return c.split(" ").map(char => {
//     return char.charAt(0).toUpperCase() + char.slice(1).toLowerCase();
//   }).join(" ");
// }



// .Trim()


// .toLowerCase()  || for email
// let email = prompt("Can you entre your email")
// if( !email.includes("@") ){
//     alert("email is incorrect , try again")
// }

// // Example usage:
// const input = "hello woRld thIs is a test";
// const result = capitalizeEachWord(input);
// console.log(result); // Output: "Hello WoRld ThIs Is A Test"

let users = []

let special = /[^a-zA-Z\s]/ 

class User {
  constructor(fullname , email) {
    this.fullname = fullname
    this.email = email
  }
}


function capitalizeName(name) {
  return name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
}

// Validate full name
function validateFullName(name) {
  name = name.trim()

  if (name.length < 5) {
    alert("your name is incorrect , try again")
    return null
  }

  if (special.test(name)) {
    alert("your name is incorrect , try again")
    return null
  }

  return capitalizeName(name)
}

let askUser = prompt("Log In || Sign Up || Reset Password")

if (askUser.toLowerCase() === "sign up") {
  let fullnameInput = prompt("What is your Full Name")

  let validName = validateFullName(fullnameInput)

  if (validName !== null) {
    let newUser = new User(validName)
    users.push(newUser)
    alert("Your Name is successfully")
  }
}
// Validate email