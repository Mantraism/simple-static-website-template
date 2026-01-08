
//Disable right mouse click Script
//By Maximus (maximus@nsimail.com) w/ mods by DynamicDrive
//For full source code, visit http://www.dynamicdrive.com

var message="i love you";

///////////////////////////////////
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

// -->


//MUSIC PLAYER
// Source - https://stackoverflow.com/a
// Posted by Michael Gaskill, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-11, License - CC BY-SA 4.0

var audio_player = $("#audio-player");
var play_button = $('#play');
var progress_bar = $("#progressbar");
var time = $("#time");
var mute_button = $('#mute');
var volume_bar = $('#volume');
var more_info = $('#more-info-box');
var info_tray = $("#info-tray");
var player = document.getElementById('player');
var duration = 0;
var volume = 0.75;

player.onloadedmetadata = function() {
    duration = player.duration;
    progress_bar.progressbar("option", { 'max' : duration });
};

player.load();
player.volume = 0.75;
player.addEventListener("timeupdate", function() {
    progress_bar.progressbar('value', player.currentTime);
    time.text(getTime(player.currentTime));
}, false);

function getTime(t) {
    var m=~~(t/60), s=~~(t % 60);
    return (m<10?"0"+m:m)+':'+(s<10?"0"+s:s);
}

function getProgressBarClickInfo(progress_bar, e) {
    var offset = progress_bar.position();
    var x = e.pageX - offset.left; // or e.offsetX (less support, though)
    var y = e.pageY - offset.top;  // or e.offsetY
    var max = progress_bar.progressbar("option", "max");
    var value = x * max / progress_bar.width();

    return { x: x, y: y, max: max, value: value };
}

volume_bar.progressbar({
    value : player.volume*100,
});

volume_bar.click(function(e) {
    var info = getProgressBarClickInfo($(this), e);
    volume_bar.progressbar('value', info.value);
    player.volume = info.value / info.max;
});

progress_bar.progressbar({
    value : player.currentTime,
});

progress_bar.click(function(e) {
    var info = getProgressBarClickInfo($(this), e);
    player.currentTime = player.duration / info.max * info.value;
});

play_button.click(function() {
    player[player.paused ? 'play' : 'pause']();
    $(this).toggleClass("fa-play", !player.paused);
    $(this).toggleClass("fa-pause", player.paused);
});

mute_button.click(function() {
    if (player.volume == 0) {
        player.volume = volume;
    } else {
        volume = player.volume;
        player.volume = 0;
    }

    volume_bar.progressbar('value', player.volume * 100);

    $(this).toggleClass("fa-volume-up", player.volume != 0);
    $(this).toggleClass("fa-volume-off", player.volume == 0);
});

more_info.click(function() {
    audio_player.animate({
        height: (audio_player.height() == 50) ? 100 : 50
    }, 1000);
});

// insert style to soundcloud player
preview.onload = function() {
    var style = document.createElement('style');
        style.id = 'styles';
        style.type ='text/css';
        mypreview.head.appendChild(style);
}
