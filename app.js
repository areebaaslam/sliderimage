// var parent =  document.getElementById("parent");
// var showslide = document.getElementById("showSlide");
// var allimages = parent.getElementByTagName("IMG");
// var indexNumber = 0;

// function randerSlide(){
//     showSlide .src = allimages[indexNumber].src;
// }
// randerSlide();
// function nextSlide(){
//     if(indexNumber + 1 == allimages.length){
//         indexNumber = 0;

//     }else{
//         indexNumber ++;
//     }
// }

// function prevSlide(){
//     if(indexNumber - 1 == allimages.length){
//         indexNumber = 0;

//     }else{
//         indexNumber --;
//     }
// }

// var pera = document.getElementById("pera");
//  pera.setAttribute = ("class","red");


var flag = 2;

function showSlide(num){
    var slides = document.getElementsByClassName("slide");
    if(num == slides.length){
        flag = 0;
        num = 0;
    }
    for(var y of slides){
        y.style.display = "none";
    }
    
    slides[num].style.display = "block";
}

showSlide(flag);
function randerSlide(x){
    flag = flag + x;
    showSlide(flag);
}

