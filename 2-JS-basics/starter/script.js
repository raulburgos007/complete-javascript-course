/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀 
*/
var markMass, markHeight, markBMI, johnMass, johnHeight, johnBMI = 0;
markMass = 75;
markHeight = 1.72;
johnMass = 62;
johnHeight = 1.65;
markBMI = markMass / (markHeight * markHeight);
johnBMI = johnMass / (johnHeight * johnHeight);
var markIsHigher = markBMI > johnBMI;
console.log('Mark\'s BMI is: ' + markBMI);
console.log('John\'s BMI is: ' + johnBMI);
console.log('Is Mark\'s BMI higher than John\'s?: ' + markIsHigher);