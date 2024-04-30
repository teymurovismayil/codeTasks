const input = document.querySelector("#input")
const button = document.querySelector("#submit") 
const text = document.querySelector("#text")
const textClick = document.querySelector("#textClick")

button.addEventListener("click", function(){
    document.querySelector("#text").innerHTML="<p style='display:inline; margin-right:10px'>Welcome to the site </p>"+input.value
    document.getElementById("text").style.cssText = 
     " display: inline-block; background-color: red; width: 90%; height: 100px; border: 1px solid red; justify-content: center; display: flex;lign-items: center;margin: 0 auto;"
    document.body.style.backgroundColor="gray"
    
})

