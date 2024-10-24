const car = new Object();
car.numberofwheels=4;
car.type="voxwagon";
car.color="red"
// car.details= function(){
//     console.log("This is my car type: " +this.type);
// }

//car.details();
console.log(car.color);
console.log(car);-

delete car.type;
console.log(car);

let text ="  ";
for (let x in car){
    text=text +car[x] +" ";
}

console.log (text);

// let names = [];
let names = new Array ();
names = ["Venom", "Elijah", "Christine"];
console.log (names);