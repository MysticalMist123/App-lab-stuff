const inp = document.getElementById('inp')
const substr = document.getElementById('substr')
const b1 = document.getElementById('button1')
const ans1 = document.getElementById('ans1')
const ind = document.getElementById('ind')
const b2 = document.getElementById('button2')
const ans2 = document.getElementById('ans2')
const str2 = document.getElementById('str2')
const b3 = document.getElementById('button3')
const ans3 = document.getElementById('ans3')

function findSubstr(str,sub){
    return str.indexOf(sub)
}
function findChar(str,ind){
    if(ind>=str.length) return -1
    return str[ind]
}

b1.addEventListener('click',()=>{
    if(inp.value!='' && substr.value!=''){
        ans1.innerText+=` ${findSubstr(inp.value,substr.value)}`
    }
})

b2.addEventListener('click',()=>{
    if(inp.value!=''){
        ans2.innerText+=` ${findChar(inp.value,ind.value)}`
    }
})

b3.addEventListener('click',()=>{
    ans3.innerText+=` ${inp.value + str2.value}`
})