// -------------FUNCTIONS & PARAMETERS------------

//happy path - caller passes 12 to callee
function callee(a){
    a += 3;
    return a;
}    
function caller(){
    var i = callee(12);
    console.log("Function Caller: " + i);
}
// result - 15 is returned


// nastyPath - pass null & work with it
function one(){
    two(null);
}     
function two(a){
    var b = a + 3;
    console.log("Function two: " + b);
}
// result - null is passed into the variable a
// b is equal to 3


caller();
one();

// nasty path - call a function before you declare it
three();
function three(){
console.log("Function three ran");
}
// function three ran!


// angry path-  function tht needs parametes but you don't give it any
five();
function four(a,b){
    return a+b;
}
function five(){
    var a = 1;
   var result = four(a);
    console.log("five: " + result);
} // result - NaN. if you pass 0 or 1 parameter NaN is returned


// angry path - send extra parameters
seven();
function six(a,b){
    return a+b;
}
function seven(){
    var a = 1;
    var b= 2;
    var c =5;
    var result = six(a,b,c);
    console.log("Seven: " + result);
}// result - ignores the extra parameter


// angry path - use unrequested parameters
nine();
function eight(){
    
    for(var i = 0; i<arguments.length;i++){
        console.log("argument" + i + ": " + arguments[i]);
    }
}
function nine(){
    var a = 1;
    var b= 2;
    var c =5;
    eight(a,b,c);
//    var result = eight(a,b,c);
//    console.log("nine: " + result);
}// result - parameters are saved in the arguments array

// return an array
function createArray(){
    var list = [1,2,3,4,5];
    return list;
}
function showArray(){
    var list = createArray();
    console.log(list);
}
showArray();
// it works

// arguments keyword
function add(){
    var count = 0;
    for(var i = 0; i< arguments.length; i++){
        count += arguments[i];
    }
    return count;
}
console.log(add(1,3,14));