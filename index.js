var bar = document.getElementById('bar');
var nav =document.getElementById('navbar');
var close = document.getElementById('close');

if(bar ){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

// replacing the img in the shop product page 

var mainImage = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");
smallImg[0].onclick = function(){

    mainImage.src = smallImg[0].src;
}
smallImg[1].onclick = function(){

mainImage.src = smallImg[1].src;
}
smallImg[2].onclick = function(){

mainImage.src = smallImg[2].src;
}
smallImg[3].onclick = function(){

mainImage.src = smallImg[3].src;
}
