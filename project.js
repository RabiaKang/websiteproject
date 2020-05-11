myitem = document.getElementById("firsttest");
// Change the color and fontsize of the text when we move over it; change it back when we move off of it
    myitem.addEventListener("mouseover", onMouseOver);
    myitem.addEventListener("mouseout", onMouseOut);
    function onMouseOver() {  
        myitem.style.color = "darkgreen";  
        myitem.style.fontsize = "2em"
    } //font color and size changing
    function onMouseOut() {
        myitem.style.color = "";
        myitem.style.fontsize = ""
    } //returning to default color and size

    thebutton = document.getElementById("thebutton");  
    otheritem = document.getElementById("buttontest");

    thebutton.addEventListener("click", onButtonClick);
    function onButtonClick() {  
        otheritem.style.color = "red";  
    } 