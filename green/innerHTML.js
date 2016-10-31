
function changeColor(){
    var element = document.getElementById('One')
    element.className = 'green';
}

function changeOddColors(){
    var elements = document.getElementsByClassName("list");
    
    // NASTY PATH - elements is a live node list!! it updates as you loop through
    for(var i = 0; i < elements.length; i++){
        console.log(elements[i]);
        elements[i].className = "aqua";
    }
    // RESULT - every other element is updated!
    // if you increment by 0 it works
}


function changeAllColors(){
    var elements = document.querySelectorAll('nav ul li');
    for(var i = 0; i < elements.length;i++){
        elements[i].className = "purple";
    }
}


function replaceNav(){
    var newNav = "<ul><li class='newList' id='One'>1</li><li class='newList' id='Two'>2</li><li class='newList' id='Three'>3</li><li class='newList' id='Four'>4</li><li class='newList' id='Five'>5</li></ul>";

    document.getElementById("nav").innerHTML = newNav;
    //document.getElementById("nav").innerHTML = null;
}

function log(){
    var el = document.getElementById("nav");
    console.log("innerHTML: " + el.innerHTML);
    console.log(el.parentNode);
}

var html = document.getElementsByTagName('html');

function nastyRemove(){
    var parent = document.getElementById('nav');
    var child = document.querySelectorAll('nav ul li');
    
    
    console.log(child[1]);
    // NASTY PATH - REMOVE NODE LIST
    html[0].removeDescendant(child[0]);
}