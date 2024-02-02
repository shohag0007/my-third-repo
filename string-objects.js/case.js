
const school = 'Raj Uk Utara Model School';
const subject = 'Chemistry';
const book = 'chemistry';
// upper case and lower case 
if ( subject === book){
    console.log('I shall read Concentrately.');
}

else {
    console.log('Otherwise I shall not read.');
}

console.log(school);
console.log(school.toLocaleLowerCase());

const drink = '  water';
const liquid = 'water     ';

if(drink.trim() === liquid.trim()){
    console.log('Drink Water');

}

else{
    console.log('wona drink');
}