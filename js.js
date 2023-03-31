
var loto_n = document.querySelectorAll(".loto-n")
var winning_n = document.querySelectorAll(".winning-n")
var your_n = document.querySelectorAll(".your-n")

var loto_n1 = document.querySelector(".loto-n1")
var loto_n2 = document.querySelector(".loto-n2")
var loto_n3 = document.querySelector(".loto-n3")
var loto_n4 = document.querySelector(".loto-n4")
var loto_n5 = document.querySelector(".loto-n5")
var loto_n6 = document.querySelector(".loto-n6")
var loto_n7 = document.querySelector(".loto-n7")
var loto_n8 = document.querySelector(".loto-n8")
var loto_n9 = document.querySelector(".loto-n9")
var loto_n10 = document.querySelector(".loto-n10")
var loto_n11 = document.querySelector(".loto-n11")
var loto_n12 = document.querySelector(".loto-n12")
var loto_n13 = document.querySelector(".loto-n13")
var loto_n14 = document.querySelector(".loto-n14")
var loto_n15 = document.querySelector(".loto-n15")
var loto_n16 = document.querySelector(".loto-n16")
var loto_n17 = document.querySelector(".loto-n17")
var loto_n18 = document.querySelector(".loto-n18")
var loto_n19 = document.querySelector(".loto-n19")
var loto_n20 = document.querySelector(".loto-n20")
var loto_n21 = document.querySelector(".loto-n21")
var loto_n22 = document.querySelector(".loto-n22")
var loto_n23 = document.querySelector(".loto-n23")
var loto_n24 = document.querySelector(".loto-n24")
var loto_n25 = document.querySelector(".loto-n25")

loto_n1.innerHTML = 1
loto_n2.innerHTML = 2
loto_n3.innerHTML = 3
loto_n4.innerHTML = 4
loto_n5.innerHTML = 5
loto_n6.innerHTML = 6
loto_n7.innerHTML = 7
loto_n8.innerHTML = 8
loto_n9.innerHTML = 9
loto_n10.innerHTML = 10
loto_n11.innerHTML = 11
loto_n12.innerHTML = 12
loto_n13.innerHTML = 13
loto_n14.innerHTML = 14
loto_n15.innerHTML = 15
loto_n16.innerHTML = 16
loto_n17.innerHTML = 17
loto_n18.innerHTML = 18
loto_n19.innerHTML = 19
loto_n20.innerHTML = 20
loto_n21.innerHTML = 21
loto_n22.innerHTML = 22
loto_n23.innerHTML = 23
loto_n24.innerHTML = 24
loto_n25.innerHTML = 25

var winning_n1 = document.querySelector(".winning-n1")
var winning_n2 = document.querySelector(".winning-n2")
var winning_n3 = document.querySelector(".winning-n3")
var winning_n4 = document.querySelector(".winning-n4")
var winning_n5 = document.querySelector(".winning-n5")

var your_n1 = document.querySelector(".your-n1")
var your_n2 = document.querySelector(".your-n2")
var your_n3 = document.querySelector(".your-n3")
var your_n4 = document.querySelector(".your-n4")
var your_n5 = document.querySelector(".your-n5")

your_n1.disabled = true
your_n2.disabled = true
your_n3.disabled = true
your_n4.disabled = true
your_n5.disabled = true

var random = document.querySelector(".random")
var play = document.querySelector(".play")
var reset = document.querySelector(".reset")

var counter = 0

play.disabled = true 

for(var i of loto_n){
    i.addEventListener("click", function(){
        if(your_n1.value == "") {
            your_n1.value = this.innerHTML
            this.style.pointerEvents = "none"
            this.style.color = "var(--color-8)"
            counter++
        }  
        else if(your_n2.value == "") {
            your_n2.value = this.innerHTML
            this.style.pointerEvents = "none"
            this.style.color = "var(--color-8)"
            counter++
        }
        else if(your_n3.value == "") {
            your_n3.value = this.innerHTML
            this.style.pointerEvents = "none"
            this.style.color = "var(--color-8)"
            counter++
        }  
        else if(your_n4.value == "") {
            your_n4.value = this.innerHTML
            this.style.pointerEvents = "none"
            this.style.color = "var(--color-8)"
            counter++
        }  
        else if(your_n5.value == "") {
            your_n5.value = this.innerHTML
            this.style.pointerEvents = "none"
            this.style.color = "var(--color-8)"
            counter++
        }
        for(var i of loto_n){
            if(counter == 5){
                i.style.pointerEvents = "none"
            }
        }
        for (var i of your_n){
            if(i.value  != ""){
                random.disabled = true
            }
            if(i.value  == ""){
                play.disabled = true
            }
            else{
                play.disabled = false
            }
        } 
    }) 
}

