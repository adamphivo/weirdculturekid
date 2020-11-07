"use strict";

// Reviews Animation
let reviews = [
  [
    `Ms. Nguyen's account of her journey through life as a third culture kid offers
  up delightful insights into the western European culture from the point of
  view of a Vietnamese born global citizen. A refreshing perspective that is
  sadly often unexplored, and yet profoundly entertaining, as the author
  recounts her own life story interspersed with compelling interviews from a
  wide array of people with diverse intercultural backgrounds.`,
    `Thomas de
      Ruty, International Mysterious Man`,
  ],
  [
    `"A thought provoking tribute to us Weird Culture Kids, for anyone that
    struggles with or is interested in examining the intersections of identity and
    culture, this book is for you"`,
    `Matthew Yiannis Welch, A Greek-American
      who became magnetized to China, got trapped in the commonwealth,
      and found his way home`,
  ],
  [
    `“When you have to think before answering the question “where are you
    from” this is the book for you! Ngoc takes the reader through her
    hilarious/confusing journey to find her tribe of “Weird Culture Kid”`,
    `Jahee
      Son, Weird Culture Kid kind of from South Korea`,
  ],
  [
    `I have worked with weird culture kids my whole life, and in fact my daughter
    is one of them. This book highlights the lives of some amazing young women
    and men, and details what in fact makes them unique. In an ever shrinking
    world, understanding different kinds of people, and what makes them &quot;weird
    cultured&quot; is both informative and insightful. Ngoc is an amazing writer, and a
    young woman who sees the world in a way that makes us all better. This is a
    great read.`, `Richard Sherwood, Chairman of AEG - American Education
      Group`
  ],
  [
    `It is simple, yet grabs your heart strings. It talks more to the emotional part
    of the reader than the intellectual part. I found myself laughing and crying
    and remembering my own parallel personal stories throughout the whole
    book.`, `Ani Flys Junquera, Georgetown Program Resident Director in
      Madrid, Spain`
  ]
];

let reviewSection = document.getElementById("reviewSection");
let review = document.getElementById("review");
let author = document.getElementById("author");

let rdNumber = Math.floor(Math.random() * reviews.length);
review.innerHTML = `" ${reviews[rdNumber][0]} "`;
author.innerHTML = reviews[rdNumber][1];

setInterval(function () {
  let rdNumber = Math.floor(Math.random() * reviews.length);
  review.innerHTML = `" ${reviews[rdNumber][0]} "`;
  author.innerHTML = reviews[rdNumber][1];
  reviewSection.animate([{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }], {
    duration: 24000,
  });
}, 24000);
