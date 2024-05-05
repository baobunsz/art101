/*
* Author: Bao Hy Dang,bdang9@ucsc.edu>
* Created: May 5 2024
* License: Public Domain
*/

//declare array
numArray = [1, 2, 4, 6, 7, 10];
console.log ("Number Array: ", numArray); 

//squareFunction - square of a number
function squareFunction(x){
    var result = x**2;
    return result;
};

//test for the named function
console.log ("Square of 3: ", squareFunction(3));

//array map for the function
var mapResults = numArray.map(squareFunction);
console.log ("Square of Number Array: ", mapResults);

//anon function - a tenth of a number
var result = numArray.map (function(x){
    return x/10;
});
console.log ("A tenth of Number Array (anon function): ", result);

  // Your map results data
var mapResults = [
    "<li> Number Array: " + JSON.stringify(numArray) + "</li>",
    "<li> Square of Number Array: " + JSON.stringify(mapResults) + "</li>",
    "<li> A tenth of Number Array (anon function): " + JSON.stringify(numArray.map (function(x){
        return x/10;
    })) + "</li>"
];

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);   