// Chapter no 21 & 25 ;



// Question no 1 ;



// var firstName = prompt("Enter your firstname:");
// var lastName = prompt("Enter your lastname:");

// var fullName = firstName + " " + lastName ;

// alert("Hello," + fullName + " " + "Welcome to my webiste.");




// Question no 2 ;




// var favoriteModel = prompt("Enter your favorite moblie model:");
// var lentgh = favoriteModel.length;
// document.write("My Favorite Phone is:" + favoriteModel + "<br> Length of string:" + lentgh );





// Question no 3 ;


 

// var word = "Pakistani";
// var index = word.indexOf("n");
// document.write("String:" + word + "<br>" + "Index of 'n':" + index );




// Question no 4 ;




// var word = "Hello World";
// var lastIndex = word.lastIndexOf("l");
// document.write("String:" + word + "<br>" + "Last index of 'l':" + lastIndex);




// Question no 5 ;




// var word = "Pakistani";
// var character = word.charAt(3);
// document.write("String:" + word + "<br>" + "Character at in dex 3:" + character );





// Question no 6 ;




// var firstName = prompt("Enter your first name:");
// var lastName = prompt("Enter your last name:");
// var fullName =  firstName.concat(" ",lastName);
// alert("Hello," + fullName + " " + "Welcome to my webiste.")




// Question no 7;




// var word = "Hyderabad";
// var newWord = word.replace("Hyder","Islam");
// document.write("City:" + word + "<br>" + "After replacement:" + newWord);





// Question no 8;



// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMessage = message.replace(/and/g,"&");
// document.write("Original message: " + message + "<br>");
// document.write("Updated message: " + newMessage);




// Question no 9;




// var value = "472";
// var number = parseInt(value);
// document.write("Value: " + value + "<br> Type: " + typeof value + "<br>");
// document.write("Value: " + number + "<br> Type: " + typeof number);


// Queston no 10;




// var userInput = prompt("Enter your text:");
// var capitalInput = userInput.toUpperCase();
// alert("Your input:" + userInput + "\n" + "The input in capital letters:" + capitalInput);



// Queston no 11;




// function toTitleCase(str){
//     return str.toLowerCase().replace(/(?:^|\s)\w/g,function(match){
//         return match.toUpperCase();
//     })
// }
// var userInput = prompt("Enter a sentence:");
// var titleCaseInput = toTitleCase(userInput);
// document.write("User Input:",userInput,"<br>");
// document.write("Title Case:", titleCaseInput);




// Queston no 12;


// var num = 35.36;
// var numString = num.toString().replace(".", "");
// document.write("Number:",num,"<br>");
// document.write("Result: " + numString);




// Queston no 13;


// var username = prompt("Enter your username:");
// function isValidUsername(username) {
//     for (let i = 0; i < username.length; i++) {
//         let charCode = username.charCodeAt(i);
//         if (charCode === 33 || charCode === 44 || charCode === 46 || charCode === 64) {
//             return false;
//         }
//     }
//     return true;
// }

// if (isValidUsername(username)) {
//     console.log("Valid username:", username);
// } else {
//     alert("Please enter a valid username \n Prevent this page from creating additional dialods.");
// }




// Queston no 14;





// var items = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter your item:");

// if(items.indexOf(userInput) !== -1) {
//     alert(userInput + " " + "is available at index"+ " "+ items.indexOf(userInput)+ " " +"in our bakery");
// }else {
//     alert("We are sorry."+ userInput + " " + "is not available in our bakery");
// }





// Queston no 15;




// function isValidPassword(password) {
    
//     var a_z = /[a-zA-Z]/.test(password);
//     var numbers = /[0-9]/.test(password);
//     var startsNumber = /^[0-9]/.test(password);
//     var isA_z = password.length >= 6;
//     return a_z && numbers && !startsNumber && isA_z;
// }
// var password;
// do {
//     password = prompt("Enter a password:"); 
// } while (!isValidPassword(password)); 
// alert("Entered password :" + " " + password + "\n" + "Password can not begin with a number" + "\n" + "Please enter a valid passwrd");




// Question no 16;



// var str = "University of Karachi";
// for( var i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }



// Question no 17;



// var userInput = prompt("Enter a input:");
// var lastCharacter = userInput.charAt(userInput.length - 1);
// alert("User input:" + " " + userInput + "\n" + "Last character of input:"+ " " + lastCharacter);




// Question no 18;




// var sentence = "The quick brown fox jumps over the lazy dog";
// var words = sentence.toLowerCase().split(" ");
// var count = 0;
// words.forEach(function(word) {
//     if (word === "the") {
//         count++;
//     }
// });
// document.write("Number of occurrences of 'the':", count);






// ===END===;







// Chapter no 26 & 30 ;



// Queston no 1;




// var numbers = +prompt("Enter yur numbers:");
// var roundOffValue = Math.round(numbers);
// var floorValue = Math.floor(numbers);
// var ceilValue = Math.ceil(numbers);

// document.write(`
// <h2>Number Operations</h2><br>
// Number:${numbers}<br>
// Round off value:${roundOffValue}<br>
// Floor value:${floorValue}<br>
// Ceil value:${ceilValue}
// `)




// Queston no 2;




// var numbers = +prompt("Enter yur numbers:");
// var roundOffValue = Math.round(numbers);
// var floorValue = Math.floor(numbers);
// var ceilValue = Math.ceil(numbers);

// document.write(`
// <h2>Number Operations</h2><br>
// Number:${numbers}<br>
// Round off value:${roundOffValue}<br>
// Floor value:${floorValue}<br>
// Ceil value:${ceilValue}
// `)





// Queston no 3;




