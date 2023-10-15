const number="45";
const num=Number("45");//the Number function converts string to number
console.log(num)

//2

// Const printSum = “20” + 40;//let the result print 60. //*hint: 60.*
const printSum = Number("20") +40;
console.log(printSum);//the string gets converted to a anmber before it exectes the plus operation hence its used as a mathematical operator not a string operator

// Const sentence = “I am “ + 23 + 4 + “years old”. //*hint: “I am 27 years old”*
const sentence=  "I am "  +  Number(23 + 4 ) + " years old";
console.log(sentence )

//4
// const myVaue = “May”;
// myValue = 86;

let myValue = "May";
myValue = 86;//initially the code could not run since it was assigned to a const value which cannot change its values
console.log(myValue);


//5 4.Declare three camel case variables of your first name, last name, guru coding course, test score and initialize them with the right values. 
let fName="Lavender";
let lName="Agwena";
let guCourse="Javascript"
let testScore=50;
console.log("I Am " + fName + " " +" " + lName + "  taking " + guCourse + "  and my testscore is " + testScore);

//5 if statement
const myTestScore=-21;
switch(true){
    // case(myTestScore <30 ):
    // console.log( "June is an F9 student")
    // break;

case(myTestScore >=31 && myTestScore <= 40):
 console.log( "June is an E student")
  break;

  case(myTestScore >=41 && myTestScore<=49 ):
  console.log("June is  a D student")
  break;
  
  case(myTestScore >=50 && myTestScore<=59 ):
  console.log("June is  a C student")
  break;

  case(myTestScore >=60 && myTestScore<=69 ):
  console.log("June is  a B student")
  break;

  
  case(myTestScore >=70):
  console.log("June is  an A  student")
  break;
  //G.Above or equal to 101, the test score is out of range.
// Anything negative is no test score.
case(myTestScore >=101):
console.log(" the testscore is  out of range")
break;
// case(myTestScore >=-70):
// console.log("no test score")
// break;
default:
    console.log(" no test score")

}
//6 .Write a program, that will count from 1 to 20
// let number1=1;
// do{
//         console.log(number1);
//     number1++;
// }while(number1<=2
let i=1
let n=20
while(i<=20){
    console.log(i)
    i++;
}// the while loop executes the code inside the parenthesis when the condition is true the code inside the while loop 
//executes while if iyts false the condition inside the while loop stops to execute