let databasa = []

let username = prompt("Can you entre your username")
if( username.length < 3 ){
    alert("username is incorrect , try again")
}
else{
     console.log(databasa)
let email = prompt("Can you entre your email")
if( !email.includes("@") ){
    alert("email is incorrect , try again")
}
else{
     console.log(databasa)
let password = prompt("Can you entre your password")
if(password.length < 6 || password == username){
    alert("password is incorrect , try again")
}
else{
    console.log(databasa)
    let ask = prompt("Do you wanna chnge anything ? : Yes / No ")
if(ask != 'No' && ask != 'Yes'){
alert("ERROOOOOR!!!!!!!!")
}
else if( ask == 'Yes'){
    let askYes = prompt("WHat you wanna to change : username / password / email ? ")
    if(askYes == 'username'){
        let changeuser = prompt("give me the new username")
        if(changeuser.length < 3){
            alert("ERROOOOOR!!!!!!!!")
        }
        else{
          username =  changeuser 
            alert("username change !")
             console.log(databasa)
        }
    }else if(askYes =='email'){
 let changemail = prompt("give me the new email")
        if(!changemail.includes("@")){
            alert("ERROOOOOR!!!!!!!!")
        }
        else{
             email = changemail 
            alert("email change !")
             console.log(databasa)
        }
    }else if(askYes == 'password'){
 let changepassword = prompt("give me the new password")
        if(changepassword.length < 6 || changepassword == username ){
             alert("ERROOOOOR!!!!!!!!")
        }
        else{
            password = changepassword 
            alert("password change !")
             console.log(databasa)
        }
    }
    let user = {
        username: username,
        email: email,
        password: password,
      }
      databasa.push(user)
}

else if(ask == 'No'){
 alert(`Username: ${username}, Email: ${email}, Password: ${password}`)
 console.log(databasa)
 
}
}
}
}