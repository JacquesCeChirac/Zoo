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
    function Animal(theName, theFoodHabbit, theQuantity, theFoodDescription) {
        this.name = theName;
        this.foodHabbit = theFoodHabbit;
        this.quantity = theQuantity;
        this.foodDescription = theFoodDescription;
    }
    return Animal;
}());
var Tigre = (function (_super) {
    __extends(Tigre, _super);
    function Tigre(theDetail) {
        var _this = _super.call(this, "Tigre", "Carnivore", "5kg", "viande") || this;
        _this.detail = theDetail;
        return _this;
    }
    return Tigre;
}(Animal));
var tigrou = new Tigre(18);
console.log(tigrou);
