const number = document.getElementById("number");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const submitBtn = document.getElementById("submit")
const ratings = document.querySelector(".ratings")
const message = document.querySelector(".message")

one.addEventListener("click", function(){
        number.innerHTML = "You selected 1 out of 5";
        submitBtn.addEventListener("click", function() {
        ratings.style.display = 'none'
        message.style.display = 'block'
    
    })
})

two.addEventListener("click", function(){
        number.innerHTML = "You selected 2 out of 5";
        submitBtn.addEventListener("click", function() {
        ratings.style.display = 'none'
        message.style.display = 'block'
    
    })
})

three.addEventListener("click", function(){
        number.innerHTML = "You selected 3 out of 5";
        submitBtn.addEventListener("click", function() {
        ratings.style.display = 'none'
        message.style.display = 'block'
    
    })
})

four.addEventListener("click", function(){
        number.innerHTML = "You selected 4 out of 5";
        submitBtn.addEventListener("click", function() {
        ratings.style.display = 'none'
        message.style.display = 'block'
    
    })
})

five.addEventListener("click", function(){
        number.innerHTML = "You selected 5 out of 5";
        submitBtn.addEventListener("click", function() {
        ratings.style.display = 'none'
        message.style.display = 'block'
    
    })
})
