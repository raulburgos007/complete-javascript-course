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
var markMass = 72;
var markHeight = 1.70;
var johnMass = 75;
var johnHeight = 1.72;
var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log('Mark\'s BMI is: ' + markBMI);
console.log('John\'s BMI is: ' + johnBMI);
console.log(markBMI, johnBMI);
if (markBMI>johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s BMI');
} else if (markBMI<johnBMI) {
        console.log('John\'s BMI is higher than Mark\'s BMI');    
    } else {
        console.log('John\'s BMI is equal to Mark\'s BMI');      
    }

