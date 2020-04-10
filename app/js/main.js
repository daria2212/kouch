$(function () {

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $('.modal-overlay').addClass('overlay-show');
            $('.modal-recd').addClass('modal-show');
            $('.modal').removeClass('modal-show');
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

//  Script for modal

var connectLink = document.querySelector('.connect-button');
var popup = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var close = document.querySelector('.modal__close');

connectLink.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal-show');
    overlay.classList.add('overlay-show');
});

close.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
})

overlay.addEventListener('click', function () {
    popup.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        popup.classList.remove('modal-show');
        overlay.classList.remove('overlay-show');
    }
});

//  Script for modal-recd 

var modalRecd = document.querySelector('.modal-recd');
var recdClose = document.querySelector('.modal-recd__close');

recdClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    modalRecd.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
})

overlay.addEventListener('click', function () {
    modalRecd.classList.remove('modal-show');
    overlay.classList.remove('overlay-show');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        modalRecd.classList.remove('modal-show');
        overlay.classList.remove('overlay-show');
    }
});

new WOW().init();