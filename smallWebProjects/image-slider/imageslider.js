var images = ["1.jpg","2.jpg","3.jpg","4.jpg"];
var counter = 0;

function Next(){
    var slide = document.getElementById("slider");
    counter++;
    if(counter >= images.length){
        counter = 0;
    }

    slide.src="images/" + images[counter];
}

function Prev(){
    var slide = document.getElementById("slider");
    counter--;
    if(counter < 0){
        counter=images.length-1;
    }

    slide.src="images/" + images[counter];
}