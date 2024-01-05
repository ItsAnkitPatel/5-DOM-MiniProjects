const elem = document.querySelectorAll(".elem");


elem.forEach(function(element){
    const elemImage = element.querySelector("img");

    element.addEventListener("mousemove", function(e){
        elemImage.style.left = e.x + "px";
        // elemImage.style.top = e.y + "px";
    });
    element.addEventListener("mouseenter", function(e){
        elemImage.style.opacity =1;
    });
    
    element.addEventListener("mouseleave", function(e){
        elemImage.style.opacity =0;
    });
    
});
