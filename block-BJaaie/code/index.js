animal.prototype = {
    eat() {
        console.log(`I live in ${location} and I can eat`)
    },
    changeLocation(newloc) {
        return this.location = newloc
    },
    summary() {
        return `I live in ${location} and I have ${numberOfLegs}`
    },
};

dog.prototype = {
    bark() {
        alert(`I ${name} and I can bark`);
    },
    changeName(newname) {
        return this.name = newname;
    },
    changeColor(newcolor) {
        return this.color = newcolor;
    },
    summary() {
        return `I am ${name} and I am of ${color} color. I can also bark`
    },
};

Object.setPrototypeOf(animal.prototype, dog.prototype)

function animal(name, color, location, numberOfLegs) {
    dog.call(this, name, color)
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

function dog(name, color) {
    this.name = name;
    this.color = color;
}


let first = new animal("delhi", "black", "hyd", 10);
///////////////////////////////////////////////////////

function animal(name, colorOfEyes, location, numberOfLegs) {
    cat.call(this, name, colorOfEyes)
    this.location = location;
    this.numberOfLegs = numberOfLegs;
}

function cat(name, colorOfEyes) {
    this.name = name;
    this.colorOfEyes = colorOfEyes;
}

animal.prototype = {
    eat() {
        console.log(`I live in ${location} and I can eat`)
    },
    changeLocation(newloc) {
        return this.location = newloc
    },
    summary() {
        return `I live in ${location} and I have ${numberOfLegs}`
    },
};


cat.Prototype = {
    meow() {
        alert(`I am ${name} and I can do meow meow`);
    },
    changeName(newname) {
        return this.name = newname;
    },
    changeColorOfEyes(newcolor) {
        return this.colorOfEyes = newcolor;
    },
    summary() {
        return `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
    },
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Class Pattern

class animal {
    constructor(location, numberOfLegs) {
        this.location = location;
        this.numberOfLegs = numberOfLegs;
    }
    eat() {
        console.log(`I live in ${location} and I can eat`)
    }
    changeLocation(newloc) {
        return this.location = newloc
    }
    summary() {
        return `I live in ${location} and I have ${numberOfLegs}`
    }
}

class dog extends animal {
    constructor(name, color, location, numberOfLegs) {
        super(location, numberOfLegs)
        this.name = name;
        this.color = color;
    }
    bark() {
        alert(`I ${name} and I can bark`);
    }
    changeName(newname) {
        return this.name = newname;
    }
    changeColor(newcolor) {
        return this.color = newcolor;
    }
    summary() {
        return `I am ${name} and I am of ${color} color. I can also bark`
    }
}

class cat extends animal {
    constructor(name, colorOfEyes, location, numberOfLegs) {
        super(location, numberOfLegs);
        this.name = name;
        this.colorOfEyes = colorOfEyes;
    }
    meow() {
        alert(`I am ${name} and I can do meow meow`);
    }
    changeName(newname) {
        return this.name = newname;
    }
    changeColorOfEyes(newcolor) {
        return this.colorOfEyes = newcolor;
    }
    summary() {
        return `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`
    }
}

let user1 = new animal("prudhvi", "black", "hyd", 5)