// var number = +prompt("Enter your number:");
// var absoluteValue = Math.abs(number);
// document.write(`The absolute value of ${number} is ${absoluteValue}.`)




// Queston no 4;


// var number = +prompt("Enter your number:");
// var diceValue = Math.floor(Math.random(number) * 10 ) +1;
// document.write(`
// <h2>Dice Simulator</h2><br>
// Random dice value:${diceValue}
// `)




// Queston no 5;



// var number = +prompt("Enter your number:");
// var randomValue = Math.random(number);
// var coinResult = randomValue < 0.5 ? "Head" : "Tails" ;
// document.write(coinResult)




// Queston no 6;




// var randomNumber = Math.floor(Math.random() * 100) + 1;
// document.write(`
// Random number between 1 and 100 : ${randomNumber}
// `)




// Queston no 7;




// var userInput = prompt("Enter your weight:");
// var weight = parseFloat(userInput);
// if (!isNaN(weight)) {
//     document.write("Your weight is: " + weight + " kilograms");
// } else {
//     document.write("Invalid input. Please enter a valid weight.");
// }






// Queston no 8;




// var secretNumber = Math.floor(Math.random() * 10) + 1;
        

// var userInput = prompt("Guess the secret number (between 1 and 10):");
// var userNumber = parseInt(userInput);

// if (userNumber === secretNumber) {
//     document.write("Congratulations! You guessed the secret number.");
// } else {
//     document.write("Sorry, the secret number was " + secretNumber + ". Try again!");
// }




// =====END=====;




// Chapter  no 31 & 34 ;



// Question no 1 ;



// var currentDate = new Date();
// document.write(currentDate);




// Question no 2 ;



// var months = [
// "January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"
// ];
// var currentDate = new Date().getMonth();
// var currentMonth = months[currentDate];
// document.write(`The current month is "${currentMonth}".`);



// Question no 3 ;


// var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDate = new Date().getDay();
// var currentDay = days[currentDate];
// document.write(`Today is "${currentDay}".`)


  

// Question no 4 ;


// var currentDate = new Date().getDay();
// if (currentDate === 0 || currentDate === 6) {
//     document.write("It's Fun day");
// } else {
//     document.write("It's not Fun day");
// }




// Question no 5 ;


// var currentDate = new Date().getDate();
// if (currentDate < 16) {
//     document.write("First fifteen days of the month.");
// } else {
//     document.write("Last days of the month.");
// }





// Question no 6 ;



// var date = new Date();
// var milliSeconds = date.getTime();
// var minutes = date.getMinutes();
// document.write(`
// Current date:"${date}" <br>
// Elapsed milliseconds since january 1, 1970: "${milliSeconds}"<br>
// Elapsed minutes since january 1, 1970:"${minutes}"
// `)





// Question no 7 ;



// var now = new Date();
// if (now.getHours() < 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }






// Question no 8 ;


// var laterDate = new Date(2020, 11, 31);
// document.write("Later date:" + laterDate);




// Question no 9 ;



// var startingDateOfRamadan = new Date(2024, 2, 24); 
// var startDateOfRamadan2015 = new Date(2015, 5, 18); 
// var timeDiff = startingDateOfRamadan.getTime() - startDateOfRamadan2015.getTime();
// var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); 
// document.write(`
// ${daysDiff} days hvae passed since 1st Ramadan,2015
// `);




// Question no 10 ;



// var referenceDate = new Date();
// var beginningOf2015 = new Date(2015, 0, 1);
// var timeDiff = referenceDate.getTime() - beginningOf2015.getTime();
// var secondsDiff = Math.floor(timeDiff / 1000); 
// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsDiff);




// Question no 11 ;


// var currentDate = new Date();
// document.write(`current date:${currentDate}<br>`)
// var currentHour = currentDate.getHours();
// currentDate.setHours(currentHour + 1);
// document.write(`
// 1 hour ago,it was ${currentDate}
// `);




// Question no 12 ;



// var currentDate = new Date();
// document.write( "Current date:" + currentDate + "<br>")

// var date100YearsBack = new Date(currentDate);
// date100YearsBack.setFullYear(date100YearsBack.getFullYear() - 100);
// document.write("Date 100 years back: " + date100YearsBack);




// Question no 13 ;



// var age = prompt("Please enter your age:");
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - parseInt(age);
// document.write(`
// Your age:${age}<br>
// Your birth year is: ${birthYear}
// `);



// Question no 14 ;


// var customerName = prompt("Enter your name:");
// var currentMonth = prompt("Enter the current month:");
// var numberOfUnits = parseFloat(prompt("Enter the number of units consumed:"));
// var chargesPerUnit = parseFloat(prompt("Enter the charges per unit:"));
// var latePaymentSurchargeRate = 0.1; 
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var latePaymentSurcharge = netAmountPayable * latePaymentSurchargeRate;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// netAmountPayable = Math.round(netAmountPayable * 100) / 100;
// latePaymentSurcharge = Math.round(latePaymentSurcharge * 100) / 100;
// grossAmountPayable = Math.round(grossAmountPayable * 100) / 100;
// document.write("<h2>K-Electric Bill</h2>");
// document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
// document.write("<p><strong>Month:</strong> " + currentMonth + "</p>");
// document.write("<p><strong>Number of Units:</strong> " + numberOfUnits + "</p>");
// document.write("<p><strong>Charges per Unit:</strong> " + chargesPerUnit.toFixed(2) + "</p>");
// document.write("<p><strong>Net Amount Payable (within Due Date):</strong> " + netAmountPayable.toFixed(2) + "</p>");
// document.write("<p><strong>Late Payment Surcharge:</strong> " + latePaymentSurcharge.toFixed(2) + "</p>");
// document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> " + grossAmountPayable.toFixed(2) + "</p>");




                                        //  =========END========

