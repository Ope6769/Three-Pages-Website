// function calcYearToLive() {

//     let calcIt = prompt("What is your age?");

//     let calcDays = 32850 - (calcIt * 365);

//     let calcWeeks = 4680 - (calcIt * 52);

//     let calcMonths = 1080 - (calcIt * 12);

//     alert("You have " + calcDays + " days, " + calcWeeks + " weeks and " + calcMonths + " months to live!");
// }


// calcYearToLive();



//LOVE CALCULATOR

// let yourName = prompt("What is your name?");

// let theirName = prompt("What is your partner's name?");

// let loveScore = Math.floor(Math.random() * 100);

// alert("The Lovescore for " + yourName + " and " + theirName + " is " + loveScore + "%" );

// console.log(loveScore);



//Leap Year challenge

// function isLeap(year) {
//     if(year % 4 === 0) {


//         if(year % 100 === 0) {


//             if(year % 400 === 0) {


//                 alert("Yeah! " + year + " is a leap year");
            
//             }

//             else{
//                 alert("Oops!" + year + " is not a leap year");
//             }
//         }
//         else{
//             alert("Yeah! " + year + " is a leap year");
//         }

    
//     }

//     else{
//         return alert("Oops! " + year + " is not a leap year");
//     }
// }


// let year = prompt("Input Year");

// isLeap(year);



//GUEST LIST CHECKER

// let guestName = ["Abdulsomod", "Hameedat", "Zainab", "Jamiu", "Ruqooyah", "Yussuf", "Ibraheem", "Opeyemi"];

// let guestListChecker = prompt("What is your name?");

// if(guestName.includes(guestListChecker)) {
//     alert("Dear " + guestListChecker + ", Welcome to the Wedding!");
// }

// else{
//     alert("You are not invited to the wedding, please get out of here!");
// }


//Buying Lunch

// function lunchBuyer(names) {
//     let numberOfPerson = names.length;
//     let selectedPerson = Math.floor(Math.random() * numberOfPerson);

//     let randomPerson = names[selectedPerson];

//     return randomPerson + " is going to buy us lunch today";
// }

// let names = ["Abdulsomod", "Hameedat", "Zainab", "Jamiu", "Ruqooyah", "Yussuf", "Ibraheem", "Opeyemi"];

// document.write(lunchBuyer(names));


//99 bottles of beer on the wall
//99 bottles of beer
//Take one down and pass it around, 98 beer bottles standing on the wall

// for(bottle = 99; bottle >= 1; bottle--) {
//     let bottlesRemaining = "bottles";
//     let subtractBottle = bottle - 1;

//     if(bottle === 1 || subtractBottle === 1) {
//         bottlesRemaining = "bottle"
//     }

//     if(subtractBottle === 0 ) {
//         subtractBottle = "no";
//     }

//     console.log(bottle + " " + bottlesRemaining + " of beer on the wall");
//     console.log(bottle + " " + bottlesRemaining + " of beer");
//     console.log("Take one down and pass it around, " + subtractBottle + " " + bottlesRemaining + " of beer on the wall");
// }


// for(num = 99; num >= 1; num--) {
//     let bottlesRemaining = "bottles";
//     let subBottles = num -1;

//     if(num === 1 || subBottles === 1) {
//         bottlesRemaining = "bottle"
//     }

//     console.log(num + " " + bottlesRemaining + " of beer on the wall");
//     console.log(num + " " + bottlesRemaining + " of beer");
//     console.log("Take one down and pass it around, " + subBottles + " " + bottlesRemaining + " of beer on the wall");
// } 


//Fibonacci series

// function fibonacciGenerator(n) {

//     let output = [];

//     if(n === 1) {
//         output = [0];
//         return console.log(output);
//     }

//     else if(n === 2) {
//         output = [0, 1];
//         return console.log(output);
//     }

//     else{
//         output = [0, 1, 1];
        
//         for(let i = 2; i < n; i++) {
    
//         }
//     }

// }

// fibonacciGenerator(2);

// output.push(n);
// console.log(output);


const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    //Get the values from the input
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        
        setErrorFor(username, 'Username cannot be blank');
    }

    else if(usernameValue.length < 6) {
        setErrorFor(username, 'Username cannot be less than 6 characters long')
    }

    else{
        setSuccessFor(username);
    }


    if(emailValue === '') {
        
        setErrorFor(email, 'Email cannot be blank');
    }

    else{
        setSuccessFor(email);
    }


    if(passwordValue === '') {
        
        setErrorFor(password, 'Password cannot be blank');
    }

    else if(passwordValue.length < 8) {
        setErrorFor(password, 'Password cannot be less than 6 characters long')
    }

    else{
        setSuccessFor(password);
    }


    if(password2Value === '') {
        
        setErrorFor(password2, 'Password cannot be blank');
    }

    else if(password2Value != passwordValue) {
        setErrorFor(password2, 'Please enter correct password');
    }

    else{
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;  //referencing .form-control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;

    //adding error classs
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}