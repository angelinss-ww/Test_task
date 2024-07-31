document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn_click').addEventListener('click', function() {
        var image = document.getElementById('logo');
        var googleSrc = window.location.origin + '/images/google.png';
        var odditySrc = window.location.origin + '/images/oddity.png';

        if (image.src === googleSrc) {
            image.src = odditySrc;
        } else {
            image.src = googleSrc;
        }
    });
});
