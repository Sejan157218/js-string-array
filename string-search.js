const products = [
    'dell 15151',
    'Dell 4115',
    'Hp 46546',
    'hp 654654',
    'asus 646',
];

// const searching = 'dell';
const searching = 'hp';
const result = [];
for(let product of products){
    // if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1)
    // if(product.toLocaleLowerCase().includes(searching.toLocaleLowerCase()))
    if(product.toLocaleLowerCase().startsWith(searching.toLocaleLowerCase()))
    {
        result.push(product);
    }
}
console.log(result)