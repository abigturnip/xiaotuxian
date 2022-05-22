var paying_click = document.querySelector('.pay').querySelector('.right');
var paying = document.querySelector('.paying');
var close = document.querySelector('.paying').querySelector('.icon-x');
var z = document.querySelector('.z');
var pay = document.querySelector('.pay');
paying_click.addEventListener("click", function () {
    paying.style.bottom = '0';
    z.style.opacity = 1;
    pay.style.opacity = 0;
})
close.addEventListener("click", function () {
    paying.style.bottom = '-350px';
    z.style.opacity = 0;
    pay.style.opacity = 1;
})
