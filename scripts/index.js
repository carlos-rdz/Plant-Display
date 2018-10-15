let plants = document.querySelector("[data-plants]");
let first_PLant = document.querySelector("[data-plant1]");
let second_PLant = document.querySelector("[data-plant2]");
let third_PLant = document.querySelector("[data-plant3]");
let fourth_PLant = document.querySelector("[data-plant4]");
let fifth_PLant = document.querySelector("[data-plant5]");
let sixth_PLant = document.querySelector("[data-plant6]");

const images = [

    {plant:first_PLant, image:'images/scott-webb-249006-unsplash.jpg'},
    {plant:second_PLant, image:'images/caleb-george-536388-unsplash.jpg'},
    {plant:third_PLant, image:'images/lauren-mancke-60547-unsplash.jpg'},
    {plant:fourth_PLant, image:'images/kari-shea-92027-unsplash.jpg'},
    {plant:fifth_PLant, image:'images/tanalee-youngblood-341695-unsplash.jpg'},
    {plant:sixth_PLant, image:'images/scott-webb-476290-unsplash.jpg'},

]

function createDisplay(){
    
    let display = document.createElement('div');
    display.setAttribute('class','display');
    return display;

}

function increaseImage(plant,image){


    plant.addEventListener('click',function(){
        // plants.classList.remove('plants-clicked');
        plant.classList.add("plants_clicked");
        
        let plantImage = document.createElement('img') ;
        plantImage.setAttribute('class','newImage');
        plantImage.setAttribute('src',image);
        
        while (display.hasChildNodes()){
            display.removeChild(display.lastChild);
        }

        display.appendChild(plantImage)
        
    });
}

display = createDisplay();
document.body.insertBefore(display,plants)

increaseImage(images[0]['plant'],images[0]['image']);
increaseImage(images[1]['plant'],images[1]['image']);
increaseImage(images[2]['plant'],images[2]['image']);
increaseImage(images[3]['plant'],images[3]['image']);
increaseImage(images[4]['plant'],images[4]['image']);
increaseImage(images[5]['plant'],images[5]['image']);

            