// RANDOM
random.addEventListener("click",function(){
    counter = 5
    var arr2 = []
    while(arr2.length != 5){
        var rand = parseInt(Math.random()*25+1)
        if(arr2.indexOf(rand) == -1){
            arr2.push(rand)
        }
    }
    your_n1.value = arr2[0]
    your_n2.value = arr2[1]
    your_n3.value = arr2[2]
    your_n4.value = arr2[3]
    your_n5.value = arr2[4]
    for(var i of loto_n){
        if(i.innerHTML == your_n1.value ||
           i.innerHTML == your_n2.value ||
           i.innerHTML == your_n3.value ||
           i.innerHTML == your_n4.value ||
           i.innerHTML == your_n5.value){
            i.style.color = "var(--color-8)"
            i.style.transition = "0.3s"
        }
        i.style.pointerEvents = "none"
    }
    random.disabled = true
    play.disabled = false
})

// PLAY
play.addEventListener("click",function(){
    if(counter == 5){
        var arr1 = []
        while(arr1.length != 5){
            var rand = parseInt(Math.random()*25+1)
            if(arr1.indexOf(rand) == -1){
                arr1.push(rand)
            }
        }
        winning_n1.innerHTML = arr1[0]
        winning_n2.innerHTML = arr1[1]
        winning_n3.innerHTML = arr1[2]
        winning_n4.innerHTML = arr1[3]
        winning_n5.innerHTML = arr1[4]
        for(var i of loto_n){
            if(i.innerHTML == winning_n1.innerHTML ||
               i.innerHTML == winning_n2.innerHTML ||
               i.innerHTML == winning_n3.innerHTML ||
               i.innerHTML == winning_n4.innerHTML ||
               i.innerHTML == winning_n5.innerHTML){
                i.style.color = "var(--color-9)"
                i.style.backgroundColor = "var(--color-9)"
                i.style.backgroundImage = "none"
                i.style.boxShadow = "var(--box-shadow-6)"
                i.style.transition = "0.3s"
            }
            i.style.pointerEvents = "none"
        }
        for(var i of winning_n){
            if(i.innerHTML == your_n1.value ||
               i.innerHTML == your_n2.value ||
               i.innerHTML == your_n3.value ||
               i.innerHTML == your_n4.value ||
               i.innerHTML == your_n5.value){
                i.style.backgroundColor = "var(--color-8)"
                i.style.boxShadow = "var(--box-shadow-3)"
            }
            else{
                i.style.backgroundColor = "var(--color-5)"
                i.style.backgroundImage = "var(--background-image-2)"
                i.style.boxShadow = "var(--box-shadow-3)"
                random.disabled = true
                play.disabled = true
            }
        }  
        for (var i of your_n){
            if(i.value == winning_n1.innerHTML ||
               i.value == winning_n2.innerHTML ||
               i.value == winning_n3.innerHTML ||
               i.value == winning_n4.innerHTML ||
               i.value == winning_n5.innerHTML){
                i.style.backgroundColor = "var(--color-8)"
            } 
        }  
    }   
})

// RESET
reset.addEventListener("click",function(){
    for(var i of loto_n){
        i.style.color = "var(--color-2)"
        i.style.backgroundColor = "var(--color-5)"
        i.style.backgroundImage = "var(--background-image-2)"
        i.style.boxShadow = "var(--box-shadow-3)"
        i.style.pointerEvents = "auto"
    }
    for(var i of winning_n){
        i.innerHTML = ""
        i.style.backgroundColor = ""
        i.style.backgroundImage = ""
        i.style.boxShadow = "var(--box-shadow-6)"
    }
    for(var i of your_n){
        i.value = ""
        i.style.backgroundColor = "var(--color-5)"  
    }
    random.disabled = false
    counter = 0
})
