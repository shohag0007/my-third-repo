const college = {
    name: 'vnc',
    class: ['10', '11', '12'],
    events: ['science fair', 'victory day', '21 February'],
    unique: {
        color: 'blue',
        result:{
            gpa: 5,
            merit: 'top',
        }
    }
}

college.unique.result.merit = 'top top top most',
college.events[1] = '16 December',
console.log(college.events);
delete college.class,
console.log(college);