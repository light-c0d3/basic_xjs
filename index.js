
/*
console.log('xxx')

let name = 'Nex';
console.log(name);

let num = 11;
let isRight = true;
let firstname = null; // typeof object
let lastname = undefined; // type of undefined

const interestRate = 0.3;

// reference types object , array, function

let person = {
    fname: 'nex',
    age: 11  
};

person.fname = 'XXX';
person['age'] = 21;

console.log(person);

let selectColor = ['red', 'black'];

function greet() {
    console.log('hi human');
}

greet();

window.alert("HEY");

let user_name = window.prompt('your name');

*/

let count = 0;

document.getElementById("decrease").onclick = function() {
    
    //count = document.getElementById("count").value;
    count-=1;
    document.getElementById("count").innerHTML = count;
};

document.getElementById("reset").onclick = function() {
    
    count = 0;
    document.getElementById("count").innerHTML = count;

};

document.getElementById("increase").onclick = function() {
    
    count+=1;
    document.getElementById("count").innerHTML = count;

};