/*
* lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page
* Requirements: jQuery must be loaded for this script to work.
* Author: Bao Hy Dang,bdang9@ucsc.edu>
* Date: May 5 2024
*/

// add button to challenge section
$(".special-section").append("<button class='button'>Make Special</button>");

// add a click listener to the button
$(".special-section button").click(function(){
    console.log("click");
    // now add (or subtract) the "special-section" class to the section
    $(this).parent().toggleClass("special-section");
});
