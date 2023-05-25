class person extends player {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {
        console.log(`${this.name} can eat`)
    }
    sleep() {
        console.log(`${this.name} can sleep`)
    }
    walk() {
        console.log(`${this.name} can walk`)
    }
}

class player extends person {
    constructor(name, age, gender, sportsName) {
        super(name, age, gender)
        this.sportsName = sportsName;
    }
    play() {
        console.log(`${this.name} can play`)
    }
}
class teacher extends person {
    constructor(name, age, gender, instituteName) {
        super(name, age, gender)
        this.instituteName = instituteName;
    }
    teach() {
        console.log(`${this.name} can teach`)
    }
}
class artist extends person {
    constructor(name, age, gender, kind) {
        super(name, age, gender)
        this.kind = kind;
    }
    createArt() {
        console.log(`${this.name} can art`)
    }
}
class cricketer extends player {
    constructor(name, age, gender, sportsName, teamName) {
        super(name, age, gender, sportsName)
        this.teamName = teamName;
    }
    playCricket() {
        console.log(`${this.name} can play`)
    }
}