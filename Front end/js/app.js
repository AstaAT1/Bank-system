
let users = []

let special = /[^a-zA-Z\s]/

class User {
    constructor(fullname, email, age, password) {
        this.fullname = fullname
        this.email = email
        this.age = age
        this.password = password
        this.balance = "0"
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
        return null
    }
    return email
}



// Validate Age
function validateAge(age) {
    age = age.trim()
    if (age.length == 0 || age.length > 3) {
        alert("your age is incorrect , try again")
    }
    if (!/^[0-9]+$/.test(age)) {
        alert("your age is incorrect , try again")
        return null
    }
    return Number(age)
}

// Validate Password
function validatePassword(password) {
    password = password.trim()

    if (password.length < 7) {
        alert("your password is incorrect , try again")
    }
    if (!/[@#\-+*/]/.test(password)) {
        alert("your password is incorrect , try again")
        return null
    }
    return password
}



//
// .............
let askUser = prompt("Log In || Sign Up || Reset Password")

if (askUser.toLowerCase() == "sign up") {



    let fullName = null
    while (fullName == null) {
        fullName = validateFullName(prompt("Full Name"))
    }

    let email = null
    while (email == null) {
        email = validateEmail(prompt("Email"))
    }

    let age = null
    while (age == null) {
        age = validateAge(prompt("Age"))
    }

    let password = null
    while (password == null) {
        password = validatePassword(prompt("Password"))
    }
    let confirm = prompt("Confirm Password")
    while (confirm !== password) {
        confirm = prompt("Password not match, try again")
        break
    }

    let newUser = new User(fullName, email, age, password)
    users.push(newUser)

    alert("Account created successfully")
}
let askUserv3 = prompt("Log In || Sign Up || Reset Password")

if (askUserv3.toLowerCase() == "reset password") {
    let verify = prompt("Enter your email to change your password")
    let reset = users.find(u => u.email == verify)

    if (reset) {
// darori darori taktab email sghira matansach (hitach rah fi lwl radinah sghir)30min X
        let newPassword = null
        while (newPassword == null) {
            newPassword = validatePassword(prompt("Enter your new password"))
        }

        reset.password = newPassword
        alert("Password changed !!!")
    } else {
        alert("We can't find your email")
    }
}


let askUserv2 = prompt("Log In || Sign Up || Reset Password")

if (askUserv2.toLowerCase() === "log in") {

    let loggedInUser = null

    while (!loggedInUser) {
        let checkEmail = prompt("Enter your email").trim().toLowerCase()
        let checkPassword = prompt("Enter your password").trim()

        loggedInUser = users.find(user => user.email === checkEmail && user.password === checkPassword)

        if (!loggedInUser) {
            alert("Email or password not correct, try again")
        } else {
            alert(`Mar7ba bik ${loggedInUser.fullname} !!!`)
        }
    }

    let action = " "
    while (action != "logout") {
        action = prompt(`Your balance: ${loggedInUser.balance} DH\nChoose what do you want:\nDeposit\nWithdraw\nTake loan\nInvest\nLogout`).toLowerCase()

        if (action == "deposit") {
            let pushmoney = Number(prompt("How much money do you want to deposit?"))
            if (!isNaN(pushmoney) && pushmoney > 0 ) {
                loggedInUser.balance += pushmoney
                alert(`Deposit successful!!! New balance: ${loggedInUser.balance} DH`)
            } else {
                alert("Invalid , try again")
            }
        } else if (action == "withdraw") {
            let withdraw = Number(prompt("How much money do you want to withdraw?"))
            if (!isNaN(withdraw) && withdraw > 0 && withdraw <= loggedInUser.balance) {
                loggedInUser.balance -= withdraw
                alert(`Withdraw successful! New balance: ${loggedInUser.balance} DH`)
            } else {
                alert("Invalid , try later")
            }
        } else if (action === "take loan") {
            let loan = Number(prompt("How much loan do you want? You can take up to 20% of your balance"))
            let maxLoan = loggedInUser.balance * 0.2
            if (!isNaN(loan) && loan > 0 && loan <= maxLoan) {
                loggedInUser.balance += loan
                alert(`Loan approved! New balance: ${loggedInUser.balance} DH`)
            } else {
                alert("Naaaaaah you can't")
            }
        }else if (action === "invest") {
            alert("sorry this action is not active now")
        }

         else if (action === "logout") {
            alert("You logged out , Nchofok mara jaya!")
        } else {
            alert("Action not found, try again")
        }
    }
}

