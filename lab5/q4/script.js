const time = document.getElementById('time')
const res = document.getElementById('res')

let today = new Date()
time.innerText+=` ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

let hour = today.getHours()
let min = today.getMinutes()
let sec = today.getSeconds()

let text = ''

if(hour>=6 && hour<12){
    text = 'Good morning'
}
else if(hour>=12 && hour<15){
    text = 'Good afternoon'
}
else if(hour>=15 && hour<21){
    text = 'Good evening'
}
else{
    text = 'Good night'
}

res.innerText+=`${text}`