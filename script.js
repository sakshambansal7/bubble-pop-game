var timer=60;
var score=0;
var hitRn=0;
function increaseScore(){
   score+=10;
   document.querySelector("#in_score").textContent=score;
}
 
 function bubble(){
    var clutter = "";

    for (var i = 0; i <= 139; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div id="bbl">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTime(){
    var timerint = setInterval(
            function(){
                if(timer>0){
            timer--;
            document.querySelector("#timer").textContent=timer;
            }
            else {
                clearInterval(timerint);
                document.querySelector("#pbtm").innerHTML=`<h1> Game Over <h1>`;

            }
        },1000 );
}
function getNewHit(){
      hitRn = Math.floor(Math.random() * 10);
     document.querySelector("#hitval").textContent=hitRn;
}
document.querySelector("#pbtm").addEventListener("click",
function(dets){
    var clickedNumber= Number(dets.target.textContent);
    console.log(Number(dets.target.textContent));
    if(clickedNumber== hitRn){
        increaseScore();
        getNewHit();
        bubble();


    };
});

bubble();
runTime();
getNewHit();
increaseScore();

