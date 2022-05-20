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
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects
  user.getProjects = function(){
    return this.noOfProjects
  }
  user.changeName = function(newName){
    return this.name
  }
  user.incrementProject = function(){
    return noOfProjects++
  }
  user.decrementProject = function(){
    return noOfProjects--
  }
  return user
}

// prototypal pattern

let methods = {
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
  let user = Object.create(Methods)
  this.name = name;
  this.id = id;
  this.noOfProjects = noOfProjects
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