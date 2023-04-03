# Inheritance

Convert the below requirements into inheritance using:

- Pseudoclassical Pattern
- Class Pattern

#### Animal

Properties:

- `location`
- `numberOfLegs`

```js

animal.prototype = {
    eat(){
        console.log(`I live in ${location} and I can eat`)
    },
    changeLocation(newloc){
        return this.location = newloc
    },
    summary(){
        return `I live in ${location} and I have ${numberOfLegs}`
    },
};


Object.setPrototypeOf(animal.prototype,dog.prototype)

function animal(location, numberoflegs){
    this.location = location
    this.numberoflegs = numberoflegs
}


let first = new animal("delhi",10);
```

Methods

- `eat()` - log a message saying `I live in ${location} and I can eat`

- `changeLocation(newLocation)` - accepts location and updates the location of the animal

- `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

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
animal.prototype = {
    eat(){
        console.log(`I live in ${location} and I can eat`)
    },
    changeLocation(newloc){
        return this.location = newloc
    },
    summary(){
        return `I live in ${location} and I have ${numberOfLegs}`
    },
};
dog.Prototype = {
    bark(){
        alert(`I ${name} and I can bark`);
    },
    changeName(newname){
        return this.name = newname;
    },
    changeColor(newcolor){
        return this.color = newcolor;
    },
    summary(){
        return `I am ${name} and I am of ${color} color. I can also bark`
    },
};

function animal(location, numberoflegs){
    this.location = location
    this.numberoflegs = numberoflegs
}

function dog(name,color){
    animal.call(this, location,numberoflegs)
    this.name = name;
    this.color = color;
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

cat.Prototype = {
    meow(){
        alert(`I am ${name} and I can do meow meow`);
    },
    changeName(newname){
        return this.name = newname;
    },
    changeColorOfEyes(newcolor){
        return this.colorOfEyes = newcolor;
    },
    summary(){
        return `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
    },
};

function cat(name,colorOfEyes){
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

```