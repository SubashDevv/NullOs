const body=document.querySelector("body");
const time=document.querySelector("#time");
const monthYear=document.querySelector("#month-year");
let year,month,day,hours,minutes,now;
let timeUpdate=()=>{
    now = new Date();
    month = now.getMonth() + 1;
    day = now.getDate();
    hours = (now.getHours()<10)?`0${now.getHours()}`:now.getHours();
    minutes = (now.getMinutes()<10)?`0${now.getMinutes()}`:now.getMinutes();
    year=now.getFullYear();
    time.innerText=`${hours}:${minutes}`;  
    monthYear.innerText=`${month}/${day}/${year}`    
    }
    timeUpdate();
let dateUpdate=setInterval(timeUpdate,1000);
body.addEventListener("click",()=>{
    time.setAttribute("class","clickAnimation");
    monthYear.setAttribute("class","clickAnimation");
    setTimeout(()=>{window.location.href="main.html"},1000)
    
})