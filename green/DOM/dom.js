// create element node
// create text node
// add text node to element node
// append new element to DOM

function remove() {
    var child = document.getElementsByTagName("li");
    var parent = child[0].parentNode;
    
    parent.removeChild(child[2]);
    
    //NASTY PATH - remove a descendant of a node instead of the child
    //document.removeChild(child[0]);
    //RESULTS -fails, parent isn't child of document
    
    
    //NASTY PATH - call remove child w/ no input
    //parent.removeChild();
    //RESUTLS - must include a parameter
    
    
    //NASTY PATH - remove parent
    //parent.removeChild(parent);
    //RESULTS - error - parent is not a child of parent
}




//--------------------------------------------------------------------------
function addParaAfter(){
    var para = document.createElement("p");
    var node = document.createTextNode("This is a also a new Paragraph.");
    para.className = "after";
    
        //appent node to element
    para.appendChild(node);
    
        //specify the location for the new element
    var element = document.getElementById("div1");
    
        //append element to the specified location
    element.appendChild(para);
}






function addParaBefore(){
    var para = document.createElement("p");
    var node = document.createTextNode("This is a new Paragraph.");
    
    para.className = "before";
    para.appendChild(node);

    // YOU CAN ADD THE ELEMENT ANYWHERE!!
    var parent = document.getElementById("div1");
    var sibling = document.getElementById("p2");
    parent.insertBefore(para,sibling);
    //NOTE: JavaScript runs the last insertBefore statement & none of the ones before that
    

    //NASTY PATH - add element before a text node
    parent.insertBefore(para, parent.firstChild);
    // RESULTS - paragraph is added at the beginning of the div
    
    
    
}



function append(){
    var textNode = document.createTextNode("Hi there!!!");
    var parent = document.getElementById("div1");
    var sibling = document.getElementById("p1")
    var childElement = document.createElement("p");
    
    
    //NASTY PATH - append text node to DOM w/out parent
    parent.insertBefore(textNode, sibling);
    //RESULTS - adds the text in the specified location
    
    //NASTY PATH - append text node to text node
    //parent.firstChild.appendChild(textNode);
    //RESULTS - text node doesn't support this type of child
    
    //NASTY PATH - append P tag to text node
    //parent.firstChild.appendChild(childElement);
    //RESULTS  - HierarchyRequestError - nothing worked
    
}



/************************************************************
* different ways to acess elements:
* querySelector('nav ul li') - like CSS - returns first matching element
* querySelectorAll() - same as above, but returns all matching elements
* getElementsByClassName()
* getElementsByTagName()
*
* element.nextSibling
* element.previousSibling
* element.firstChild
* element.lastChild
* element.parentNode
*
* element.textContent
* element.innerText
********************************************************************/
