//task1
let fruits = ["orange", 'apple', 'banana', 'watermelon', 'pineapple', 'grape'];
console.log(fruits[0]);
console.log (fruits[4]);
console.log(fruits.length);

fruits.push('guava');
// fruits.pop();
console.log(fruits);

//task 2
const aboutme = {name: 'Odo', age: 40, ownedcars : ["Tesla", 'Lexus IS50', 'Camry', 'Benz'], cars:{color: "red", name: "Benz"}};

console.log(aboutme.ownedcars[1]);
console.log (aboutme.cars.color);

//task 3

const peoplecollection = [{name:"Odo", age:100}, {name:"John", age:50}, {name:"Dave", age:80}];
console.log(peoplecollection.length);
console.log(peoplecollection[2].age);

//task4
fruits.shift();
console.log(fruits);
fruits.unshift("strawberry")
console.log(fruits);

//task5
const namesofboys = ["David", "Gabe", "Peter"];
const namesofgirls = ["Ella", "Annabelle", "Angel"];
const peoplesnames = namesofboys. concat(namesofgirls);
console.log(peoplesnames);

//task6, using splice to add items
//splice (start, deletecount, item1, item2)

const carnames = ['Lexus', 'Benz'];
carnames.splice(1, 0, 'Tesla', 'Hyundia');
console.log(carnames);


//task7, using splice to delete items
carnames.splice(1,2);
console.log(carnames);
let numbers=[1,2,3,4,5]
let  firstSlice=numbers.slice(0,3)
let secondSlice=numbers.slice(2, 5)
console.log(firstSlice)
console.log(secondSlice)

//task8. array search
const fruitss = ["apple", 'mango', 'coconut', 'orange'];

let coconutposition = fruitss.indexOf('coconut');
console.log(coconutposition);

