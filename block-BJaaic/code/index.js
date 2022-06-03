//animal
let animalMethods = {
    ear: function() {
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation) {
        this.location = newLocation
        return this.location;
    },
    summary: function() {
        return `I live in ${this.location} and I have ${this.numberofLegs}`
    },

};

function animal(location, numberofLegs) {
    let user = Object.create(animalMethods);
    user.location = location;
    user.numberofLegs = numberofLegs;
    return user;
}
let first = animal("hyd", 5);

//dog
let animalMethods = {
    ear: function() {
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation) {
        this.location = newLocation
        return this.location;
    },
    summary: function() {
        return `I live in ${this.location} and I have ${this.numberofLegs}`
    },

};

let dogMethods = {
    bark: function() {
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    chag
    changeName: function(newName) {
        return this.name = newName;
    },
    changeColor: function(newColor) {
        return this.color = newColor
    },
    summary: function() {
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    },
};

Object.setPrototypeOf(dogMethods, animalMethods);

function animal(name, color) {
    let user = Object.create(animalMethods);
    user.name = name;
    user.color = color;
    user.location = location;
    return user;
}
let first = animal("hyd", 5);

//cat
let animalMethods = {
    ear: function() {
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation) {
        this.location = newLocation
        return this.location;
    },
    summary: function() {
        return `I live in ${this.location} and I have ${this.numberofLegs}`
    },

};

let catMethods = {
    meow: function() {
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName: function(newName) {
        return this.name = newName;
    },
    changeColorofEyes: function(newColor) {
        return this.colorofEyes = newColor
    },
    summary: function() {
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    },
};

Object.setPrototypeOf(catMethods, animalMethods, location);

function animal(name, colorofEyes) {
    let user = Object.create(animalMethods);
    user.name = name;
    user.colorofEyes = colorofEyes;
    user.location = location;
    return user;
}
let first = animal("hyd", 5);