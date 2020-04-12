var connectLink = document.querySelectorAll('.rates-item__button').forEach(connectLink => {
    var popup = document.querySelector('.modal-rates');
    var overlay = document.querySelector('.modal-overlay');
    var close = document.querySelector('.modal-rates__close');

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
});
