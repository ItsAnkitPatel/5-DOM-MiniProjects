const btn = document.querySelector("#add");

const element = document.querySelector("#card h5");



btn.addEventListener("click", function () {
    if(this.innerHTML === "Add Friend"){

        element.innerHTML = "Friends";
        element.style.color = "green";
        this.innerHTML = "Remove";
    }else{
        element.innerHTML = "Strangers";
        element.style.color = "red";
        this.innerHTML = "Add Friend";
        
    }
  
});
