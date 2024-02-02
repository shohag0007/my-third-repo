 function evenSizedString(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('Even Size');
        return true;
    }
    else{
        console.log('Odd Size');
        return false;
    }
 }

//  evenSizedString('Dhaka');
//  evenSizedString('Faka');

function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
    }

}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOfElements(numbers){
    const len = numbers.length;
    return len;

}

// numberOfElements([12, 13, 13 ,15, 16, 17]);

function getAge(person){
    const age = person.age;
    return age;
}

