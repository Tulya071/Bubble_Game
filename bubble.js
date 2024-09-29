function checktimer(){
    if(document.querySelector("#Timer").textContent==0)
    document.write("Your game is over and your score is "+ score);
}
function makebubble(){
    var clutter="";
    for(var i=0;i<176;i++)
    {
        clutter+=`<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    }
    document.querySelector("#pbel").innerHTML=clutter;
}
var timer=document.querySelector("#Timer").textContent;
function settimer(){
    var stop=setInterval(function(){
        if(timer>0)
        {timer--;
            document.querySelector("#Timer").textContent=timer;}
            else
            {
                document.querySelector("#pbel").innerHTML=`<h1>Game over your score is ${score}</h1>`;
                clearInterval(stop);
            }
    },1000);
}
var score=0;
function scoreincrease(){
    score+=10;
    document.querySelector("#Score").textContent=score;
}
function sethits(){
    document.querySelector("#hit").textContent=Math.floor(Math.random()*10);
}
document.querySelector("#pbel").addEventListener("click",function(dets){
    if(document.querySelector("#hit").textContent==dets.target.textContent)
    {
        scoreincrease();
        sethits();
    }
    makebubble();
})
settimer();
makebubble();
setInterval(checktimer(),1000);