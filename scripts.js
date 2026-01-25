
//Disable right mouse click Script
//By Maximus (maximus@nsimail.com) w/ mods by DynamicDrive
//For full source code, visit http://www.dynamicdrive.com

var message="Right Click Notification";


function clickIE4(){
    if (event.button==2){
        alert(message);
        return false;
    }
}

function clickNS4(e){
    if (document.layers||document.getElementById&&!document.all){
        if (e.which==2||e.which==3){
            alert(message);
            return false;
        }
    }
}

if (document.layers){
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown=clickNS4;
}
    else if (document.all&&!document.getElementById){
    document.onmousedown=clickIE4;
}

document.oncontextmenu=new Function("alert(message);return false")

// Animation
const content = document.getElementById("content");
const contentOpacity = setTimeout(loadContent, 500); //Change the duration according to the animation duration

content.animate([
    {
        transform : "translateY(500px)",
        opacity : 0,
    },
    {
        transform : "translateY(0)",
        opacity : 1,
    }
],{
    duration : 500,
    fill: "none",
    delay : 250,
    easing : "ease",
}
);   

function loadContent(){
    document.getElementById("content").style.opacity="1"
}

document.addEventListener("load", content);