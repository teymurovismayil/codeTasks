const input = document.querySelector(".input")
const add = document.querySelector(".add")
const list = document.querySelector(".list")

add.addEventListener("click", function(){
    
    const allList = document.createElement('li')
    allList.style.listStyle="none"
    
    allList.innerText=input.value
    
    const deleteBox = document.createElement('button')
    deleteBox.classList.add('deleteBox')
    allList.append(deleteBox)
    list.append(allList)
  
})


