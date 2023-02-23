const x1 = document.getElementById('x1')
const x2 = document.getElementById('x2')
const y1 = document.getElementById('y1')
const y2 = document.getElementById('y2')
const button = document.getElementById('button')
const ans = document.getElementById('ans')

function CalDist(){
    ans.innerText = `distance is: ${Math.sqrt((x2.value - x1.value)*(x2.value - x1.value)+(y2.value-y1.value)*(y2.value-y1.value))}`
}

button.addEventListener('click',CalDist)