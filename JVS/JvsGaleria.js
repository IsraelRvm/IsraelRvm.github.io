"use strict";
const galeria = document.querySelector(".galeria");
const button = document.querySelector(".button");
const buttonvolver = document.querySelector(".button-volver");

var arrayImg = ["../IMAGENES/IM_1.jpg", "../IMAGENES/IMG_2.jpg",
                "../IMAGENES/IMG_3.jpg", "../IMAGENES/IMG_4.jpeg",
                "../IMAGENES/IMG_5.jfif", "../IMAGENES/IMG_6.jpg",
                "../IMAGENES/IMG_7.jpg", "../IMAGENES/IMG_8.jfif",
                "../IMAGENES/IMG_9.jpg", "../IMAGENES/IMG_10.jpg",
                "../IMAGENES/IMG_11.jpg", "../IMAGENES/IMG_12.jpg",
                "../IMAGENES/IMG_13.jpg", "../IMAGENES/IMG_14.jpeg",
                "../IMAGENES/IMG_15.jpg", "../IMAGENES/IMG_16.jpg",
                "../IMAGENES/IMG_17.jpg", "../IMAGENES/IMG_18.jpg",
                ];
galeria.style.gridTemplateColumns = `repeat(${arrayImg.length}, 1fr)`;

const agregarFotos = (img)=>{
    for(let i = 0; i<img.length; i++){
        let newImg = `<img class="foto" src="${arrayImg[i]}">`;
        galeria.innerHTML += newImg;
    }
}
agregarFotos(arrayImg);

const helementosHijos = galeria.children;
var contador = 0;
button.addEventListener("click", ()=>{
    helementosHijos[contador].classList.add("siguiente");
    helementosHijos[contador].classList.remove("volver");
    contador++;

    buttonvolver.style.display = `inline-block`;

    if(contador >= arrayImg.length-1){
        button.style.display = `none`;
    }
});

buttonvolver.addEventListener("click", ()=>{
    if(contador <= arrayImg.length && contador >= 0){
        contador--;
        button.style.display = `inline-block`;

        helementosHijos[contador].classList.add("volver");
        helementosHijos[contador].classList.remove("siguiente");

        if(contador == 0){
            buttonvolver.style.display = `none`;
        }
    }
})