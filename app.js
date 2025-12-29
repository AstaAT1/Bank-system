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
  constructor(fullname , email, age) {
    this.fullname = fullname
    this.email = email
    this.age = age
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

// Validate email
function validateEmail(email) {
  email = email.trim().toLowerCase()

   if (email.length < 10) {
    alert("your email is incorrect , try again")
    return null
  }
    if (!email.includes("@")) {
      alert("your email is incorrect , try again")
  }
}

// Validate Age
function containsOnlyDigits(str) {
  if (str.length === 0) return false;
  return str.split('').every(char => char >= '0' && char <= '9');
}
function validateEmail(age) {
  age = age.trim()
}




let askUser = prompt("Log In || Sign Up || Reset Password")

if (askUser.toLowerCase() === "sign up") {
  let checkFullName = prompt("What is your Full Name")

  let validName = validateFullName(checkFullName)

  if (validName != null) {
    let newUser = new User(validName)
    users.push(newUser)
    alert("Your Name is successfully")
  }
  let checkEmail = prompt("What is your Email")
  let validEmail = validateEmail(checkEmail)
   if (validEmail != null) {
    let newEmail = new User(validEmail)
    users.push(newEmail)
    alert("Your Name is successfully")
  }
}
console.log(users)


