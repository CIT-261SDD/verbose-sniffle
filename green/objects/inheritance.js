// ---- HAPPY PATHS ---------------------------------------
// Shape - super class
function Shape(){
    this.x = 0;
    this.y = 0;
    this.move = function(x, y){
        this.x += x;
        this.y += y;
        console.info("Shape Moved");
    }
}

// Rectangle - subClass
function Rectangle(){
    Shape.call(this); // calls the super constuctor??
    this.color = function(color){
    this.color = color;
    console.info("Color is now " + this.color);    
    }
}

var rect = new Rectangle;

rect.move(1,1);
rect.color("red");

//----------------------------------------------------------------------

function Animal(){
    this.eat = function(name){
        console.log(name + " is Full");
        this.full = true;
    }
}
function Rabbit(){
    Animal.call(this);
    this.jump = function(){
        console.log("The Rabbit Jumped");
    }
}

var bunny = new Rabbit();
bunny.eat("Bunny");

// --- NASTY PATHS ---------------------------------

function Deer(antlerCount){
    Animal.call(this);
    thisantlerCounnt = antlerCount; // NASTY PATH - FORGET THE . - WHEN CALLED UNDEFINED IS RETURNED
    this.attack = function(name, victim){
        console.log(name + " is attacking " + victim);
    } // NASTY PATH - WHEN THE . IS EXCLUDED FROM A METHOD, THE METHOD CALL GIVS AN ERROR
}

var bambi = new Deer(0);
bambi.attack("Bambi", "a skunk");
console.log(bambi.antlerCount);


// NASTY PATH - calling a method that doesn't belong to the object
//bunny.attack();
// RESULT - TYPEERROR - ATTACK IS NOT A FUNCTION


//NASTY PATH - Send bad values to an object
var bambii = new Deer(null);
console.log(bambii);


// NASTY PATH - CALL SUPERCLASS LAST
function Cow(name, gender){
    this.name = name;
    this.gender = gender;
    Animal.call(this);
}
var bessie = new Cow("bessie", "female");
bessie.eat("Bessie");
// RESULT - IT WOKRS


//NASTY PATH - 
