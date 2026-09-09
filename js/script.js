/*
const imgShoes = document.querySelector(".shoes_box img"),
item1 = document.querySelector("#item1"),
item2 = document.querySelector("#item2"),
item3 = document.querySelector("#item3"),
item4 = document.querySelector("#item4"),
item5 = document.querySelector("#item5"),
item6 = document.querySelector("#item6");

item1.addEventListener("click" , () => {
    imgShoes.src ="../img/cata/EXPLORER_M_PERFIL.webp";
});
item2.addEventListener("click" , () => {
    imgShoes.src ="../img/cata/EXPLORER_M_INCLINADA.webp";
});
item3.addEventListener("click" , () => {
    imgShoes.src ="../img/cata/EXPLORER_M_ATRAS.webp";
});
item4.addEventListener("click" , () => {
    imgShoes.src ="../img/cata/VORA_SS_410N_PERFIL.webp";
});
item5.addEventListener("click" , () => {
    imgShoes.src ="../img/cata/VORA_SS_410N_INCLINADA.webp";
});
item6.addEventListener("click" , () => {
    imgShoes.src ="../img/cata/EVORA_SS_410N_ATRAS.webp";
});
*/


const imgShoes = document.querySelector(".shoes_box img");
const items = document.querySelectorAll(".item_box");

if (imgShoes && items.length > 0) {
    items.forEach(item => {
        item.addEventListener("click", () => {
            // Lee la ruta guardada en el data-img del contenedor
            const newSrc = item.getAttribute("data-img");
            
            if (newSrc) {
                imgShoes.src = newSrc;
            }
        });
    });
}