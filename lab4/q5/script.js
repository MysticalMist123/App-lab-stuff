const ans = document.getElementById('ans')

for(let i=100;i<=5000;i++){
    if(isArm(i)){
        ans.value+=`${i}, `
    }
}

function isArm(x){
    let temp = x
    let sum = 0
    while(temp){
        let digit = temp%10
        sum+=digit*digit*digit
        temp = parseInt(temp/10)
    }
    // console.log(sum)
    if(sum == x) return 1
    return 0
}

// isArm(153)