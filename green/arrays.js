//---------ARRAYS & ASSOCIATIVE ARRAYS----------
// work with the array methods

// happy path - creating and displaying an array
var array1 = [];
array1[0] = "hi";
array1[1] = "bye";
array1[2] = 47;
console.log("array1: " + array1);
// array1 contains hi, bye, and 47


// arrays are objects
console.log("Array Type: " + typeof array1);   //displays object


//use isArray to determine if it's an array
console.log("isArray: " + Array.isArray(array1));

// Happy path - declare an array in one line
var array2 = [1, 3, 5, 17, "hi there"];
console.log("array2: " + array2);
// Array successfully created


// happy path - creating a multi-dimensial array
var array3 = [array1, array2];
console.log("array3: " + array3);
// result - array3 contains hi, bye, 47, 1, 3, 5, 17, hi there


// angry path - multi-dimensional array within an array OR 3 Dimensional array
var array5 = [array3, array1];
console.log("array5: " + array5);
// Actually it works just fine. Not an angry path!!


//angry path - call a non-existing index
var array6 = [0,1,2,3,4,5];
console.log("Array 6: " + array6[9])
// returns undefined


//angry path - call a negative index
var array7 = [1,2,3,6];
console.log("Array 7: " + array7[-3]);
// results - returns undefined

// ARRAY METHODS

//happy path - pop array7
//var pArray7 = array7.pop(); --- this line returns the popped value
array7.pop();
console.log("Array 7 pop: " + array7);
//results - removes 6 from the array

//happy path - push to array 7
array7.push(14);
console.log("Array 7 push: " + array7);

// happy path - splice()
array7.splice(2,0, "one", "Two", "Three");
console.log("Splice array 7: " + array7);
// results - array7: 1,2,one,Two,Three,3,14

// happy path - splice remove
array7.splice(3,2); // 3 refers to the index!
console.log("Splice array 7: " + array7);
// results - removes Two & three

// happy path - slice to create new array
var nArray = array7.slice(1,3);
console.log("nArray: " + nArray);
// results - nArray contains 2, one


//angry path - toString() with HTML tags
function mop(){
var array7 = ["<p>", 6, "hi there", "this all exists within a paragraph tag", "<button>", "I made a button!","</button>", "</p>"];
/*document.write("<div>"+array7.toString()+"</div>");*/
document.getElementById("div1").innerHTML = array7.toString();
}// results - IT DOESN'T LIKE LINE 82.....


//---- Associative arrays--------------------------------------------
// - have a string index


// Nasty path - attempting to assign a string index to an array
var array4 = [];
array4["fName"] = "Joe";
array4["lName"] = "Smith";

if (array4[0] == null) {
    console.log("array4 = null");
}
if (array4[0] == NaN) {
    console.log("array4 = NaN");
}
if (array4[0] == undefined) {
    console.log("array4 = undefined");
}
if (array4[0] == 0) {
    console.log("array4 = 0");
}
if (array4[0] == "") {
    console.log("array4 = empty string");
}
if (array4[0] == false) {
    console.log("array4 = false");
}
// array is null AND undefined
// array IS NOT NaN, 0, false, or an empty string

// happy path - create an associative array
var array8 = {
    "fName":"Joe",
    "lName":"Biglot",
    "age":22
};
console.log("Array8: " + array8["fName"]);

//nasty path - call associative array by number
console.log("Array8[0]: " + array8[0]);
// results - array8[0] is undefined


//nasty path - pop an associative array
function arrayPop(){
array8.pop();
console.log("Pop array 8: " + array8);
} // syntax error - array8.pop is not a function

// nasty path - push an associative arryay
function arrayPush(){
array8.push("hi");
console.log("Push array 8: " + array8);
} // results - syntax error. Same as above

// happy path - delete an element from the array
delete array8["fName"];
console.log(array8["fName"]);
// results - displays undefined

// nasty path - slice
// var sArray8 = array8.slice(2); -- It doesn't matter which one you use
function arraySlice(){
var sArray8 = array8.slice("lName");
console.log("Slice array8: " + sArray8);
} // Result - Syntax error

// nasty path - splice
function arraySplice(){
array8.splice();
} // results - syntax error, not a function