let plants = document.querySelector("[data-plants]");
let first_PLant = document.querySelector("[data-plant1]");
let second_PLant = document.querySelector("[data-plant2]");
let third_PLant = document.querySelector("[data-plant3]");
let fourth_PLant = document.querySelector("[data-plant4]");
let fifth_PLant = document.querySelector("[data-plant5]");
let sixth_PLant = document.querySelector("[data-plant6]");
let text_display = document.querySelector("[data-modal]");
let display = document.querySelector("data-display");
let displayImage = document.querySelector("[data-newImage]");
let counter = 0

const images = [

    {plant:first_PLant, image:'images/scott-webb-249006-unsplash.jpg', text:"Beautiful Plant 1", index:0},
    {plant:second_PLant, image:'images/caleb-george-536388-unsplash.jpg', text:"Beautiful Plant 2", index:1},
    {plant:third_PLant, image:'images/lauren-mancke-60547-unsplash.jpg', text:"Beautiful Plant 3", index:2},
    {plant:fourth_PLant, image:'images/kari-shea-92027-unsplash.jpg', text:"Beautiful Plant 4", index:3},
    {plant:fifth_PLant, image:'images/tanalee-youngblood-341695-unsplash.jpg', text:"Beautiful Plant 5", index:4},
    {plant:sixth_PLant, image:'images/scott-webb-476290-unsplash.jpg', text:"Beautiful Plant 6", index:5},
]
function increaseImage(plant,image,text,index){
    

    plant.addEventListener('click',function(){
        
        let deletePLant = document.getElementsByClassName('plants_clicked')[0]
        if (deletePLant){
            deletePLant.classList.remove("plants_clicked");
        }
        plant.classList.add("plants_clicked");
        
        displayImage.setAttribute('src',image);
        
        getInfo(displayImage,text)

        counter = index
        
    });
    
}

function arrowKeys(images){
    window.addEventListener('keydown',function(){
        if(event.keyCode === 37){
            if (counter > 0){
            counter -= 1}
            let deletePLant = document.getElementsByClassName('plants_clicked')[0]
            if (deletePLant){
                deletePLant.classList.remove("plants_clicked");
            }
            images[counter]['plant'].classList.add("plants_clicked");
            displayImage.setAttribute('src',images[counter]['image']);
            
            getInfo(displayImage,images[counter]['text'])
        }
        if(event.keyCode === 39){
            if (counter < 5){
            counter += 1}
            let deletePLant = document.getElementsByClassName('plants_clicked')[0]
            if (deletePLant){
                deletePLant.classList.remove("plants_clicked");
            }
            images[counter]['plant'].classList.add("plants_clicked");
            displayImage.setAttribute('src',images[counter]['image']);
            
            getInfo(displayImage,images[counter]['text'])
    }
});
}

images.forEach(function(item){
    increaseImage(item['plant'],item['image'],item['text'],item['index'])
});
arrowKeys(images);


function getInfo(largeImage,text){
    
    largeImage.addEventListener("click",function(){

        
        let plantInfo = document.createElement('div');
        
        plantInfo.innerText = text
        plantInfo.setAttribute("class","info")
        
        while (text_display.hasChildNodes()){
            text_display.removeChild(text_display.lastChild);
        }
        
        // largeImage.classList.add("newImage-clicked")
        text_display.appendChild(plantInfo);
        text_display.classList.remove('modal-hidden')
        
        
    });
    
}

text_display.addEventListener("click",function(){
    
    text_display.classList.add('modal-hidden')
    
});

window.addEventListener('keydown',function(event){
    
    if (event.keyCode === 27){
        text_display.classList.add('modal-hidden')
    }

});

