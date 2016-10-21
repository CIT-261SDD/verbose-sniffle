//--------CONDITIONALS-------
//if (null)
// if ()        


// happy path - 
var i = true;
if(i == true){
    console.log(i);
}

        
// angry path - evaluate a character
if('H'){
    console.log("H");
}
// result - H is true


// angry path - evaluate a String
if("Hi"){
    console.log("Hi");
} 
// result - Hi is true


// angry path - evaluate
if ("Hi" > 3){
    console.log("Hi > 3");
}
else if ("Hi" < 3){
    console.log("Hi < 3");
}
else if ("Hi" == 1){
    console.log("Hi == 1");
}
else if ("Hi" == 0){
console.log("Hi == 0");
}
else if ("Hi" == NaN){
console.log("Hi == NaN");
}
else if ("Hi" == "hi"){
console.log("Hi == hi");
}
else if ("Hi" == "Hi"){
console.log("Hi == Hi");
}
// all fail to trigger except the last

// angry path - if null
if (null){
    console.log("Null is true!");
}// result - null is false

// angry path - if empty
/*if (){
    console.log("Empty is true!");
}*/ // result - syntax error in browser. Page doesn't load
