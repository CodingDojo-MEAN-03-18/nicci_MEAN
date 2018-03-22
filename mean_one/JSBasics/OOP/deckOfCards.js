
// class DeckOfCards{
//     constructor(){
//         // deck should contain 52 card as an array of objects
//     }
//     shuffle(){
//         //randomly organize current cards the dealer has
//     }

//     reset(){
//         //should reset the deck
//     }
//     deal(){
//         //randomly deal a card from current deck and remove that dealt card from the deck
//     }
// }

// class Player extends DeckOfCards{
    
// }

(function () {
    var foo = 'Hello';
    var bar = 'World!'

    function baz() {
        return foo + ' ' + bar;
    }
    // console.log(window);
    this.baz = baz;
})();
console.log(this);

//These all throw exceptions:
// console.log(foo);
// console.log(bar);
console.log(baz());