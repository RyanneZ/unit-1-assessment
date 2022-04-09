let startNum = 0
let newCount = startNum
let displayNum = document.querySelector(".count")
displayNum.innerHTML = startNum
let plusButton = document.getElementById("plus")
let minusButton = document.getElementById("minus")
let inputNumberStr = document.getElementById("input")
// let inputNumber = parseInt
console.log(inputNumberStr)



function plusItem() {
   let inputNumber = parseInt(inputNumberStr.value)
   newCount += inputNumber
   if (newCount < 0) {
    displayNum.classList.add("negative")
    } else {
    displayNum.classList.remove("negative")
    }
   displayNum.innerHTML = newCount
}
plusButton.addEventListener("click", plusItem)

function minusItem() {
    let inputNumber = parseInt(inputNumberStr.value)
    newCount -= inputNumber
    if (newCount < 0) {
        displayNum.classList.add("negative")
    } else {
        displayNum.classList.remove("negative")
    }
    displayNum.innerHTML = newCount
   
    
 }
 minusButton.addEventListener("click", minusItem)

