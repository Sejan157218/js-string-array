// sort
const names = ['sejan','sajal','babu'];
// const sort = names.sort();
// console.log(sort);
// const sort = names.reverse();
// console.log(sort);

const number = [1,2,4,58,8,5,51,9,4,17,8,7,99];
// const sort = number.sort();
const sort = number.sort(function(a,b){
    return a-b;
});
console.log(sort);
