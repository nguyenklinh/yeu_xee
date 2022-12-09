const modal_oldcar = document.querySelector(".main-input .modal")
const tinhtrangcu = document.querySelector(".main-input .tinhtrang .cu")
const tinhtrangmoi = document.querySelector(".main-input .tinhtrang .moi")

tinhtrangcu.addEventListener("click", ()=>{
    modal_oldcar.style.display = "flex"
})
tinhtrangmoi.addEventListener("click", ()=>{
    modal_oldcar.style.display = "none"
})