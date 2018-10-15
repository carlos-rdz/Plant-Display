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
        
        let deletePLant = document.getElementsByClassName('plants_clicked')[0]
        if (deletePLant){
        deletePLant.classList.remove("plants_clicked");
        }
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

images.forEach(function(item){
    increaseImage(item['plant'],item['image'])
});