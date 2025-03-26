const body=document.querySelector("body");
const time=document.querySelector("#time");
const monthYear=document.querySelector("#month-year");
const passArea=document.querySelector("#passEnter");
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
    if(localStorage.getItem("pass")!=null){
        passArea.style.display="flex";
    }
    else{
        window.location.href="main.html";  
    }

})
let passCheck=()=>{
    const pass=document.querySelector("#pass").value.trim();
    let cPass=localStorage.getItem("pass");
    if(pass==cPass){
        window.location.href="main.html";
    }
    else{
        document.querySelector("p").innerText="INVALD";
        document.querySelector("p").style.color="red";
    }
}