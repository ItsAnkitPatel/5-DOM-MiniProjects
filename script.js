const main = document.querySelector("main");
const cursor = document.querySelector("#cursor");
const anchors = document.querySelectorAll("li a")
main.addEventListener("mousemove", function (e) {
  cursor.style.left = e.x + "px";
  cursor.style.top = e.y + "px";
});

anchors.forEach(function(e){
    e.addEventListener("mousemove",function(){
        cursor.style.width ="60px"
        cursor.style.height ="60px"
    })
    e.addEventListener("mouseleave",function(){
        cursor.style.width ="20px"
        cursor.style.height ="20px"
    })
})