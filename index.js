// console.log("Connected");

// const header = document.querySelector(".header");

// const items = document.querySelectorAll(".list-item");
// const itemsArr = Array.from(items);
// itemsArr.forEach(element => element.style.backgroundColor = "red");
// Always convert Node List to an Array

// const header = document.getElementById("Idheader");
// const toggle = document.querySelector(".toggle");
// header.classList.add("Karen");
// header.classList.remove("Karen");

// toggle.addEventListener("click", function(){
//     header.classList.toggle("Karen");
// });

//Button click changes background to red
//Button click changes background to blue

const background = document.querySelector(".background");
const button = document.querySelector(".button");
const headerTwo = document.querySelector(".header-two");

button.addEventListener("click", function(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    background.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    headerTwo.textContent = `rgb(${red}, ${green}, ${blue})`;
});