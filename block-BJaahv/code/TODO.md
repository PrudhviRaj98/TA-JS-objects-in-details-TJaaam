# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
- [ ] Using Object.create (prototypal pattern)
- [ ] Using Pseudoclassical Way
- [ ] Using Class

## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.

// using create object

function createUser(name,id,noOfProjects){
  let user = {}
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects
  user.getProjects = function(){
    return user.noOfProjects
  }
  user.changeName = function(newName){
    let prevName = user.name
    user.name = newName
    return prevName;
  }
  user.incrementProject = function(){
    return user.noOfProjects++
  }
  user.decrementProject = function(){
    return user.noOfProjects--
  }
  return user
}

// prototypal pattern

let methods = {
  getProjects(){
    return this.noOfProjects;
  },
  changeName (newName){
    let prevName = this.name
    this.name = newName
    return prevName;
  },
  incrementProject (){
    return this.noOfProjects++;
  },
  decrementProject(){
    return this.noOfProjects--;
  },
};

function createUser(name,id,noOfProjects){
  let user = Object.create(methods)
  user.name = name;
  user.id = id;
  user.noOfProjects = noOfProjects
  return user
}

let first = createUser("Raj",909,21)

//Pseudoclassical Way

createUser.prototype = {
  getProjects(){
    return this.noOfProjects
  }
  changeName (newName){
    return this.name
  }
  incrementProject (){
    return noOfProjects++
  }
  decrementProject(){
    return noOfProjects--
  }
}

function createUser(name,id,noOfProjects){
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects
}

let first = new createUser("Raj",909,21)

// using Class way


class createUser{
  constructor(name,id,noOfProjects){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects
  }

  getProjects(){
    return this.noOfProjects
  }
  changeName (newName){
    return this.name
  }
  incrementProject (){
    return noOfProjects++
  }
  decrementProject(){
    return noOfProjects--
  } 
}

let first = new createUser("Raj",909,21)