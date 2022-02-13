var score=0

function updatescore(){
score=score+1
document.getElementById("score").innerHTML=score
}

function nextpage(){
    window.location="activity2.html"
}

function savescore(){
    localStorage.setItem("score",score)
}