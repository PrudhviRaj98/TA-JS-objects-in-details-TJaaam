/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makeperson (name, age){
    let user ={}
    user.name = name
    user.age = age
    return user
}
let vicky = makeperson("vicky", 24)
// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

let personStore ={
    greet: function(){
        console.log ("hello")
    }
}

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

function personFromPersonStore(name, age) {
    let user = Object.create(personStore);
    user.name = name;
    user.age = age;
}

var sandra = personFromPersonStore('Sandra', 26);

// /********* Uncomment these lines to test your work! *********/
// console.log(sandra.name); // -> Logs 'Sandra'
// console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/
personStore.introduce = function() {
    console.log(`Hi, my name is ${this.name}`);
}


// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/


function PersonConstructor() {
    this.greet = function() {
        console.log("Hello");
    };
    this.introduce = function() {
        console.log(`hie my name is ${this.name}`);
    }
}

// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor();
// simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

Object.setPrototypeOf(personFromConstructor.prototype, personConstructor.prototype);

function personFromConstructor(name, age) {
    PersonConstructor.call(this);
    this.name = name;
    this.age = age;
}

var mike = new personFromConstructor('Mike', 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 3 of 3 ***/


// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("hello");
    }
}

// /********* Uncomment this line to test your work! *********/
var george = new PersonClass();
// george.greet(); // -> Logs 'hello'

/*** CHALLENGE 2 of 3 ***/

class DeveloperClass extends PersonClass {
    constructor(name) {
        super(name)
    }
    introduce() {
        console.log(`Hello world, my name is ${this.name}`)
    }
}

// /********* Uncomment these lines to test your work! *********/
// var thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
    sayType: function() {
        console.log('I am a ' + this.type);
    },
};

function userFactory(name, score) {
    let user = Object.create(userFunctionStore);
    user.type = 'user';
    user.name = name;
    user.score = score;
    return user;
}

var adminFunctionStore = Object.create(userFunctionStore);

function adminFactory(name, score) {
    let obj = userFactory(name, score);
    obj.type = "admin";
    Object.setPrototypeOf(obj, adminFunctionStore);
}
adminFunctionStore.sharePublicMessage = function() {
    console.log(`welcome users`)
}

/* Put code here for a method called sharePublicMessage*/

var adminFromFactory = adminFactory('Eva', 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"