const input = document.querySelector(".input")
const add = document.querySelector(".add")
const list = document.querySelector(".list")
const deleteBtn = document.querySelector(".deleteBtn")


add.addEventListener("click", function(){
  
    const allList = document.createElement('li')
    allList.style.listStyle="none"
    
    allList.innerText=input.value
    
    const deleteBox = document.createElement('button')
    deleteBox.classList.add('deleteBtn')
    allList.append(deleteBox)
    list.append(allList)
    deleteBox.addEventListener("click", function(){
        allList.remove()
    })
  
})



