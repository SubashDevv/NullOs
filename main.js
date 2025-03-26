const body=document.querySelector("body");
const time=document.querySelector("#time");
const monthYear=document.querySelector("#date");
const more=document.querySelector("#moreOptions");
const moreToggle=document.querySelector("#moreToggle");
const exit=document.querySelector(".exit");
const overlay=document.querySelector("#overlay");
const logOut=document.querySelector("#logOut");
const aboutUs=document.querySelector("#aboutUs");
const settingToggle=document.querySelector("#settingToggle");
const setting=document.querySelector("#setting");
const redC=document.querySelectorAll(".red");
const blueC=document.querySelectorAll(".blue");
const pinkC=document.querySelectorAll(".pink");
const yellowC=document.querySelectorAll(".yellow");
const bottomBar=document.querySelector("#bottomBar");
const icon=document.querySelectorAll("i");
const div=document.querySelectorAll("div");
const save=document.querySelector("#save");
const defaultBtn=document.querySelector("#default");
let pass;
let currbg;
let currtheme;
let settingOn;
const decorUpdate=()=>{
    if(localStorage.getItem("bg")!=null){
        bottomBar.style.backgroundColor=localStorage.getItem("bg");
    }
    if(localStorage.getItem("theme")!=null){
        icon.forEach((icon) => icon.style.color = localStorage.getItem("theme"));
        div.forEach((icon) => icon.style.borderColor= localStorage.getItem("theme"));
    }

}
decorUpdate();

//event listeners
defaultBtn.addEventListener("click",()=>{
    localStorage.removeItem("bg");
    localStorage.removeItem("theme");
    location.reload();
})
save.addEventListener("click",()=>{
        settingToggle.style.animation="settingAntiToggle 0.2s 0s ease-in-out forwards"
        moreToggle.style.animation="antiToggle 0.25s 0s ease-in-out forwards"
        overlay.style.display="none";
        settingOn=false;
        pass=document.querySelector("#pass").value.trim();
        currbg=bottomBar.style.backgroundColor;
        currtheme=document.querySelector("i").style.color;
        if(pass!=null){        localStorage.setItem("pass",pass);}
        localStorage.setItem("bg",currbg);
        localStorage.setItem("theme",currtheme);
})
redC.forEach((x)=>{x.addEventListener("click",()=>{
    console.log("h")
    if(x.classList.contains("bg")){
        console.log("h")
        bottomBar.style.backgroundColor="rgb(150, 16, 16)";
    }
})})
yellowC.forEach((x)=>{x.addEventListener("click",()=>{
    console.log("h")
    if(x.classList.contains("bg")){
        console.log("h")
        bottomBar.style.backgroundColor="rgb(152, 185, 21)";
    }
})})
blueC.forEach((x)=>{x.addEventListener("click",()=>{
    console.log("h")
    if(x.classList.contains("bg")){
        console.log("h")
        bottomBar.style.backgroundColor="rgb(15, 33, 136)";

    }
})})
pinkC.forEach((x)=>{x.addEventListener("click",()=>{
    console.log("h")
    if(x.classList.contains("bg")){
        console.log("h")
        bottomBar.style.backgroundColor="rgb(143, 10, 123)";

    }
})})
//theme

redC.forEach((x) => {
    x.addEventListener("click", () => {
        if (x.classList.contains("themes")) {
            icon.forEach((icon) => icon.style.color = "rgb(150, 16, 16)");
            div.forEach((icon) => icon.style.borderColor= "rgb(150, 16, 16)");div.forEach((icon) => icon.style.borderColor= "rgb(150, 16, 16)");
        }
    });
});

yellowC.forEach((x) => {
    x.addEventListener("click", () => {
        if (x.classList.contains("themes")) {
            icon.forEach((icon) => icon.style.color = "rgb(152, 185, 21)");
            div.forEach((icon) => icon.style.borderColor= "rgb(152, 185, 21)");
        }
    });
});

blueC.forEach((x) => {
    x.addEventListener("click", () => {
        if (x.classList.contains("themes")) {
            icon.forEach((icon) => icon.style.color = "rgb(15, 33, 136)");
            div.forEach((icon) => icon.style.borderColor= "rgb(15, 33, 136)");
        }
    });
});

pinkC.forEach((x) => {
    x.addEventListener("click", () => {
        if (x.classList.contains("themes")) {
            icon.forEach((icon) => icon.style.color = "rgb(143, 10, 123)");
            div.forEach((icon) => icon.style.borderColor= "rgb(143, 10, 123)");
        }
    });
});
//others
aboutUs.addEventListener("click",()=>{

    alert("Microchrondia is the power house of cell");

})
logOut.addEventListener("click",()=>{
    if(confirm("Do you want to Exit")){
window.close();
    }
})
more.addEventListener("click",()=>{
moreToggle.style.animation="toggle 0.3s 0s ease-in-out forwards";
overlay.style.display="flex";
document.querySelector("#pass").setAttribute("placeholder",(localStorage.getItem("pass")!=null)?localStorage.getItem("pass"):"Enter");
})
exit.addEventListener("click",()=>{
    moreToggle.style.animation="antiToggle 0.25s 0s ease-in-out forwards"
    if(settingOn){
        settingToggle.style.animation="settingAntiToggle 0.2s 0s ease-in-out forwards"
    }
    overlay.style.display="none";
})
setting.addEventListener("click",()=>{
    settingOn=true;
    settingToggle.style.animation="settingToggle 0.3s 0s ease-in-out forwards"
})
//time
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