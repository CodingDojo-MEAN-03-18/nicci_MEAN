class deckOfCard {
    constructor(){
        this.deck = [];
    }
    newDeck(){
        this.deck=[];
        const cardVal = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
        const cardSuit = ['spade', 'heart','club','diamond'];
        for(let index=0; index<cardSuit.length; index++){
            console.log('${this}')
            const currValue = this.deck.push();
            console.log(this.deck);
        }
        return this;
    }
}
const nicci = new deckOfCard();
nicci.newDeck();
console.log(nicci);