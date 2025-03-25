const time=document.querySelector("#time");
const monthYear=document.querySelector("#date");
const more=document.querySelector("#moreOptions");
more.addEventListener("click",()=>{
    alert("Under Construction")
})
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