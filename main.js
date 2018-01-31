// console.log('Hello, World');
// // calling from an Array
// var list = ['one', 2, 'three'];
// console.log(list[1]);

// calling from Object
// consolelog(me['name');
// var me = {
//   name: 'james';
//   age: 47;
//   numger:1234567
// };

// function sayHello (){
//   console.log
// }

// var sayGoodbye = function (){
//   console.log('sayGoodbye');
// }
// sayGoodbye();

// var favNumber = 12;
// favNumber++;
// //favNumber = favNumber =3;
// //favNumber += 4
// console.log(favNumber);

//old way
// var firstName = 'James';
// var lastName = 'rideout';
// var fullName = firstName + lastName;
// console.log(fullName);

//new way
// var firstName = 'James';
// var lastName = 'rideout';
// //var fullName = firstName+ lastName;
// //var fullName`${firstName} ${lastName}`;
// var loginMessage = `Welcome back ${firstName}'' ${lastName}`;
//   ${lastName} it has been $daysSinceLastLogin} since days you logged in`;
//console.log(fullName)

// var favNumber = 12;
// var inputNumber = 13;

// if (favNumber === inputNumber){
//   console.log('Hey Thats My Favorite Number');
//   } else if(inputNumber > favNumber) {
//     console.log('that is not my Favorite number')
//   } 
  
  // switch (true){
  //   case favNumber === inputNumber:
  //     console.log('Hey thats my fave number');
  //     break;
  //   case inputNumber > favNumber:
  //     console.log('Your number is too large');
  //     break;
  //   default:  
  //     console.log('Your number is too small')
  // }

// var username = 'james';
// var inputusername = 'james';
// var password = 'password';
// var inputpassword = 'password';

// if(!inputpassword){
//   console.log('you must enter a password to proceed');
// }
// else if (username === password && password === inputpassword){
//   console.log('your in');
//   } else if (username === password || password === inputpassword){
//     console.log('your out')
//   } else  {
//     console.log('half right')
//   }

// for (var i=1; i<=20; i++){
//     if (i%2 ==0){
//     console.log(i)
//     }
// }
// var i = 1;
// while (i<=20){
//   if (i % 2 === 0){
//   i++
//   }
// }

// var age = 10
//   while (age<=17){
//     console.log("You are",age," years old!");
//     age++;
//   }
//   console.log("you are an adult")

// for (var i = 1; i <=50; i++){
//     if()
  
// }

// for (i=0; i<=10; i++){
//     // console.log(i+"x");
//   for (j=0; j<=10; j++){
//     //console.log(i+"x"+j+ "="+ (i*j));
//     console.log(`${i} x ${j} = ${i*j}`);
//     }
//   }



var answer = prompt("Do you want to play a game?");
    if(answer.toLowerCase() answer === "yes"){
  var userName = prompt("What is your UserName?");
  var ememyName = "Grant";
  var userHealth = 40;
  var enemyHealth = 10;
  var wins = 0;
  
  while (userHealth > 0 && wins < 3){
    userHealth -= Math.floor(Math.random() * 2) + 1;
    ememyHealth -= Math.floor(Math.random() * 2) + 1;
    console.log(userName + 'has' + userHealth + 'health left.');
    console.log(enemyName + 'has' + userHealth + 'health left.');
     if(ememyHealth <= 0){
      console.log("Game Over"); 
      wins++
       break;
     } else if(userHealth <= 0){
       wins ++;
       enemyHealth = 10;
       console.log("WIN", wins);
     }   
      else if (wins === 3){
        console.log('You have defeated' + ememyName '!');
        break;
      } 
  
     
  











