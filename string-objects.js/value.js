const person = {
  name: 'Delowar Hossain',
  age: 35,
  profession: 'Developer',
  salary: 100000,
  married: true,
  'fav places' : ['Bandarban', 'Saintmartin', 'Kuakata']
}

// person.salary = 200000; // value change korechi dot notation diye
//  person['age'] = 45;  // value change bracket notation diye.
//  person['fav places'] = ['atkhira', 'kaligong'];
// console.log(person);

const propName = 'profession'; // value change
person[propName] = 'teacher'; // value include teacher
console.log(person);