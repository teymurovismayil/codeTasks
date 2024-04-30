  /*         Calculator Taski nin JS kodlari balayir              */
    const numberOne = document.querySelector(".numberOne");
    const mathOperation = document.querySelector(".mathOperation")
    const numberTwo = document.querySelector(".numberTwo");
    const answer = document.querySelector(".answer")
    const button = document.querySelector(".btn")
    document.querySelector(".answer").style.cssText ="width:auto; padding:10px" 
    
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
   


/*         Calculator Taski nin JS kodlari bitir              */



    const sizeWidth = document.querySelector(".sizeFirst")
    const sizeHeight = document.querySelector(".sizeSecond")
    const sizeBg = document.querySelector(".sizeThird")
    const box = document.querySelector(".box")
    const execute = document.querySelector(".execute")
    
    execute.addEventListener("click", function(){
        document.querySelector(".box").style.cssText ="margin-top:30px; transition: 1s "
        box.style.height = Number(sizeHeight.value)+"px"
        box.style.width = Number(sizeWidth.value)+"px"
        box.style.backgroundColor = sizeBg.value
    })


    