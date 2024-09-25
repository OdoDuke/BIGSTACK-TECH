// let num = 900000000000000000000000;
let num = BigInt("900000000000000000000000");
console.log(num);
console.log (typeof num);

let sym = Symbol("mysymbol");
console.log(sym);
console.log(typeof sym);
function add(){
    let firstnum= 2;
    let secondnum = 4;
    let sum = firstnum+secondnum;
    console.log(sum);
}

add();
add();
add();

function sum(a,b){
    let firstnum= a;
    let secondnum = b;
    let sum = firstnum+secondnum;
    console.log(sum);
}
sum(4,4);

function prod(x,y,z){
    let firstnum=x;
    let secondnum=y;
    let thirdnum=z;
    let prod= firstnum*secondnum*thirdnum;
    console.log(prod);
}

prod(2,3,1);


