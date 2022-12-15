let scoreHomeEl=document.getElementById("score-home-el")
let scoreAwayEl=document.getElementById("score-away-el")
let freethrowEl=document.getElementById("free-throw-el")
let midrangeEl=document.getElementById("midrange-el")
let longrangeEl=document.getElementById("longrange-el")

let countHome = 0
let countAway = 0

//home

function freethrowHome(){
countHome += 1
scoreHomeEl.textContent = countHome
}

function midrangeHome(){
countHome += 2
scoreHomeEl.textContent = countHome
}

function longrangeHome(){
countHome += 3
scoreHomeEl.textContent = countHome
}

//Away

function freethrowAway(){
countAway += 1
scoreAwayEl.textContent = countAway
}

function midrangeAway(){
countAway += 2
scoreAwayEl.textContent = countAway
}

function longrangeAway(){
countAway += 3
scoreAwayEl.textContent = countAway
}









