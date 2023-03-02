const inp = document.getElementById('inp')
const button = document.getElementById('button')
const lower = document.getElementById('lower')
const upper = document.getElementById('upper')

button.addEventListener('click',()=>{
    lower.innerText+=` ${inp.value.toLowerCase()}`
    upper.innerText+=` ${inp.value.toUpperCase()}`
})