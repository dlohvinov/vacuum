"use strict";
//popup
let popupCancel = document.getElementsByClassName('popup-cancel');
let popupWrap = document.getElementsByClassName('popup-wrap')[0];

let popupCall = document.getElementsByClassName('popup-call');

function showPopup() {
    popupWrap.classList.remove('hidden');
}
function hidePopup() {
    popupWrap.classList.add('hidden');
}

popupCancel[0].onclick = function () {hidePopup()};
popupCancel[1].onclick = function () {hidePopup()};

popupCall[0].onclick  = function () {showPopup()};
popupCall[1].onclick  = function () {showPopup()};


//main menu burger
$(".main_mnu_button").click(function() {
    $("nav ul").toggleClass('open');
});

//nav changes color while scrolling
let nav = document.getElementsByTagName('nav')[0];
function navColorChanger () {
    if (window.pageYOffset != 0 ) {
        nav.classList.add("scrolled");
    }
    else {
        nav.classList.remove("scrolled");
    }
}
document.addEventListener('DOMContentLoaded', function () {navColorChanger()});



//scroll menu
$('nav li a').click(function () {
    $("html, body").animate({scrollTop: $($(this).attr('data-scroll-to')).offset().top}, 1000)
});
$('footer li a').click(function () {
    $("html, body").animate({scrollTop: $($(this).attr('data-scroll-to')).offset().top}, 1000)
});


// scroll accentuation
let specification = document.getElementById('specification'), specificationScroll = document.getElementById('specification-scroll');
let howTo = document.getElementById('how-to'), howToScroll = document.getElementById('how-to-scroll');
let sale = document.getElementById('sale'), saleScroll = document.getElementById('sale-scroll');

function getElementTopHeight(elem) {
    var box = elem.getBoundingClientRect();
    return box.top + pageYOffset;
}
function getElementBottomHeight(elem) {
    return getElementTopHeight(elem) + elem.offsetHeight;
}
function isInViewport(elem) {
        return pageYOffset+(document.documentElement.clientHeight*0.50) >= getElementTopHeight(elem) &&
            (pageYOffset+(document.documentElement.clientHeight*0.50) <= getElementBottomHeight(elem));

}

function navCurrent () {
    if(isInViewport(specification)){
        specificationScroll.classList.add('accentuated');
    }
    else {
        specificationScroll.classList.remove('accentuated');
        if(isInViewport(howTo)){
            howToScroll.classList.add('accentuated');
        }
        else {
            howToScroll.classList.remove('accentuated');
            if(isInViewport(sale)){
                saleScroll.classList.add('accentuated');
            }
            else {
                saleScroll.classList.remove('accentuated');
            }
        }
    }
}
window.onscroll = function () {navCurrent(), navColorChanger(), parallaxScroll()};


//bottle parallax
let parallax = document.getElementById('parallax');
function parallaxScroll() {
    if ($(window).width() >= 992) {
        if(pageYOffset >= getElementTopHeight(parallax) ||
            (pageYOffset <= getElementBottomHeight(parallax))) {
            var elemTop = getElementTopHeight(parallax);
            var windowTop = pageYOffset;
            var shiftDistance = (elemTop - windowTop)*0.15;
            parallax.style.transform = "translateY("+shiftDistance+"px)";
        }
    }
}


//hiding preview and showing video
let videoActive = document.getElementsByClassName('video-wrap')[0];
let parent = document.getElementById('iframe-wrap');
videoActive.onclick = function () {
        videoActive.classList.add('hidden');
        var iframe = document.createElement("iframe");
        iframe.classList.add('video');
        iframe.src = "https://player.vimeo.com/video/264842884?autoplay=1";
        iframe.frameBorder = '0';
        iframe.setAttribute('webkitallowfullscreen', 'mozallowfullscreen', 'allowfullscreen');
        parent.appendChild(iframe);
};




$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        nav:true,
        center:true,
        navText:['<span></span>','<span></span>'],
        navClass:['left-arrow', 'right-arrow'],
        autoplayTimeout:6000,
        pagination: true,
        responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }

    });
});


let countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 2, countDownDate.getHours(), countDownDate.getMinutes());

Cookies.set('countdownDate', countDownDate);
let end = Cookies.get('countdownDate');
let res = new Date(Date.parse(end));
if (!(res instanceof Date)) {
   // Cookies.set('countdownDate', countDownDate, { expires: 7 });
    Cookies.set('countdownDate', countDownDate);
    end = Cookies.get('countdownDate');
    res = new Date(Date.parse(end));
}
// alert(res.toString());
let x = setInterval(function() {
    let now = new Date();

    let distance = res - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);


    document.getElementById("day").innerHTML = "0"+days;
    if (hours < 10) {
        document.getElementById("hour").innerHTML = "0"+hours;
    } else {
        document.getElementById("hour").innerHTML = hours;
    }
    if (minutes < 10) {
        document.getElementById("minute").innerHTML = "0"+minutes;
    } else {
        document.getElementById("minute").innerHTML = minutes;

    }
    if (seconds < 10) {
        document.getElementById("second").innerHTML = "0"+seconds;
    } else {
        document.getElementById("second").innerHTML = seconds;
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Время вышло :с";
    }
}, 1000);


