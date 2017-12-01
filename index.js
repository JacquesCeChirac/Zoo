var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    // Constructeur qui prend en argument les caractéristiques
    function Animal(theType, theName, theFoodHabbit, theQuantity, theFoodDescription) {
        this.type = theType;
        this.name = theName;
        this.foodHabbit = theFoodHabbit;
        this.quantity = theQuantity;
        this.foodDescription = theFoodDescription;
        this.costFood = 1;
    }
    Animal.prototype.display = function () {
        if (this.foodHabbit.toLowerCase() === "carnivore") {
            this.costFood = 10;
        }
        var costTotal = this.quantity * this.costFood;
        console.log("L'animal est un " + this.type);
        console.log("Et s'appelle " + this.name);
        console.log("Son régime est un " + this.foodHabbit);
        console.log("Il lui faut " + this.quantity + " kg de nourriture par jour");
        console.log("Cela représente " + costTotal + "€ de budget par jour");
        console.log("");
    };
    return Animal;
}());
var TigreOuLion = (function (_super) {
    __extends(TigreOuLion, _super);
    function TigreOuLion(theType, theName, theFoodHabbit, theQuantity, theFoodDescription, theDetail) {
        var _this = _super.call(this, theType, theName, theFoodHabbit, theQuantity, theFoodHabbit) || this;
        _this.detail = theDetail;
        return _this;
    }
    return TigreOuLion;
}(Animal));
var Zoo = (function () {
    function Zoo(theName) {
        this.nbAnimaux = [];
        this.name = theName;
    }
    Zoo.prototype.addAnimal = function (verif, nomAnimal, typeAnimal, quantite, food, detail) {
        //let type = typeAnimal;
        var animal;
        if (verif.toLowerCase() === "tigre" || verif.toLowerCase() === "lion") {
            animal = new TigreOuLion(verif, nomAnimal, typeAnimal, quantite, food, detail);
        }
        else {
            animal = new Animal(verif, nomAnimal, typeAnimal, quantite, food);
        }
        animal.display();
        this.nbAnimaux.push(animal);
    };
    Zoo.prototype.deleteAnimal = function (nom) {
        var compteur = 0;
        for (var _i = 0, _a = this.nbAnimaux; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry.name.toLowerCase() === nom.toLowerCase()) {
                delete this.nbAnimaux[compteur];
            }
            compteur++;
        }
    };
    Zoo.prototype.countAnimal = function () {
        var compteur = 0;
        for (var _i = 0, _a = this.nbAnimaux; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry != undefined) {
                compteur++;
            }
        }
        console.log("Voici le nombre d'animaux :" + compteur);
        console.log("");
    };
    Zoo.prototype.listAnimals = function () {
        console.log("Voici la liste des animaux :");
        for (var _i = 0, _a = this.nbAnimaux; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry != undefined) {
                console.log(entry.name);
            }
        }
        console.log("");
    };
    Zoo.prototype.totalCost = function () {
        var cost = 0;
        for (var _i = 0, _a = this.nbAnimaux; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry != undefined) {
                cost += (entry.costFood * entry.quantity);
            }
        }
        console.log("Le coût total en nourriture est de " + cost + " € par jour");
        console.log("");
    };
    Zoo.prototype.display = function () {
        //
    };
    return Zoo;
}());
var zoo = new Zoo("Zooland");
zoo.display();
zoo.addAnimal("Tigre", "Tigrou", "Carnivore", 4, "viande", "18 rayures");
zoo.addAnimal("Lion", "Roi Lion", "Carnivore", 3, "viande", "25 cm de crinière");
zoo.addAnimal("Orang-outan", "Monsieur singe", "végétarien", 5, "fruits");
zoo.countAnimal();
zoo.totalCost();
zoo.listAnimals();
zoo.deleteAnimal("Tigrou");
zoo.countAnimal();
zoo.listAnimals();
zoo.totalCost();
