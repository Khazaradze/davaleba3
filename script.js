// console.log("hello world");

// davaleba1
function number(...nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
       if (nums[i] > 0) {
         sum += nums[i];
       }
    }
    return sum;
   }
   
   console.log(numbers1(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8));

// davaleba2

let numbers1 = [10, 50, 6, 7, 8, 11, 6, 3, 9];
let totalsum = 0;

for (let i = 0; i < number1.length; i++) {
 totalsum += number1[i];
}

console.log(totalsum); 

// davaleba3

let user = {
    firstname: 'tom',
    lastname: 'tobias',
    age: 32,
    isloggedin: true
  }

function fullname(user) {
   if (user.isloggedin) {
       return "${user.firstname} ${user.lastname}";
   } else {
       return false;
   }
}
console.log(fullname(user)); 

// davaleba4
let numbers2 = [10,11,12,13,14,15,16,17];
function findMax(numbers2) {
    let max = -Infinity;
    for (let i = 0; i < numbers2.length; i++) {
        if (numbers2[i] > max) {
            max = numbers2[i];
        }
    }
    return max;
}

console.log(findMax(numbers2));


// davaleba5

function number(num) {
    if (num % 2 === 0) {
        return 'This number is even';
    } else {
        return 'This number is odd';
    }
}

console.log(number(16));   

// davaleba6

let array = ['html', 'css', 'python', 'javascript', 'bootstrap'];

function number(arr) {
    let number = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 4) {
            number.push(arr[i]);
        }
    }
    return number;
}

console.log(number(array));

// davaleba7

let array1 = [1, 2, 3, 4, 5];

function reverse(arr) {
    let reverse = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    return reverse;
}

console.log(reverse(array1)); 


// davaleba8


age = () => {
    let user = {
        firstname: 'tom',
        lastname: 'tobias',
        age: 32,
        isloggedin: true
    }
    if (user.age >= 18) {
        console.log("სრულწლოვანი");
    }
    else {
        console.log("არასრულწლოვანი");
    }
}

age()


// davaleba9

let number1 = (num1, num2) => {
    if (num1 > num2) {
       console.log(num1 + ' is the largest');
    } else if (num2 > num1) {
       console.log(num2 + ' is the largest');
    } else {
       console.log('error');
    }
   };
   
console.log(number1(15, 20));


