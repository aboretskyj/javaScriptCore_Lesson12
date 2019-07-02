//The task:
//In a .js script create 5 objects with class "Person", which have to have fields `name`, `age`. 
//Create the object Map, add the objects Person to Map. Create function, which accepts Map as a input parameter
//and displays all the its elements to console in the format: ` name : Andrii, age : 33`

var oksana = new Person("Oksana", 26);
var stepan = new Person("Stepan", 33);
var ostap = new Person("Ostap", 19);
var galyna = new Person("Galyna", 38);
var dmytro = new Person("Dmytro", 45);

var users = new Map(); 
users.set(oksana).set(stepan).set(ostap).set(galyna).set(dmytro);

showMap(users);

// functions

function showMap(map){
    for (let user of map.keys()) { 
    show(`name : ${user.name}, age : ${user.age},`);
    }
}

function Person(name, age){
    this.name = name;
    this.age = age;
}

function show(data) {
    console.log(data);
}