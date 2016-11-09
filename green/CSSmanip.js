function changeColor(){
    //HAPPY PATH - change color of a DIV
    var div = document.getElementById('one');
    div.style.backgroundColor = "red";
    // RESULTS - it works
}


function changeSize(){
    // HAPPY PATH  - cahnge size of DIV
    var div = document.getElementById('two');
    div.style.width = "200px";
    div.style.height = "200px";
    //RESULTS - it works
}



function nastyPaths(){    
    var div = document.getElementById('three');
    
    // NASTY PATH - change color to null
    div.style.backgroundColor = null;
    // RESULTS - nothing happens
    
    
    //NASTY PATH - change color to 0
    div.style.backgroundColor = 0;
    //RESULST - nothing happens
    
    
    //NASTY PATH - change color to invalid string
    div.style.backgroundColor = "0";
    //RESULTS - nothing happens
    
    
    //NASTY PATH - set css attribute equal to that of another element
    var body = document.getElementById('body');
    var color = body.style.backgroundColor;
    div.style.backgroundColor = color;
    //RESULTS - color = ""
    
    
    //NASTY PATH - add new css attributes
    div.style.color = "white";
    div.style.marginTop = "300px";
    // RESULTS - it works
    
    
    
    //NASTY PATH - alter css of the entire document
    try{
    document.style.backgroundColor = "green";
    }
    catch(err){
        console.log(err.message);
    } // RESULTS - cannot set property of null
    
    
    //HAPPY PATH - loop through & alter css
    var divs = document.getElementsByTagName("div");
    for(var i = 0; i < divs.length;i++){
        divs[i].style.backgroundColor = "green";
    }//RESULTS - it works
    
    
    
    
    
}