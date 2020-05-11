thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);
function onButtonClick() {  
    otheritem.style.color = "red";  
}  