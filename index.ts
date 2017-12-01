
class Animal {
    // Les caractéristiques de l'animal
    private type: string;
    private name: string;
    private foodHabbit: string;
    private quantity: number;
    private foodDescription: string;
    private costFood : number;
    // Constructeur qui prend en argument les caractéristiques
    constructor(theType: string, theName: string, theFoodHabbit: string, theQuantity: number, theFoodDescription: string) {
        this.type = theType;
        this.name = theName;
        this.foodHabbit = theFoodHabbit;
        this.quantity = theQuantity;
        this.foodDescription = theFoodDescription;
        this.costFood = 1;
    }

    public display () {
        if (this.foodHabbit.toLowerCase()==="carnivore"){
            this.costFood =10;
        }
        let costTotal = this.quantity*this.costFood;
        console.log("L'animal est un "+this.type);
        console.log("Et s'appelle "+this.name);
        console.log("Son régime est un "+this.foodHabbit);
        console.log("Il lui faut "+this.quantity+" kg de nourriture par jour");
        console.log("Cela représente "+costTotal+"€ de budget par jour");
        console.log("");
    }
}

class TigreOuLion extends Animal {
    private detail: string;
    constructor(theType: string, theName: string, theFoodHabbit: string, theQuantity : number, theFoodDescription : string, theDetail: string) {
        super(theType, theName, theFoodHabbit, theQuantity, theFoodHabbit);
        this.detail = theDetail;
    }
}

class Zoo{
    private name: string;
    nbAnimaux =[];
    constructor(theName: string) {
        this.name = theName;
    }
    public addAnimal(verif,nomAnimal,typeAnimal,quantite,food,detail?){
     //let type = typeAnimal;
    let animal;
        if (verif.toLowerCase() === "tigre" || verif.toLowerCase() === "lion"){
            animal = new TigreOuLion(verif,nomAnimal,typeAnimal,quantite,food,detail);
        } else {
            animal = new Animal(verif,nomAnimal,typeAnimal,quantite,food);
        }
        animal.display();
        this.nbAnimaux.push(animal);
    }
    public deleteAnimal(nom){
        let compteur: number= 0;
        for (let entry of this.nbAnimaux) {
            if (entry.name.toLowerCase() === nom.toLowerCase()){
            delete this.nbAnimaux[compteur];
            }
            compteur++;
        }
    }
    public countAnimal(){
        let compteur : number = 0;
        for (let entry of this.nbAnimaux) {
            if(entry != undefined){
                compteur++;
            }
        }
        console.log("Voici le nombre d'animaux :"+ compteur);
        console.log("");
    }
    public listAnimals(){
        console.log("Voici la liste des animaux :")
        for (let entry of this.nbAnimaux) {
            if(entry != undefined){
                console.log(entry.name);
            }
        }
        console.log("");
    }
    public totalCost(){
        let cost : number = 0;
        for (let entry of this.nbAnimaux) {
            if(entry != undefined) {
                cost += (entry.costFood * entry.quantity);
            }
        }
        console.log("Le coût total en nourriture est de "+cost+" € par jour");
        console.log("");
    }
    public display(){
        //
    }
}

let zoo = new Zoo("Zooland");
zoo.display();
zoo.addAnimal("Tigre","Tigrou","Carnivore", 4,"viande","18 rayures");
zoo.addAnimal("Lion","Roi Lion","Carnivore", 3,"viande","25 cm de crinière");
zoo.addAnimal("Orang-outan","Monsieur singe","végétarien", 5,"fruits");
zoo.countAnimal();
zoo.totalCost();
zoo.listAnimals();
zoo.deleteAnimal("Tigrou");
zoo.countAnimal();
zoo.listAnimals();
zoo.totalCost();