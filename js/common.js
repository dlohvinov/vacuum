"use strict";
//popup
var popupBackground = document.getElementById('popup-background');
var popupCancel = document.getElementById('popup-cancel');
var popupWrap = document.getElementById('popup-wrap');

var popupCall = document.getElementById('popup-call');
var footerPopupCall = document.getElementById('footer-popup-call');

function showPopup() {
    popupBackground.classList.remove('hidden');
    popupWrap.classList.remove('hidden');
}
function hidePopup() {
    popupBackground.classList.add('hidden');
    popupWrap.classList.add('hidden');
}

popupBackground.onclick = function () {hidePopup()};
popupCancel.onclick = function () {hidePopup()};

popupCall.onclick = function () {showPopup()};
footerPopupCall.onclick = function () {showPopup()};


//main menu burger
$(".main_mnu_button").click(function() {
    $("nav ul").toggleClass('open');
});

//nav changes color while scrolling
var nav = document.getElementById('nav');
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
$(document).ready(function (){
    $("#logo").click(function () {
        $("html, body").animate({scrollTop: $('#header').offset().top}, 1000)
    });
    $("#how-to-scroll").click(function () {
        $("html, body").animate({ scrollTop: $('#how-to').offset().top }, 1000);
    });
    $("#specification-scroll").click(function () {
        $("html, body").animate({scrollTop: $('#specification').offset().top}, 1000)
    });
    $("#sale-scroll").click(function () {
        $("html, body").animate({scrollTop: $('#sale').offset().top}, 1000)
    });
    $("#footer-how-to-scroll").click(function () {
        $("html, body").animate({ scrollTop: $('#how-to').offset().top }, 1000);
    });
    $("#footer-specification-scroll").click(function () {
        $("html, body").animate({scrollTop: $('#specification').offset().top}, 1000)
    });
    $("#footer-sale-scroll").click(function () {
        $("html, body").animate({scrollTop: $('#sale').offset().top}, 1000)
    });
});


// scroll accentuation
var specification = document.getElementById('specification'), specificationScroll = document.getElementById('specification-scroll');
var howTo = document.getElementById('how-to'), howToScroll = document.getElementById('how-to-scroll');
var sale = document.getElementById('sale'), saleScroll = document.getElementById('sale-scroll');

function getElementTopHeight(elem) {
    var box = elem.getBoundingClientRect();
    return box.top + pageYOffset;
}
function getElementBottomHeight(elem) {
    return getElementTopHeight(elem) + elem.offsetHeight;
}

function navCurrent () {
    if(pageYOffset+(document.documentElement.clientHeight*0.50) >= getElementTopHeight(specification) &&
        (pageYOffset+(document.documentElement.clientHeight*0.50) <= getElementBottomHeight(specification))){
        specificationScroll.classList.add('accentuated');
    }
    else {
        specificationScroll.classList.remove('accentuated');
        if(pageYOffset+(document.documentElement.clientHeight*0.50) >= getElementTopHeight(howTo) &&
            (pageYOffset+(document.documentElement.clientHeight*0.30) <= getElementBottomHeight(howTo))){
            howToScroll.classList.add('accentuated');
        }
        else {
            howToScroll.classList.remove('accentuated');
            if(pageYOffset+(document.documentElement.clientHeight*0.25) >= getElementTopHeight(sale) &&
                (pageYOffset+(document.documentElement.clientHeight*0.50) <= getElementBottomHeight(sale))){
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
var parallax = document.getElementById('parallax');
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
var videoActive = document.getElementById('video-wrap');
var parent = document.getElementById('iframe-wrap');
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


var countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 2, countDownDate.getHours(), countDownDate.getMinutes());

Cookies.set('countdownDate', countDownDate);
var end = Cookies.get('countdownDate');
var res = new Date(Date.parse(end));
if (!(res instanceof Date)) {
   // Cookies.set('countdownDate', countDownDate, { expires: 7 });
    Cookies.set('countdownDate', countDownDate);
    end = Cookies.get('countdownDate');
    res = new Date(Date.parse(end));
}
// alert(res.toString());
var x = setInterval(function() {
    var now = new Date();

    var distance = res - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


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


