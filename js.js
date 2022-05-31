let bisnesTarificModal=document.querySelector(".bisnes-tarific")
let imgTraficModal=document.querySelector(".icon-bisnes-tarific__img");
let bisnesRatesModal=document.querySelector(".business-rates-modal")
imgTraficModal.addEventListener('click', function( ) {
    bisnesRatesModal.style.display ="block"  
})
bisnesTarificModal.addEventListener('click', function( ) {
    bisnesRatesModal.style.display ="block"
})

let closeModal=document.querySelector(".close-modal")
closeModal.addEventListener('click', function( ) {
    bisnesRatesModal.style.display="none"
})