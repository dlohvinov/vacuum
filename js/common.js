"use strict";
//popup
var popupQuit = document.getElementById('popup-quit');
var popupCancel = document.getElementById('popup-cancel');
var popupWrap = document.getElementById('popup-wrap');
function hidePopup() {
    popupQuit.classList.add('hidden');
    popupWrap.classList.add('hidden');
}
popupQuit.onclick = function () {hidePopup()};
popupCancel.onclick = function () {hidePopup()};

//nav popup
var popupCall = document.getElementById('popup-call');
var footerPopupCall = document.getElementById('footer-popup-call');
popupCall.onclick = function () {
    popupQuit.classList.remove('hidden');
    popupWrap.classList.remove('hidden');
};
footerPopupCall.onclick = function () {
    popupQuit.classList.remove('hidden');
    popupWrap.classList.remove('hidden');
};


//main menu burger
$(".main_mnu_button").click(function() {
    $("nav ul").toggleClass('open');
});

//nav changes color while scrolling
var nav = document.getElementById('nav');
function navChanger () {
    if (window.pageYOffset != 0 ) {
        nav.classList.add("scrolled");
    }
    else {
        nav.classList.remove("scrolled");
    }
}
document.addEventListener('DOMContentLoaded', function () {navChanger()});
window.onscroll = function () {navChanger()};


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
window.onscroll = function () {navCurrent(), navChanger(), parallaxScroll()};

//bottle parallax

var parallax = document.getElementById('parallax');
function parallaxScroll() {
    if ($(window).width() >= 992) {
        if(pageYOffset >= getElementTopHeight(parallax) &&
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




(function(d,f){"use strict";var h=function(d){if("object"!==typeof d.document)throw Error("Cookies.js requires a `window` with a `document` object");var b=function(a,e,c){return 1===arguments.length?b.get(a):b.set(a,e,c)};b._document=d.document;b._cacheKeyPrefix="cookey.";b._maxExpireDate=new Date("Fri, 31 Dec 9999 23:59:59 UTC");b.defaults={path:"/",secure:!1};b.get=function(a){b._cachedDocumentCookie!==b._document.cookie&&b._renewCache();a=b._cache[b._cacheKeyPrefix+a];return a===f?f:decodeURIComponent(a)};
    b.set=function(a,e,c){c=b._getExtendedOptions(c);c.expires=b._getExpiresDate(e===f?-1:c.expires);b._document.cookie=b._generateCookieString(a,e,c);return b};b.expire=function(a,e){return b.set(a,f,e)};b._getExtendedOptions=function(a){return{path:a&&a.path||b.defaults.path,domain:a&&a.domain||b.defaults.domain,expires:a&&a.expires||b.defaults.expires,secure:a&&a.secure!==f?a.secure:b.defaults.secure}};b._isValidDate=function(a){return"[object Date]"===Object.prototype.toString.call(a)&&!isNaN(a.getTime())};
    b._getExpiresDate=function(a,e){e=e||new Date;"number"===typeof a?a=Infinity===a?b._maxExpireDate:new Date(e.getTime()+1E3*a):"string"===typeof a&&(a=new Date(a));if(a&&!b._isValidDate(a))throw Error("`expires` parameter cannot be converted to a valid Date instance");return a};b._generateCookieString=function(a,b,c){a=a.replace(/[^#$&+\^`|]/g,encodeURIComponent);a=a.replace(/\(/g,"%28").replace(/\)/g,"%29");b=(b+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent);c=c||{};a=a+"="+b+(c.path?";path="+
        c.path:"");a+=c.domain?";domain="+c.domain:"";a+=c.expires?";expires="+c.expires.toUTCString():"";return a+=c.secure?";secure":""};b._getCacheFromString=function(a){var e={};a=a?a.split("; "):[];for(var c=0;c<a.length;c++){var d=b._getKeyValuePairFromCookieString(a[c]);e[b._cacheKeyPrefix+d.key]===f&&(e[b._cacheKeyPrefix+d.key]=d.value)}return e};b._getKeyValuePairFromCookieString=function(a){var b=a.indexOf("="),b=0>b?a.length:b,c=a.substr(0,b),d;try{d=decodeURIComponent(c)}catch(k){console&&"function"===
    typeof console.error&&console.error('Could not decode cookie with key "'+c+'"',k)}return{key:d,value:a.substr(b+1)}};b._renewCache=function(){b._cache=b._getCacheFromString(b._document.cookie);b._cachedDocumentCookie=b._document.cookie};b._areEnabled=function(){var a="1"===b.set("cookies.js",1).get("cookies.js");b.expire("cookies.js");return a};b.enabled=b._areEnabled();return b},g=d&&"object"===typeof d.document?h(d):h;"function"===typeof define&&define.amd?define(function(){return g}):"object"===
typeof exports?("object"===typeof module&&"object"===typeof module.exports&&(exports=module.exports=g),exports.Cookies=g):d.Cookies=g})("undefined"===typeof window?this:window);




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


