    let numberOne = document.querySelector(".numberOne");
    let mathOperation = document.querySelector(".mathOperation")
    let numberTwo = document.querySelector(".numberTwo");
    let answer = document.querySelector(".answer")
    const button = document.querySelector(".btn")
    let topla;
 
    button.addEventListener("click" , function(){
        if (mathOperation.value=="+") {
            document.querySelector(".answer").innerText=Number(numberOne.value)+Number(numberTwo.value)
            
        }
        else if (mathOperation.value=="-") {
            document.querySelector(".answer").innerText=Number(numberOne.value)-Number(numberTwo.value)
        }

        else if (mathOperation.value=="*") {
            document.querySelector(".answer").innerText=Number(numberOne.value)*Number(numberTwo.value)
        }

        else if (mathOperation.value=="/") {
            document.querySelector(".answer").innerText=Number(numberOne.value)/Number(numberTwo.value)
        }
       
    })
   




    // document.querySelector(".answer").innerText=Number(numberOne.value)+Number(numberTwo.value)