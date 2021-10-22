let input = document.querySelector('#inpt');
let btn = document.querySelector('#bttn');
let list = document.querySelector('#ulist');
let weekday = document.querySelector('#day');



btn.addEventListener('click', function newElement(){
    var Li=document.createElement('li');
    var tick=document.createElement('img');
    var cross=document.createElement('img');


    tick.src="tick.png"
    cross.src="cross.png"

    tick.classList.add("imageStyle"); //image styling
    cross.classList.add("imageStyle");

    Li.innerHTML = input.value ;
    Li.classList.add("list-group-item"); //bootstrap styling
    Li.append(tick,cross); 
    
    list.append(Li);
    tick.addEventListener('click',function(){
        Li.style.backgroundColor="#97D35D";
    })
    
    cross.addEventListener('click',function(){
        list.removeChild(Li);
    })


    input.value = "";
});

var today = new Date();
var currentDay="";
var options = {weekday: 'long', day: 'numeric', month:'long'}
var currentDay = today.toLocaleDateString("en-us",options);
weekday.innerHTML =currentDay;









