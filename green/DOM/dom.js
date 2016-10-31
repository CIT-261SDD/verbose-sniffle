// create element node
// create text node
// add text node to element node
// append new element to DOM



function remove() {
    var child = document.getElementsByTagName("li");
    var parent = child[0].parentNode;
    
    parent.removeChild(child[2]);
    
    
    
    //NASTY PATH - remove a descendant of a node instead of the child
    try{
        document.removeChild(child[0]);
    }
    catch(err){
        console.log(err.message);
    }
    //RESULTS -fails, parent isn't child of document
    
    
    
    
    //NASTY PATH - call remove child w/ no input
    try{
        parent.removeChild();
    }
    catch(err){
        console.log(err.message);
    }
    //RESUTLS - must include a parameter
    
    
    
    
    //NASTY PATH - remove parent
    try{
        parent.removeChild(parent);
    }
    catch(err){
        console.log(err.message);
    }
    //RESULTS - error - parent is not a child of parent
    
    
    
    //HAPPY PATH - remove child -> null
    try{
        parent.removeChild(null);
    }
    catch(err){
        console.log(err.message);
    }
    //RESULTS - null is not a node
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




function nastyPaths(){
    var ele = document.createElement(null);
    var node = document.createTextNode("THIS IS NULL!!!");
    var parent = document.getElementById("div1");
    
    ele.appendChild(node);
    
    
    parent.appendChild(ele);
    
    
    //NASTY PATH - append null element to page
    console.log("nastyPaths ran");
    //RESULTS - it works. nothing happens if the text node isn't there
    
    
    
    var child = document.createElement("p");
    var node1 = document.createTextNode("I'm gonna add this everywhere!!!");
    child.appendChild(node1);
    
    
    //NASTY PATH - append one child to multiple parents
    document.getElementById('One').appendChild(child);
    document.getElementById('div1').appendChild(child);
    document.getElementById('nav').appendChild(child);
    // RESULTS - element is added to the last parent it's appended to
    
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
    
    
    //NASTY PATH - append text node to DOM w/out element
    parent.insertBefore(textNode, sibling);
    //RESULTS - adds the text in the specified location
    
    
    
    
    //NASTY PATH - append text node to text node
    try{
    parent.firstChild.appendChild(textNode);
    }
    catch(err){
        console.log(err.message);
    }
    //RESULTS - text node doesn't support this type of child
    
    
    
    //NASTY PATH - append text node to an element that shouldn't ahve text
    try{
        var parent1 = document.getElementById("vid1");
        parent.appendChild(textNode);
    }
    catch(err){
        console.log(err.message);
    }
    //RESULTS - if no video source - text is added where the video should go. If there is  video source, text is added above the tag
    
    
    
    //NASTY PATH - append <p> tag to text node
    try{
        parent.firstChild.appendChild(childElement);
    }
    catch(err){
        console.log(err.message);
    }
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