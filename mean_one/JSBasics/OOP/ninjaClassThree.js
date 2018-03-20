
class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    //do i need to pass in name? probably no
    sayName(){
        console.log(`My name is ${this.name}.`);
        return this;
    }
    showStats(){
        console.log(`${this.name} has health: ${this.health}, speed: ${this.speed} and ${this.strength}.`);
        return this;
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name}'s health increase 10!  Current health: ${this.health}`)
        return this;
    }
    
}

const nin1 = new Ninja('Ollie').drinkSake().drinkSake().showStats().sayName();


class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        const message = "What one programmer can do in one month, two programmers can do in two months.";
        super.drinkSake();
        console.log(message);
        return this;
    }
}
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();