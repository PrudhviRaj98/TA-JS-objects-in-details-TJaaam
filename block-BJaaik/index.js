class person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    eat() {

    }
    sleep() {

    }
    walk() {

    }
}

class player extends person {
    constructor(sportsName) {
        this.sportsName = sportsName;
    }
    play() {

    }
}
class teacher extends person {
    constructor(instituteName) {
        this.instituteName = instituteName;
    }
    teach() {

    }
}
class artist extends person {
    constructor() {

    }
    createArt(kind) {
        this.kind = kind;
    }
}
class cricketer extends player {
    constructor(teamName) {
        this.teamName = teamName;
    }
    playCricket() {

    }
}