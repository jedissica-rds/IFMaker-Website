/*carrossel principal / inicial*/

const carross = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx=0;
    }
    carross.style.transform = "translateX(${-idx * 500}px)";
}
setInterval(carrossel, 1800);



const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});