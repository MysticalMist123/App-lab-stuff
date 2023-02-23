const ans = document.getElementById('ans')

for(let i=1;i<=1000;i++){
    if(isPrime(i)){
        ans.value+=`${i},`
    }
}

function isPrime(x){
    for(let i=2;i<=Math.sqrt(x);i++){
        if(x%i==0){
            return 0;
        }
    }
    return 1;
}