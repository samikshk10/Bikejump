const car=document.getElementById('vehicle');
// alert(localStorage.getItem('vehicleid'));
const vid=localStorage.getItem('vehicleid');
 if(vid==1)
 {
    
     car.style.backgroundImage="url('Images/car1.png')"
     car.style.height="150px";
     car.style.width="150px";
    }
    
    else if(vid==2)
    {
     car.style.backgroundImage="url('Images/bike.png')"
     car.style.height="150px";
     car.style.width="200px";

 }
 else if(vid==3)
 {
  
        car.style.backgroundImage="url('Images/sportscar.png')"
        car.style.height="150px";
        car.style.width="300px";

 }
 
 



function jump(){
    car.classList.add('jump');
}



document.addEventListener('keydown',function(event){
jump();
setTimeout(() => {
    
    car.classList.remove('jump');
}, 400);
});
