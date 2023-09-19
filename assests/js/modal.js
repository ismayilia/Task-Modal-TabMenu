let button = document.querySelector(".button .btnm");
let content = document.querySelector(".content");
let icon = document.querySelector(".content i")

button.addEventListener("click", function(){
    this.classList.add("d-none");
    content.classList.remove("d-none");
})

icon.addEventListener("click",function(){
    content.classList.add("d-none");
    button.classList.remove("d-none")
})