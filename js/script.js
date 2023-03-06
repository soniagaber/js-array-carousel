const immagini=["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

let containerEl=document.getElementById("container");
let upArrowEl=document.getElementById("up-arrow");
let downArrowEl=document.getElementById("down-arrow");
let imgActiveEl=document.getElementById("img-active");

let index=0;
imgActiveEl.src=immagini[index];
downArrowEl.style.display="none";

upArrowEl.addEventListener("click", function(){
    if(index>=0 && index<=4){
        downArrowEl.style.display="flex";
    }
        index++;
    imgActiveEl.src=immagini[index];
    if(index==4){
        upArrowEl.style.display="none";
}
})

downArrowEl.addEventListener("click", function(){
    if(index>=0 && index<=4){
        upArrowEl.style.display="flex";
    }
    index--;
    imgActiveEl.src=immagini[index];
    if(index==0){
        downArrowEl.style.display="none";}
})

