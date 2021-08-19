const anthem = 'Amr sunar bangla ami tumai valobashi'

// split
// const split = anthem.split(' ');
const split = anthem.split('a');
console.log(split);

// slice
const slice = anthem.slice(4,17);
console.log(slice);
// substr
const substr = anthem.substr(4,16);
console.log(substr);
// substring
const substring = anthem.substring(4,17);
console.log(substring);

// concat
const first = 'Sejan'
const secound = 'Mahmud'
// const fullName = first + secound //not perfect way
const fullName = first.concat(' ').concat(secound);
console.log(fullName);

// join

const name = ['Sejan','Mahmud'];
const fullname = name.join(' sajal ');
console.log(fullname);
