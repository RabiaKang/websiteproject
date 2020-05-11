myitem = document.getElementById("firsttest");
myitem2 = document.getElementById("secondtest");
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

    myitem2.addEventListener("mouseover", onMouseOver2);
    myitem2.addEventListener("mouseout", onMouseOut2);
    function onMouseOver2() {  
        myitem2.style.color = "darkgreen";  
        myitem2.style.fontsize = "2em"
    }  
    function onMouseOut2() {
        myitem2.style.color = "";
        myitem2.style.fontsize = ""
    }  

// now adding a button for the Honors & Awards list on Resume Part 1

    thebutton = document.getElementById("thebutton");  
    otheritem = document.getElementById("buttontest");

    thebutton.addEventListener("click", onButtonClick);
    function onButtonClick() {  
        otheritem.style.color = "red";  
    }
    
// input text function from the bottom of the Essay page
    
textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);
textentry.addEventListener("blur", onChange);
function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}
function onChange(){
    //get the text that the user entered
    newtext = textentry.value;
    myitem.innerHTML = newtext;
}
theBigImage = document.getElementById("largeview")
theImgDiv.addEventListener("click",makeBigImage);
function makeBigImage(){
    //make a new img element  to add to our section element
    bigimage = document.createElement("img");
    bigimage.src = "images/angela.jpg";
    theBigImage.appendChild(bigimage);//add img element to the section
    myBigImage.classList.remove("dontshow");//tell section it's no longer part of the dontshow class

}
theBigImage.addEventListener("click", hideBigImage);
function hideBigImage(){
    theBigImage.classList.add("dontshow"); 
    theBigImage.innerHTML = "";
}