const button = document.querySelector(".main-button")
const body = document.querySelector("body")
const h1 = document.querySelector(".main-title")

console.log(h1.textContent)

function getRandomNumber(){
    const max =255
    const min = 0
    
    return Math.floor(Math.random() * (max - min)) + min;
}

button.addEventListener("click", (e) =>{
    const r = getRandomNumber()
    const g = getRandomNumber()
    const b = getRandomNumber()

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    h1.textContent = `${r}, ${g}, ${b}`
})