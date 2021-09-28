const reivews = [
    {
        id: 1,
        img: "https://i.pinimg.com/originals/f6/bd/84/f6bd84153caf3ea4939b66813ade5ec6.jpg",
        author: "Susan",
        position: "web designer",
        review: "I am web designer. I graduated from Oxford University majoring in UI/UX"
    },
    {
        id: 2,
        img: "https://i.pinimg.com/originals/06/fc/b4/06fcb4193f9608137f20a2497a7d9e8a.jpg",
        author: "Emily",
        position: "web developer",
        review: "Hello!! I am eimly. I developed web using javascript."
    },
    {
        id: 3,
        img: "https://i.pinimg.com/736x/19/41/f0/1941f0493d785e616b6b129277826c81.jpg",
        author: "Peter",
        position: "CEO",
        review: "My passion is to creat web for people happiness!!!!"
    },
    {
        id: 4,
        img: "https://i.pinimg.com/originals/eb/66/ef/eb66efd19ab19d377f77337cd79cea17.jpg",
        author: "Dave",
        position: "Marketing Manager",
        review: "My main job is to find customers."
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const position = document.getElementById("position");
const review = document.getElementById("review");

const forward = document.getElementById("forward");
const backward = document.getElementById("backward");

let currentItem = 0;

//Initial State
window.addEventListener("DOMContentLoaded", function () {
    let item = reivews[currentItem];
    img.src = item.img;
    author.textContent = item.author;
    position.textContent = item.position;
    review.textContent = item.review;
});

//function 
function showPerson(person) {
    let item = reivews[person];
    img.src = item.img;
    author.textContent = item.author;
    position.textContent = item.position;
    review.textContent = item.review;
}

//for forward button 
forward.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reivews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

//for backward button 
backward.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reivews.length - 1;
    }
    showPerson(currentItem);
});

