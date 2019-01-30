"use strict";

// appends a string to the DOM
document.querySelector("#page-content").innerHTML = "Lærere på Ringvej syd 104";

// declaring techer objects

let teacher1 = {
  name: "Birgitte Kirk Iversen",
  initials: "bki",
  mail: "bki@baaa.dk",
  phone: "72286316",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Multimedia Design",
  img: "https://www.baaa.dk/CropUp/headshot/media/1524902/birgitte-kirk-iversen.jpg"
};

let teacher2 = {
    name:"Rasmus Cederdorff",
    initials:"race",
    mail:"race@baaa.dk",
    phone:"72286318",
    position:"Lecturer",
    img:"/img/rasmus.jpg",
    
 
    
    

};

let teacher3 = {
    name:"Michelle Andreassen",
    initials:"micha",
    mail:"micha@baaa.dk",
    position:"Lecturer",
    img:"https://www.baaa.dk/CropUp/headshot/media/2046250/Michelle-Andreasen.jpg",

};

// logs the teacher objects to the console
console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

// append data fromn the objects to the document
// teacher1
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher1.img + "'>" +
  "<h3>" + teacher1.name + "</h3>" +
  teacher1.position + "<br>" +
  "<a href='mailto:" + teacher1.mail + "'>" + teacher1.mail + "</a>" +
  "<article>";

//teacher2
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher2.img + "'>" +
  "<h3>" + teacher2.name + "</h3>" +
  teacher2.position + "<br>" +
  "<a href='mailto:" + teacher2.mail + "'>" + teacher2.mail + "</a>" +
  "<article>";
//teacher3
document.querySelector("#grid-teachers").innerHTML +=
  "<article>" +
  "<img src='" + teacher3.img + "'>" +
  "<h3>" + teacher3.name + "</h3>" +
  teacher3.position + "<br>" +
  "<a href='mailto:" + teacher3.mail + "'>" + teacher3.mail + "</a>" +
  "<article>";