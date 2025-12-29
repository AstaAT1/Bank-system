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
    constructor(fullname, email, age, password) {
        this.fullname = fullname
        this.email = email
        this.age = age
        this.password = password
        this.balance = 1000
    }
}


// function capitalizeName(name) {
//     return name.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ")
// }

// // Validate full name
// function validateFullName(name) {
//     name = name.trim()

//     if (name.length < 5) {
//         alert("your name is incorrect , try again")
//         return null
//     }

//     if (special.test(name)) {
//         alert("your name is incorrect , try again")
//         return null
//     }

//     return capitalizeName(name)
// }

// // Validate email
// function validateEmail(email) {
//     email = email.trim().toLowerCase()

//     if (email.length < 10) {
//         alert("your email is incorrect , try again")
//         return null
//     }
//     if (!email.includes("@")) {
//         alert("your email is incorrect , try again")
//         return null
//     }
//     return email
// }



// // Validate Age
// function validateAge(age) {
//     age = age.trim()
//     if (age.length == 0 || age.length > 3) {
//         alert("your age is incorrect , try again")
//     }
//     if (!/^[0-9]+$/.test(age)) {
//         alert("your age is incorrect , try again")
//         return null
//     }
//     return Number(age)
// }

// // Validate Password
// function validatePassword(password) {
//     password = password.trim()

//     if (password.length < 7) {
//         alert("your password is incorrect , try again")
//     }
//     if (!/[@#\-+*/]/.test(password)) {
//         alert("your password is incorrect , try again")
//         return null
//     }
//     return password
// }



// //
// // .............
// let askUser = prompt("Log In || Sign Up || Reset Password")

// if (askUser.toLowerCase() === "sign up") {



//     let fullName = null
//     while (fullName === null) {
//         fullName = validateFullName(prompt("Full Name"))
//     }

//     let email = null
//     while (email === null) {
//         email = validateEmail(prompt("Email"))
//     }

//     let age = null
//     while (age === null) {
//         age = validateAge(prompt("Age"))
//     }

//     let password = null
//     while (password === null) {
//         password = validatePassword(prompt("Password"))
//     }
//     let confirm = prompt("Confirm Password")
//     while (confirm !== password) {
//         confirm = prompt("Password not match, try again")
//         break
//     }

//     let newUser = new User(fullName, email, age, password)
//     users.push(newUser)

//     alert("Account created successfully")
// }
// let askUserv2 = prompt("Log In || Sign Up || Reset Password")

// if (askUserv2 && askUserv2.toLowerCase() === "log in") {

  

//    let loggedInUser = null

// while (!loggedInUser) {
//     let checkEmail = prompt("Enter your email")
//     let checkPassword = prompt("Enter your password")

//     loggedInUser = users.find(user => user.email === checkEmail && user.password === checkPassword)

//     if (!loggedInUser) {
//       alert("Email or password not correct, try again")
//     }
//     else{
//         alert(`Mar7ba bik ${loggedInUser.fullname} !!!`)
//     }
// }
// let seebank = prompt("")

// }

