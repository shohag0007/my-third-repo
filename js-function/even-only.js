/* create a function that will give only the even numbers.
return the sum  of numbers.

*/

function evenNumberOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
           
            }
        
    }

    return evens;
}

const numbers = [5, 8, 91, 24, 6];
// const evens = evenNumberOnly(numbers);
// console.log('Even Numbers Are', evens);

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            sum = sum + number;
        }
    }

    return sum;
}

const sum = sumOfEvenNumbers(numbers);
console.log('Sum Of Even Numbers', sum);
