// Local storage is domain specific, not page specific


function main(){
    storage();
    storage1();
    storage2();
}

function storage(){
    var string = 'Jello';
    var number = 42;
    var array = [1,3,44,18];
    var bool = true;
    
   
    localStorage.setItem("String", string);
    localStorage.setItem("Number", number);
    localStorage.setItem("Bool", bool);
    localStorage.setItem("Array", array);
    
    
    //NASTY PATH - store an array
    console.log(array);
    localStorage.getItem("Array");
    // RESULTS - returned as a string
    
    
    localStorage.setItem("sArray", JSON.stringify(array));
    console.log(JSON.parse(localStorage.getItem('sArray')));
}




function storage1(){
    var object = {
        value1: "hello",
        value2: 33,
        value3: false,
        doSomething: function(){
            console.log('method ran');
        }
    }
    
    // NASTY PATH - save an object in local storage
    
    localStorage.setItem("Object", object);
    var object2 = localStorage.getItem("Object");
    console.log(object2.value1);
    
    // RESULTS - when the object is pulled from local storage it is undefined
    
    
    
    
    // HAPPY PATH - store an stringified object in Local storage
    
    localStorage.setItem("sObject1", JSON.stringify(object));
    var object3 = JSON.parse(localStorage.getItem("sObject1"));
    console.log(object3);
    
    // RESULTS - methods are not included in stringify!
    
    
}


function storage2(){
    
    //NASTY PATH - save null
    
    localStorage.setItem("null", null);
    var result = console.log(localStorage.getItem("null"));
    
    // RESULTS - it works
    
    
    //NASTY PATH - overwrite an existing key
    localStorage.setItem("Number", null);
    // RESULTS - it works
    
    
    //NASTY PATH - save data with an empty key
    localStorage.setItem("", 'empty');
    console.log(localStorage.getItem(""));
    // RESULTS - it works
    
    
    // NASTY PATH - key as null
    localStorage.setItem(null, 'very null');
    console.log(localStorage.getItem(null));
    //RESULTS it works
    
    
    
    //NASTY PATH - object as key
    var bunny = new Animal();
    
    localStorage.setItem(bunny, "bunny");
    console.log(localStorage.getItem(bunny));
    //RESULTS - it works
}

function sStorage(){
    var string = 'Session Jello';
    var number = 2134;
    var array = [2,20,440,180];
    var bool = true;
    
   
    sessionStorage.setItem("String", string);
    sessionStorage.setItem("Number", number);
    sessionStorage.setItem("Array", array);
    sessionStorage.setItem("Bool", bool);
}


/*storage();
storage1();
storage2();*/


function Animal(){
    this.alive = true;
    this.eat = function(){
        console.log("Fluffy is Full");
        this.full = true;
    };
}
