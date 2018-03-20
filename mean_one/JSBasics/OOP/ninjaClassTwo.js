function ninjaConstructor(name, ...content) {
    const self = this;
    this.name = name;
    this.health = 100;
    let speed = 3; //why isn't this const in the solution?
    let strength = 3;
    this.showStats = function () {
        console.log('Name :' + this.name +', Current Health: ' + this.health, ", Current Speed: " + this.speed, ", Current Strength: " + this.strength)
        return this; //return this to chain later
    }
    this.kick = function (ninjaConstructor){
        this.health -= 15;
        console.log(ninjaConstructor.name + ' was kicked. ' + this.name + " reduced health by 15." )
    }
}
//methods outside the "class" of ninjaConstructor.  I think these are outside of the class 'ninjaConstructor' because they don't require any "private" info
ninjaConstructor.prototype.sayName = function () {
    console.log("My ninja name is: " + this.name + '.')
    return this;
}
ninjaConstructor.prototype.drinkSake = function () {
    this.health += 10;
    return this;
}
ninjaConstructor.prototype.punch = function(ninjaConstructor){
    this.health -= 5;
    console.log(this.name + ' punched by ' + ninjaConstructor.name+ ' and lost health.');
    return this;
}
// ninjaConstructor.prototype.kick = function(){
//     this.health -=15;
//     return this;
// }

const ninja1 = new ninjaConstructor("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
const firstNinja = new ninjaConstructor("Nicci");
const secondNinja = new ninjaConstructor('Ollie');
secondNinja.punch(firstNinja).kick(firstNinja);
console.log(ninja1 instanceof ninjaConstructor);
ninja1.showStats();
firstNinja.showStats();
secondNinja.showStats();