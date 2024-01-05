const main =  document.querySelector('main')
const cursor = document.querySelector("#cursor")
 const h1 = document.querySelector("main h1");
main.addEventListener("mousemove",function(e){
    cursor.style.left = e.x+'px'
    cursor.style.top = e.y+'px'
})
h1.addEventListener("mouseenter",function(){
    cursor.style.width ="100px"
    cursor.style.height ="100px"
})
h1.addEventListener("mouseleave",function(){
    cursor.style.width ="20px"
    cursor.style.height ="20px"
})