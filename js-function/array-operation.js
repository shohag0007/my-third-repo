/*
Objective: write a function to give me the sum of all numbers in an array.
step-1: declare a function
step-2: call check wheather the function is called properly.
step-3: set parameters(s).
step-4: pass the parameters check wheather parameter passed in a proper format.
step-5: dop the functions task.
*/

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
       
    }
    return sum;

}

const numbs = [54, 62, 12, 6];
const sum = sumOfNumbers(numbs);
console.log('sum of numbers is', sum);