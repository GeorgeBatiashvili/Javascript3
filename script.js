"use strict";

// 1

function sumNumbers(...numbers) {
    let sum = 0;

    for ( elements of numbers) {
        sum += elements;
    }

    return sum;

}

let result = sumNumbers(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);



// --



let sumNumbers2 = function (...numbers) {
    sum = 0

    for (let elements of numbers) {
        sum += elements;
    }
    return sum;
}

let result = sumNumbers2(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);



// --

let sumnumbers3 = (...numbers) => {
    let sum =0;
    for (let element of numbers) {
        sum += element;
    }
    return sum;
}

let result = sumnumbers3 (10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(result);



// 2

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }

  if (user.isloggedin == true) {
    console.log(`${user.firstname} ${user.lastname}`);
  } else if (user.isloggedin == false) {
    console.log("false");
  }


// 3

// 4

function even_odd (numbers) {
    if (numbers % 2 === 0) {
        return 'this number is even'
    } else {
        return "this number is odd"
    }
}

let result = even_odd(11)
console.log(result);

// 5

let array = [1,2,3,4,5]; 

for (let i > 0; i = array.length-1; i--) {
    const element = array[i];
    console.log(element);
}

// --

let array = [1,2,3,4,5]; 

array.reverse();

console.log(array);


// 6

let funcuserAge = (x) => {
    let y = x > 18 ? "of age" : "minor"
    return y;

}

let result = funcuserAge(16);
console.log(result);

