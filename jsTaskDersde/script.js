    let numberOne = document.querySelector(".numberOne")
    let mathOperation = document.querySelector(".mathOperation")
    let numberTwo = document.querySelector(".numberTwo")
    let answer = document.querySelector(".answer")
    const button = document.querySelector(".btn")
    
    button.addEventListener("click", function(){
      
            toplama = Number(numberOne.innerText)+Number(numberTwo.innerText);
            console.log(toplama);
        
    })
