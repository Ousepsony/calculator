var HTMLBody = document.querySelector("body");

document.addEventListener("DOMContentLoaded",pageLoad);
document.addEventListener("resize",pageResize);
function pageLoad(){
    HTMLBody.style.height = window.innerHeight + "px";
}

function pageResize(){
    HTMLBody.style.height = window.innerHeight + "px";
}