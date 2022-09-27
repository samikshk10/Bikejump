
// document.getElementById('pausebtn').addEventListener('click',function(){

//     obstacle.style.animationPlayState="paused";
//     road.style.animationPlayState="paused"; 
//     // a.pause();
//     document.getElementById('PlayPauseGame').style.display="block";
// });


const car=document.getElementById('vehicle');
const obstacle=document.getElementById('obstacle');
const road= document.getElementById('road');
// alert(localStorage.getItem('vehicleid'));
const vid=localStorage.getItem('vehicleid');
document.getElementById('show').innerHTML="Press Space To Start";
obstacle.style.animationPlayState="paused";
road.style.animationPlayState="paused";

var a;
 if(vid==1)
 {
    
     car.style.backgroundImage="url('Images/car1.png')"
     car.style.height="150px";
     car.style.width="150px";
    }
    
    else if(vid==2)
    {
     car.style.backgroundImage="url('Images/bike.png')"
     car.style.height="120px";
     car.style.width="140px";
   
     a=document.createElement('audio');
     a.setAttribute('src','Sounds/dukebikesound.mp3');
     a.pause();

     
     a.loop=true;
     

    

 }
 else if(vid==3)
 {
  
        car.style.backgroundImage="url('Images/sportscar.png')"
        car.style.height="150px";
        car.style.width="300px";

 }
 window.onload = function(){
 document.onkeyup=function(e)
{
    if(e.code=='Space')
    {
        a1=document.createElement('audio');
        a1.setAttribute('src','Sounds/dukestartsound.mp3');
        a1.play();
        document.getElementById('PlayPauseGame').style.display="none";
        document.getElementById('game').style.filter="none";
        setTimeout(() => {
            obstacle.style.animationPlayState="running";
road.style.animationPlayState="running";

a.play();
       
  



function jump(){
    if(car.classList!='jump' || car.classList!='rotate')
    {
    car.classList.add('jump');
    if(vid==2)
    {
        car.classList.add('rotate');
    }
    setTimeout(() => {
    
        car.classList.remove('jump');
        car.classList.remove('rotate');
        
        
        
    }, 400);
}
}
if(vid==2)
{
document.onkeydown=function(e){
    if(e.key=='ArrowUp')
    {
        car.classList.add('rotate');
        
        
        
    }
 }

 document.onkeyup=function(e)
 {
     if(e.key=='ArrowUp')
     {
         car.classList.remove('rotate');
     
    }
 }
}

document.addEventListener('keydown',function(event){
   if(event.code=='Space')
   {
jump();
   }    
// console.log(event.key);




});
let count=0;
let isalive=setInterval(() => {
    let score=document.getElementById('score');
   score.innerHTML=count++;
    const cartop=parseInt(window.getComputedStyle(car).getPropertyValue('top'));
    const obstacleleft=parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
//    if(obstacleleft<190 && obstacleleft> -90  )
//    {
//     console.log('game over');
var car1 = car.getBoundingClientRect();

var obstacle1 = obstacle.getBoundingClientRect();


if(count==29)
{
    obstacle.style.animation= "obstacle 1.5s infinite linear";
    
}

if(count==59)
{
    obstacle.style.animation= "obstacle 1s infinite linear";

}

if(count==159)
{
    obstacle.style.animation= "obstacle 0.9s infinite linear";

}

if(count==259)
{
    obstacle.style.animation= "obstacle 0.7s infinite linear";

}


if(car1.x > obstacle1.x + obstacle1.width || car1.x + car1.width < obstacle1.x || car1.y > obstacle1.y + obstacle1.height || car1.y + car1.height <obstacle1.y)
{

}
else{
    console.log('hit');
    // alert('game over\n Your Score is:'+isalive);
    obstacle.style.animationPlayState="paused";
road.style.animationPlayState="paused";

a.pause();
document.getElementById('PlayPauseGame').style.display="block";
document.getElementById("show").innerHTML="Game Over!!!<br>"+"Your Score:"+score.innerHTML+"<br>Press R to Play Again";
document.getElementById('game').style.filter="blur(3px)";
clearInterval(isalive);

window.onkeydown=function(eve)
{
if(eve.code=='KeyR')
{
 
    window.location.reload();
}
}
}




//    }






  
}, 200);



}, 850);
    }
}
 
 }

