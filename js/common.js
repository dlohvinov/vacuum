//main menu burger
$(".main_mnu_button").click(function() {
    $("nav > ul").slideToggle();
});

//nav changes color while scrolling
var nav = document.getElementById('nav');
window.onscroll = function () {
    "use strict";
    if (window.pageYOffset != 0 ) {
        nav.classList.add("scrolled");
    }
    else {
        nav.classList.remove("scrolled");
    }
};

//hiding preview and showing video
var videoActive = document.getElementById('video-wrap');
var videoPlayer = document.getElementById('video');
videoActive.onclick = function () {
        videoActive.classList.add('hidden');
        videoPlayer.classList.remove('hidden');

};

// var timer = new Timer();
// timer.start({countdown: true, startValues: {hours:3, days:2}});
// $('.timer #day').html(timer.getTimeValues().toString());
// timer.addEventListener('secondsUpdated', function (e) {
//     $('.timer #day').html(timer.getTimeValues().toString());
// });
// timer.addEventListener('targetAchieved', function (e) {
//     $('.timer #day').html('KABOOM!!');
// });


//setting countdown
// var now = new Date().getTime();
// var deadline = new Date().setDate(now + 2);
// var countdown = deadline - now;
// // var days = Math.floor(countdown/(1000*60*60*24));
// var hours = Math.floor(countdown%(1000*60*60*24)/(1000*60*60));
// var minutes = Math.floor(countdown%(1000*60*60)/(1000*60));
// var seconds = Math.floor(countdown%(1000*60)/(1000));
// document.getElementById('sec').innerHTML = ;





