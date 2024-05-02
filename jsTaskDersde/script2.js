
const boxFirst = document.querySelector(".boxFirst")

const boxSecond = document.querySelector(".accordion-content")

boxFirst.addEventListener("click", function(){
    boxSecond.classList.toggle("active")
})

