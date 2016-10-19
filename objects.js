//Object Creation Functions, Inheritance, Properties, Methods, Instantiation

function Animal(alive){
    this.alive = alive;
    this.eat = function(name){
        console.log(name + " is Full");
        this.full = true;
    };
    this.playDead = function(name){
      console.log(name + ' is playing dead');  
    };
}

var rabbit = new Animal(true);

// create a single instance of an object----------------------------------
var car1 = {
    make: "Chevrolet",
    model: "Camaro",
    year: "2017",
    subModel: "SS",
    color: "Blue",
    Description: function(){
        return this.color + " " + this.year + " " + this.make + " " + this.model + " " + this.subModel;
    }
};
console.log(car1.Description());
console.log(car1.Description);


// HAPPY PATH create an object-------------------------------------------
var hotel = new Object();
    hotel.name = 'Hampton';
    hotel.rooms = 200;
    hotel.booked = 126;
    hotel.checkAvailability = function(){
        return this.rooms - this.booked;
};
// HAPPY PATH - use the checkAvailability method
var hName = hotel.name;
var rooms = hotel.checkAvailability();
console.log(hName + " has " + rooms + " open rooms.");

// HAPPY PATH - add attributes to existing objects
hotel.pool = true;
hotel.gym = false;
delete hotel.booked; // HAPPY PATH - remove an attribute from an object
if (hotel.pool = true){
    console.log(hName + " Has a pool.");
}


// HAPPY PATH Car constructor Function-----------------------------
function Car(make, model, year, subModel, color, started){
    this.make= make;
    this.model = model;
    this.year = year;
    this.subModel = subModel;
    this.color = color;
    this.started = started;
    this.start = function(){
        this.started = true;
        return this.make + " " + this.model + " is on.";
    }
    this.cost = this.year; // this works!
    
    ////NASTY PATH - USE A METHOD FROM ANOTHER OBJECT
    this.playingDead = rabbit.playDead(this.model); 
    // RESULTS - RUNS ON EVERY INSTANCE OF AN OBJECT
    // if you try & reference Animal directly an error is thrown.
    // b/c it's declared as an attribute & not a method, it runs on every instance of the object
    // Declaring as a function doesn't help. can't reference Animal.playDead b/c it's defined as THIS.playDead
    
    
    // NASTY PATH - attribute is a conditional statement
    /*this.nice = true;
    this.beatUp = if(this.nice == true){ return false;}
    else{return true;};*/
    // RESULTS - Syntax error - unexpected IF
}


// HAPPY PATH adds a method to the object
Car.prototype.fullDescription = function (){
    return this.color + " " + this.year + " " + this.make + " " + this.model + " " + this.subModel;
}


// NASTY PATH - give an existing JS function as a method
Car.prototype.POW = function(){
    console.log("Car.POW ran");
} // RESULT - it worked


// HAPPY PATH - use constructor to create a car & call it's fullDescription method
var camaro = new Car("Chevrolet", "Camaro", "2017", "SS", "Blue", true);
console.log("Camaro: " + camaro.fullDescription());
// RESULTS - IT WORKS


camaro.POW(); // it works 


//NASTY PATH - call constructor w/out parameters
var corolla = new Car();
console.log("Corolla: " + corolla.fullDescription());
// RESULTS - all atributes are undefined


//NASTY PATH - call constructor w/null parameters & one extra
var raptor = new Car(null, null, null, null, null, null, "red");
console.log("Raptor: " + raptor.fullDescription());
// RESULTS - all atributes are null - red is ignored


// NASTY PATH - Pass an object as parameter to a constructor function
var mustang = new Car(camaro);
console.log("Mustang: " + mustang);
// RESULTS - The make attribute contains all of the information that is contained under camaro


// NASTY PATH - turn a car into a hotel??
//Car.prototype = Animal.prototype;
//camaro.eat(camaro.make);
// RESULTS - syntax error, camaro.eat is not a function


// NASTY PATH - Delete the Prototype
Car.prototype = null;
// RESULTS - All methods removed, properties remain.


var aventador = new Car("Lamborghini", "Aventador", "2017", "", "Green", false);
//console.log(aventador.model + ": " + aventador.fullDescription()); // fullDescription removed
console.log(aventador.make + ' cost: ' + aventador.cost);

var aventadorSV = new Car(aventador.make, "Aventador", aventador.year, "SV", aventador.color, aventador.started);
console.log(aventadorSV.color + ' ' + aventadorSV.make + ' ' + aventadorSV.subModel);