"use strict";

// Reviews Animation
let reviews = [
    ["I had such a great time.","Adam Vo"],
    ["What a wonderful book.","The New-York Times"],
    ["Wish I had written that.", "Edgar Allan Poe"],
    ["What goes arounds, comes around","Justin Timberlake"],
    ["We can clearly see she has no chill","Telerama"],
    ["What can I do for youhouhou","Michael Jackson"],
    ["That is one hell of a book !", "Gordon Ramsay"],
];

let reviewSection = document.getElementById("reviewSection")
let review = document.getElementById("review");
let author = document.getElementById("author");

let rdNumber = Math.floor(Math.random() * reviews.length);
review.innerHTML = `" ${reviews[rdNumber][0]} "`;
author.innerHTML = reviews[rdNumber][1];

setInterval(function() {
    let rdNumber = Math.floor(Math.random() * reviews.length);
    review.innerHTML = `" ${reviews[rdNumber][0]} "`;
    author.innerHTML = reviews[rdNumber][1];
    reviewSection.animate([
        {transform: 'translateX(-300px)', opacity:0},
        {transform: 'translateX(0px)', opacity: 1},
        {transform: 'translateX(300px)', opacity: 0},
    ], {
        duration : 6000,
    });
}, 6000);

