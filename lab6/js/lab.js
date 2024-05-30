// Author: Bao Hy Dang <bdang9@ucsc.edu>
// Created: 23 April

// Define Variables
myTransport = ["Tesla X"," bus", " Amtrak train", " walk"];

// create an object for my main ride
myMainRide = {
  make : "Tesla",
  model : "X",
  color : "White",
  year : 2015,
  age : function () {
    return 2024 - this.year;
  }
}

document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre");
