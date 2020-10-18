"use strict";

// Interview animation

let interview = [
  `My name is Ngoc NGUYEN and I am the author of &quot;Weird Culture Kids&quot;, a memoir about
    my growing up in different cultures and not knowing where to fully belong. “Weird culture
    kids” is a term that I coined to designate people who do not fit into any specific cultural
    standard and who create their own ‘weird culture’ in which they take bits and pieces from
    the traditional and nation-state ones that they’ve experienced and mix everything
    together to create their own culture. Through this book, I wanted to share stories about
    the different cultures that I was born into, that I encountered with, and that I consciously
    chose as part of my identity.`,
  `The final product will be an alteration between my own stories and similar ones of those
    around me who are just equally weird, culturally-speaking.
    I was compelled to write this book because I am one of those kids who have always felt
    like I never fully belonged to any place. I was born in Moscow and grew up in Hanoi
    where I was enrolled in an international French school from the age of four. I left
    Vietnam to attend an American boarding school in Connecticut in 2008 and ever since,
    one of the most recurring questions that people always asked me was “Where are you
    from?”`,
  `This had always been one of the hardest questions for me to answer because I had
    never believed that we should—could?—be “from” one place. I was never sure what
    type of information the speaker was trying to get from my answer. Was he trying to figure
    out where I was living before arriving here? Or, going beyond the geographical
    dimension, which cultures shaped my personality and which sets of beliefs dictated my
    behavior?`,
  `My default answer is “Vietnam”, my passport country, although I know that this simple
    answer does not encapsulate all the places where I feel some sense of strong
    belonging. And the more and the further I traveled, I realized that there are so many
    people like myself out there, who are equally lost and confused when being asked this
    dangerously common question.`,
  `Through this book, I have had the opportunity to not only connect with people that I know
    from both my past and my present, but also strangers whom I’ve never met but who
    were generous enough to share with me their life stories and experiences. Through
    them, I learned that the answer to the “where are you from?” question doesn’t
    necessarily have to be a physical nation-state.`,
  `There are around 273 million people in the world who live in a different country than the
    one of their passport today. 273 million people is 2,7 times the population of Vietnam
    (my passport country), 4 times that of France (where I pay my taxes) and 0,8 times that
    of the US (where I’ll be publishing my book). If we were a country, we would be the
    fourth most populous one, just after China, India and the US.`,
  `Looking at this number I realized that I was never alone, that my weird culture world was
    not something rare, but actually very common. The only reason that I thought it to be
    rare was because I never spoke about those relocations, those awkward moments,
    those uneasy conversations.
    And this book is going to do just that.
    So here’s to all the weird culture kids out there who are— actually— not so weird, after
    all!`,
  `Interview taken from "HEC stories".`
];
let currentDescription = document.getElementById("currentDescription");
let next = document.getElementById("next");
let back = document.getElementById("back");
let currentPage = 0;
currentDescription.innerHTML = interview[currentPage];
currentPage == 0
  ? (back.style.visibility = "hidden")
  : (back.style.visibility = "visible");
currentPage == interview.length - 1
  ? (next.style.visibility = "hidden")
  : (next.style.visibility = "visible");

function goTo(value) {
  value == "next" ? currentPage++ : currentPage--;
  currentDescription.animate([{ opacity: 1 }, { opacity: 0 }, { opacity: 1 }], {
    duration: 2000
  });
  setTimeout(function() {
    currentDescription.innerHTML = interview[currentPage];
  }, 1000);
  currentPage == 0
    ? (back.style.visibility = "hidden")
    : (back.style.visibility = "visible");
  currentPage == 7
    ? (next.style.visibility = "hidden")
    : (next.style.visibility = "visible");
}

// Event listeners
next.addEventListener("click",function(){goTo("next")});
back.addEventListener("click",function(){goTo("previous")});

// Reviews Animation
let reviews = [
  ["I love moquette.", "Adam Vo"],
  ["What a wonderful book.", "The New-York Times"],
  ["Wish I had written that.", "Edgar Allan Poe"],
  ["Uplifting", "Justin Timberlake"],
  ["Brillant !", "Telerama"],
  ["Powerful", "Michael Jackson"],
  ["That is one hell of a book !", "Gordon Ramsay"]
];

let reviewSection = document.getElementById("reviewSection");
let review = document.getElementById("review");
let author = document.getElementById("author");

let rdNumber = Math.floor(Math.random() * reviews.length);
review.innerHTML = `" ${reviews[rdNumber][0]} "`;
author.innerHTML = reviews[rdNumber][1];

setInterval(function() {
  let rdNumber = Math.floor(Math.random() * reviews.length);
  review.innerHTML = `" ${reviews[rdNumber][0]} "`;
  author.innerHTML = reviews[rdNumber][1];
  reviewSection.animate(
    [
      { transform: "translateX(-300px)", opacity: 0 },
      { transform: "translateX(0px)", opacity: 1 },
      { transform: "translateX(300px)", opacity: 0 }
    ],
    {
      duration: 6000
    }
  );
}, 6000);
