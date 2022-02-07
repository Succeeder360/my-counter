/*let passenger1 = 20
let passenger2 = 30

let totalPassengers = passenger1 + passenger2
console.log(totalPassengers)


// increment

let count = 5
count++
console.log(count)*/


let increaseBtn = document.getElementById('increment-btn')
let decreaseBtn = document.getElementById('decrement-btn')
let initialNumber = document.getElementById('count-el')
let resetBtn = document.getElementById('reset-btn')
let saveBtn = document.getElementById('save-btn')
let prev = document.getElementById('prev')
let count= 0


increaseBtn.addEventListener('click', function () {
    count++
    initialNumber.textContent = count
    
    
    initialNumber.style.color='green'
    increaseBtn.style.borderRadius='15px'
    

    

    
})


decreaseBtn.addEventListener('click', function () {
    count--
    initialNumber.textContent = count
    
   
    initialNumber.style.color='red'
    decreaseBtn.style.borderRadius='15px'
    
})


resetBtn.addEventListener('click', function () {
    count = 0
    initialNumber.textContent = count
    
    initialNumber.style.color='red'
    resetBtn.style.borderRadius='15px'
    
})


saveBtn.addEventListener('click', function(){
    
    let savPrev =  count + '-'
    
   prev.textContent += savPrev
   initialNumber.textContent=0
   count = 0
    
})