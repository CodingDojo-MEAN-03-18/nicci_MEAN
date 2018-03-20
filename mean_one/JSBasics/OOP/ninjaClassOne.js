function ninjaConstructor(name, ...content) {
    const self = this;
    this.name = name;
    this.health = 100;
    const speed = 3; //why isn't this const in the solution?
    const strength = 3;
    this.showStats = function () {
        console.log('Name :' + this.name + ', Current Health: ' + this.health, ", Current Speed: " + this.speed, ", Current Strength: " + this.strength)
        return this; //return this to chain later
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

const ninja1 = new ninjaConstructor("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
console.log(ninja1 instanceof ninjaConstructor);