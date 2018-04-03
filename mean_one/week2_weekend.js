//ES5 INHEREITANCE
function Person(name){
    this.name = name;
}
Person.prototype.sayHello = function(){
    console.log(`my name is ${this.name}`);
}

//here we call the Person constructor directly 
const ashton = new Person('Ashton');
console.log(ashton);
ashton.sayHello();

function Parent(name) {
    //change what this refers to
    //this only gets the Person properties, not the prototype chain
    Person.call(name)
        Person.call(this,name);
}
Parent.prototype = Object.create(Person.prototype);
//to avoid calling the Person constructor directly and instead calling the Parent constructor
Parent.prototype.constructor = Parent;
Parent.prototype.assignChores = function(child, chore){
    //child needs time to do chore and then give payment or apparenetly Jason is punishing the child. :\
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            if(chore.completed){
                resolve(chore.payment);
            } else {
                reject(new Error(chore.punishment));
            }
        }, random(2000));
    });
}
//helper function
function random(arrayOrNumber){
    return Math.floor(
        Math.random() * (Array.isArray(arrayOrNumber) ? arrayOrNumber.length : arrayOrNumber)   
    );
}

function randomPunishment(){
    const punishments = ['be shown how to do chore to parents approval', 'work on chore with assistance','demostrate to parent how child thinks the chore should be done'];
    return punishments[random(punishments)];
}

function randomChore(){
    const chores = ['sweep','walk dog','spanish','piano'];
    return chores[random(chores)];
}
const nicci = new Parent('Nicci');
console.log(nicci);
nicci.sayHello();

function Chore(){
    this.task = randomChore();
    this.completed = false;
    this.payment = random(100);
    this.punishment = randomPunishment();
}

function Child(name){
    Person.call(this,name);
    this.savings =0;
    // this.hasDoneChores = false;
}
Child.prototype = Object.create(Person.prototype);
Parent.prototype.constructor = Child;
Child.prototype.doChores = function(chore, promiseOfPaymentOrPunishment) {
    chore.completed = random(100) > 50;
    promiseOfPaymentOrPunishment
        .then(payment => {
            //handle success
            console.log(`succesful chore completion. ${chore.task} done and ${payment} earned.`);
            this.savings += payment;
        })
        .catch(function(error){
            //handle errors
            console.log(`needs help with ${ chore.task } chore and must have ${error.message}`)
        });
};
Child.prototype.seeSavings = function() {
    console.log(`${this.savings} so far`);
};
const child = new Child('Never');
child.doChores(randomChore(), nicci.assignChores(child));

for(let index=0; index<4; index++){
    const chore = new Chore();
    child.doChores(chore, nicci.assignChores(child,chore));
}

setTimeout(function() {
    child.seeSavings();
},2100);