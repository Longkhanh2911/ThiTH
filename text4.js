// câu 4:
class Animal {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    get name() {
        return this.name;
    }
    set name(newName) {
        this.name = newName;
    }
    get weight() {
        return this.weight;
    }
    set weight(newWeight) {
        this.weight = newWeight;
    }
    toString() {
        return `name: ${this.name}, weight: ${this.weight}`;
    }
}
const objAnimal1 = new Animal("Elephant", "Weight :45.6");
console.log(Elephant.toString());






