document.addEventListener('DOMContentLoaded', function () {
    var animatedBox = document.getElementById('animatedBox');
    var box1 = document.getElementById('box1');
    var box3 = document.getElementById('box3');
    box1.style.opacity = '1';
    box3.style.opacity = '1';

    window.addEventListener('scroll', function () {
        var rect = animatedBox.getBoundingClientRect();
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
            animatedBox.style.animation = 'fadeIn 1s ease-out';
            animatedBox.style.opacity = '1';
        } else {
            animatedBox.style.animation = 'none';
            animatedBox.style.opacity = '0';
        }
    });
});

