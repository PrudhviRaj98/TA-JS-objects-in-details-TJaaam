# Inheritance

Convert the below requirements into inheritance using prototypal patters.

#### Animal

Properties:

- `location`
- `numberOfLegs`

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

```js
let animalMethods = {
    ear: function (){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation){
        this.location = newLocation
        return this.location;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberofLegs}`
    },

};

function animal(location, numberofLegs){
    let user = Object.create(animalMethods); 
    user.location = location;
    user.numberofLegs = numberofLegs;
    return user;
}
let first = animal("hyd",5);


```

#### Dog

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `color`

Methods:

- `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
- `changeName(newName)` - accepts the name property and updates the name of the dog
- `changeColor(newColor)` - accepts the new color and updates the color of the dog
- `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

```js
let animalMethods = {
    ear: function (){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation){
        this.location = newLocation
        return this.location;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberofLegs}`
    },

};

let dogMethods = {
    bark: function(){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName:function(newName){
        return this.name = newName;
    },
    changeColor:function(newColor){
        return this.color = newColor
    },
    summary:function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    },
};

Object.setPrototypeOf(dogMethods,animalMethods)

function animal(location,numberofLegs){
    let user = Object.create(animalMethods); 
    user.location = location;
    user.numberofLegs = numberofLegs;
    return user;
}
function dog(location, numberofLegs,name,color){
    let user = animal(location,numberofLegs); 
    Object.setPrototypeOf(user,dogMethods);
    user.name = name;
    user.color = color;
    return user;
}


```

#### Cat

It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

Properties:

- `name`
- `colorOfEyes`

Methods:

- `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

- `changeName(newName)` - accepts the name property and updates the name of the dog

- `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

- `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

```js
let animalMethods = {
    ear: function (){
        console.log(`I live in ${this.location} and I can eat`)
    },
    changeLocation: function(newLocation){
        this.location = newLocation
        return this.location;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberofLegs}`
    },

};

let catMethods = {
    meow: function(){
        alert(`I am ${this.name} and I can do mewo meow 😹`)
    },
    changeName:function(newName){
        return this.name = newName;
    },
    changeColorofEyes:function(newColor){
        return this.colorofEyes = newColor
    },
    summary:function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    },
};

Object.setPrototypeOf(catMethods,animalMethods);

function animal(location, numberofLegs){
    let user = Object.create(animalMethods); 
    user.location = location;
    user.numberofLegs = numberofLegs;
    return user;
}
function cat(name,colorofEyes,location,numberofLegs){
    let user = animal(location,numberofLegs);
    Object.setPrototypeOf(user,catMethods);
    user.colorofEyes = colorofEyes;
    user.name = name;
    return user;
}



