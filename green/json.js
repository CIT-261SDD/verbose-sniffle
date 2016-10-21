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
}
var camaro = new Car("Chevrolet", "Camaro", "2017", "SS", "Blue", true);


// destroy the string halfway through it


// HAPPY PATH - parse a JSON object
var sPerson = '{"name":"Joseph Smith","street":"6178 Easy Street","phone":"123 419 9610"}';

var person = JSON.parse(sPerson);
console.log(person);
// RESULT - sPerson is converted to an object


//HAPPY PATH - Stringify an obect
var sCamaro = JSON.stringify(camaro);
console.log(sCamaro);
//RESULTS - Camaro is a string


//HAPPY PATH - Camaro String is converted back to an object
console.log(JSON.parse(sCamaro));
// RESULTS - It works


//NASTY PATH - Stringify a string ---------------------------------------
var sSCamaro = JSON.stringify(sCamaro);
console.log(sSCamaro);
// RESULTS - adds another pair of quotes to the string


//NASTY PATH - parse an almost JSON object
var sBroken = '{"name":"Joseph Smith","street":"6178 Easy Street"';
console.log(JSON.parse(sBroken));
//RESULTS - error, unexpected end of JSON input


//NASTY PATH - parse double stringified object
console.log(JSON.parse(sSCamaro));
// RESULTS - returns a stringified object.

//NASTY PATH - stringify an int - not an object
var sOne = JSON.stringify(1);
console.log(sOne + 2);
//RESULTS - returns "1"


//NASTY PATH - parse a regular string
//console.log(JSON.parse("hello"));
// RESULTS - syntax error


//NASTY PATH - stringify null
console.log(JSON.stringify(null));
//RESULTS - returns the string null


//NASTY PATH - parse an object
//console.log(JSON.parse(camaro));
//RESUTS - syntax error. cannot parse an object