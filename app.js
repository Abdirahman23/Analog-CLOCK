let secHand = document.querySelector(".second-hand")
let minHand = document.querySelector(".minute-hand")
let hourHand = document.querySelector(".hour-hand")

function getMyTime(){

    let now = new Date()
    let seconds = now.getSeconds()
    let secondsDegree = ((seconds/60) * 360) + 90
    secHand.style.transform = `rotate(${secondsDegree}deg)`
     
    console.log(seconds)

    let minutes = now.getMinutes()
    let minutesDegree = ((minutes/60)*360) + 90
    minHand.style.transform = `rotate(${minutesDegree}deg)`

    let hours = now.getHours()
    let hoursDegree = ((hours/12)*360) + 90
    hourHand.style.transform = `rotate(${hoursDegree }deg)`

}

setInterval(getMyTime , 1000)





















































































































































 /*

let secondHand = document.querySelector(".second-hand")

let minuteHand = document.querySelector(".minute-hand")

let hourHand = document.querySelector(".hour-hand")

function setSecond (){
    let now = new Date()
    let seconds = now.getSeconds() 
    let secondsDegree = ((seconds/60) *360) + 90
    secondHand.style.transform = `rotate(${secondsDegree}deg) `
    console.log(seconds);

    
    let minutes = now.getMinutes() 
    let minutesDegree = ((minutes/60) *360) + 90
    minuteHand.style.transform = `rotate(${minutesDegree}deg) `
    console.log(minutes);

    let hours = now.getHours() 
    let hoursDegree = ((minutes/12) *360) + 90
    hourHand.style.transform = `rotate(${hoursDegree}deg) `
    console.log(hours);
}

setInterval(setSecond , 1000);

*/