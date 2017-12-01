
class Animal {

    // Les caractéristiques de l'animal
    private name: string;
    private foodHabbit: string;
    private quantity: string;
    private foodDescription: string;

    // Constructeur qui prend en argument les caractéristiques
    constructor(theName: string, theFoodHabbit: string, theQuantity : string, theFoodDescription : string) {
        this.name = theName;
        this.foodHabbit = theFoodHabbit;
        this.quantity = theQuantity;
        this.foodDescription = theFoodDescription;
    }
}

class Tigre extends Animal {
    private detail: number;
    constructor(theDetail: number) {
        super("Tigre","Carnivore","5kg","viande");
        this.detail = theDetail;
    }
}

let tigrou = new Tigre(18);

console.log(tigrou);