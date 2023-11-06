const albahaca = document.getElementById("albahaca")

albahaca.addEventListener("click", mostrarClic)
function mostrarClic(e){
    console.log(e.target.innerText)
}

