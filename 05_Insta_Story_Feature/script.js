const arr = [
  {
    dp: "https://i.pinimg.com/564x/bf/5f/08/bf5f0850a560d5e5c1ddb97316ac4863.jpg",
    story:
      "https://i.pinimg.com/564x/52/80/71/52807180a35c90e96e696a8e52ddcbe4.jpg",
  },
  {
    dp: "https://i.pinimg.com/564x/e4/6c/27/e46c2744d537669a5776867f893f64cf.jpg",
    story:
      "https://i.pinimg.com/564x/3c/55/45/3c55457fee2a871acc3d117052430943.jpg",
  },
  {
    dp: "https://i.pinimg.com/564x/d1/6e/02/d16e02b9df2b696adaae072b13eea27e.jpg",
    story:
      "https://i.pinimg.com/736x/07/0c/f2/070cf282fc54b07ff51d44c026d86b13.jpg",
  },
  {
    dp: "https://i.pinimg.com/564x/33/ed/84/33ed84e135b83ad2eef65c3f8316a0e8.jpg",
    story:
      "https://i.pinimg.com/564x/57/a2/8e/57a28ea9611e22eb431a8e77a0b74d2f.jpg",
  },
  {
    dp: "https://i.pinimg.com/564x/cc/95/e1/cc95e133a7043e4adcb4c81e4e68785b.jpg",
    story:
      "https://i.pinimg.com/564x/b7/48/97/b74897a8f64bff71e70433f88ee982e4.jpg",
  },

  {
    dp: "https://i.pinimg.com/564x/c8/b7/41/c8b7413ccd33544ab59691a09a7b4107.jpg",
    story:
      "https://i.pinimg.com/564x/9c/30/44/9c30449ead2be85773673ae4e6fdd58c.jpg",
  },
];

const storyHeader = document.querySelector("#stories");

/* 
arr.forEach(function (element) {
  const img = document.createElement("img");
  img.setAttribute("src", `${element.dp}`);
  
  const div = document.createElement("div");
  div.setAttribute("class", "story");

  div.appendChild(img);
  storyHeader.appendChild(div);
});
*/
// Another way to do the above 👆️ approach is this 👇️

let div = "";
arr.forEach(function (element, index) {
  div += `<div class="story">
    <img
        id= ${index}
      src="${element.dp}"
    />
  </div>`;
});

storyHeader.innerHTML = div;

const fullScreenImage = document.querySelector("#full-screen-image");

storyHeader.addEventListener("click", function (e) {

  if (!isNaN(e.target.id)) {//If the user clicked on the story header then ignore it
    
    let imgValue = arr[e.target.id].story;

    fullScreenImage.style.display = 'block'
    fullScreenImage.style.opacity = 1
    fullScreenImage.style.backgroundImage =`url(${imgValue})`
    
    setTimeout(()=>{
        fullScreenImage.style.display = 'none'

    },2000)
  }
});
