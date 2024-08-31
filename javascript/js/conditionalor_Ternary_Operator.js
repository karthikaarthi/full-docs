// const age=0
// const result= age>=18? 'Eligible':'Not Eligible';
// console.log(result);

// handlingnullvalues



// function welcome(user){

//     const details = user.name? user.name:'no name';
//     console.log('Hello '+details);
// }

// student={
    
//     'age':29,
//     'class':'js'
// }
// welcome(student);


// conditional chains



// let welcome=(user)=>{

//     let result = user.name? user.name:'noname'
//     console.log(result);
// }

// student={
//     'name':'aa',
//     'age':23
// }

// console.log(welcome(student))

student={
       'name':'aa',
        'age':23
    }



    student.age??=28;
    console.log(student.age)