const base = document.getElementById('base')
const exp = document.getElementById('exp')
const button = document.getElementById('button')
const ans = document.getElementById('ans')

button.addEventListener('click',()=>{
    let p = pow(base.value,exp.value)
    ans.innerText = `power is: ${p}`
})

function pow(base,exp){
    if(base==0 && exp==0) return 'undefined'
    if(base == 0) return 0
    if(exp==1) return base

    prod = 1;
    for(let i=0;i<exp;i++){
        prod*=base;
    }
    return prod
}