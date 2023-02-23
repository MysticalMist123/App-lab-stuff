let inp = document.getElementById('inp')
const button1 = document.getElementById('button1')
const ans1 = document.getElementById('ans1')
const button2 = document.getElementById('button2')
const ans2 = document.getElementById('ans2')
const pi = 3.14

button1.addEventListener('click',()=>{
    ans1.innerText = `Volume is: ${inp.value*inp.value*inp.value*(4/3)*pi} with r = ${inp.value}`
})
button2.addEventListener('click',()=>{
    ans2.innerText = `Area is: ${inp.value*inp.value*3.14} with r = ${inp.value}`
})