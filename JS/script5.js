let name="Christine";
let sentence = name + " is a Computer Science student.\n" + name +" is also a student at Big Stack Technologies. \n" + name +" loves eating beans."
console.log(sentence);


let myname = "Odo";
let age=30;
const about_me =myname+ " is a devout believer in Jesus Christ.\n" + myname + " looks forward to what the years leading up to her " +age +"th year will be like.\n" +myname +" aspires to touch and better the lives of many, while spreading the message of CHRIST before her "+age+"th year and for the rest of her life!";


console.log(about_me);

function nome (){
    console.log ("My name is Odo!");
}

nome();


function add(x,y){
    let firstnumber = x;
    let secondumber = y;
    let sum = firstnumber+secondumber;
    return sum;
}


console.log(add(2,4));

function nomenclature (namee){
    let about ="my name is "+namee;
    return about;
}

let mynome = nomenclature("Odo");
console.log(mynome);


const mult = (x,y) =>{
    let firstnumber = x;
    let secondumber = y;
    let mult = firstnumber*secondumber;
    return mult;
}

console.log(mult(9,8));

document.getElementById("name").textContent=(mult(9,8));

document.getElementsByClassName("js")[0].textContent="HELLO";

