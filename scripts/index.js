let plants = document.querySelector("[data-plants]");
let first_PLant = document.querySelector("[data-plant1]");
let second_PLant = document.querySelector("[data-plant2]");
let third_PLant = document.querySelector("[data-plant3]");
let display = document.querySelector("[data-display]");





first_PLant.addEventListener('click',function(){

    first_PLant.classList.add("plants_clicked");
    document.display.appendChild(document.createElement("bigPlant1"));
});

second_PLant.addEventListener('click',function(){

    second_PLant.classList.add("plants_clicked")
});

third_PLant.addEventListener('click',function(){

    third_PLant.classList.add("plants_clicked")
});

