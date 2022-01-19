// for (let i = 0; i < 10; i++) {
    
//     console.log(`${i} times through`);
// }

//    let i = 1;
//    while (i<10) {
//        console.log('hey guys');
//        i++;
//    }

// let fruits =['apple', 'banana', 'strawberry'];
// for (let i in fruits){
//     console.log(fruits[1]);
// }


// let fruits = ['apples','banana','strawberry'];
// for(const fruit of fruits){
    //     console.log(fruits);
    // }


    let instructor = {
        first: 'manny',
        last: 'tribio',
        job: 'teacher assistant',
    };
   console.log(Object.keys(instructor));
    
    for (const key of Object.keys(instructor)){
        console.log(key);
    }