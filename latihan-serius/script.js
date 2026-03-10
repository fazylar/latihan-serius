let context;

const contexts = [
{
name:"Valentine",
text:"Valentine season is coming. Romance films trend higher.",
correct:{
genre:"Romance",
mc:"Childhood Friend",
setting:"School",
ending:"Happy Ending"
}
},

{
name:"Halloween",
text:"Halloween is approaching. Horror movies dominate.",
correct:{
genre:"Horror",
mc:"Strangers",
setting:"City",
ending:"Sad Ending"
}
}
];

function showPage(id){
document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active")
})

document.getElementById(id).classList.add("active")
}

function startGame(){

context = contexts[Math.floor(Math.random()*contexts.length)]

document.getElementById("contextText").innerText = context.text

showPage("page-context")

}

function goBuilder(){
showPage("page-builder")
}

function calculate(){

let score = 0

let genre = document.getElementById("genre").value
let mc = document.getElementById("mc").value
let setting = document.getElementById("setting").value
let ending = document.getElementById("ending").value

if(genre === context.correct.genre) score++
if(mc === context.correct.mc) score++
if(setting === context.correct.setting) score++
if(ending === context.correct.ending) score++

let stars = "⭐".repeat(score)

document.getElementById("stars").innerText = stars

if(score === 4){
document.getElementById("resultText").innerText = "Data Analyst Expert!"
}
else if(score >=2){
document.getElementById("resultText").innerText = "Good analysis, but trends could be improved."
}
else{
document.getElementById("resultText").innerText = "Audience data mismatch."
}

showPage("page-result")

}

function restart(){
location.reload()
}