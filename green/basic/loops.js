//---------LOOPS-----------------

var i = 0;
var a = 0;
var count = 0;

// Happy Path - loop through till i = 3
for (i = 0; i < 3; i++) {
    console.log(i);
}// returns 0, 1, 2
        
// Happy path - while loop
a = 10;
while (a > 9 && a < 13) {
    console.log(a);
    a++;
} // returns 10, 11, 12


        
// angry path - index is a string
i = "Hello";
for (i; i > 3; i++) {
    console.log("i = hello");
}// result loop does not initilize


function angry1(){
// angry path - incorrect logic evaluation
    var i;
    for (i = 3; i >= 3; i++) {
        console.log(i);
    }// infinite loop
}


 function angry2(){       
    var i = 0;
     // angry path - reset index during loop
     for (i = 0; i > 3; i++) {
        i = 0;
        console.log(i);
     }// result - infinite loop
 }


function angry3(){
    var a;
    // nasty path - evalulate null
    do{
        a = null;
        count++;
        console.log(count);
    }while(a == null)
// result - infinite loop
}


function angry4(){
// angry path
for (;;){
    console.log("loop with empty ()");
}// results - infinite loop
}

    
function angry5(){
// angry path - while null
while(null){
    window.alert("While null");
} // result - infinite loop
}
