class person extends player {
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
        super()
        this.sportsName = sportsName;
    }
    play() {

    }
}
class teacher extends person {
    constructor(instituteName) {
        super()
        this.instituteName = instituteName;
    }
    teach() {

    }
}
class artist extends person {
    constructor(kind) {
        super()
        this.kind = kind;
    }
    createArt() {

    }
}
class cricketer extends player {
    constructor(teamName) {
        super()
        this.teamName = teamName;
    }
    playCricket() {

    }
}