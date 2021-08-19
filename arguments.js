// function sum(num1,num2){
//     const total = num1 +num2;
//     return total
// }

// const number = sum(5,6)

// console.log(number);



function sum(num1,num2){
    let total = 0;
    for (let num of arguments){
        total = total + num;
    }
    return total
}

const number = sum(5,6,8,9,10,11,12)

console.log(number);