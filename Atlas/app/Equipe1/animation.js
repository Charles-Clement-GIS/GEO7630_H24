var playButton = document.getElementById('playButton');
var stopButton = document.getElementById('stopButton');
var animationInterval;
var isPlaying = false;

playButton.addEventListener('click', function() {
    if (!isPlaying) {
        startAnimation();
        isPlaying = true;
        playButton.disabled = true;
        stopButton.disabled = false;
    }
});

stopButton.addEventListener('click', function() {
    if (isPlaying) {
        stopAnimation();
        isPlaying = false;
        playButton.disabled = false;
        stopButton.disabled = true;
    }
});

function startAnimation() {
    var rangeInput = document.getElementById('myRange');
    var currentValue = parseInt(rangeInput.value);

    animationInterval = setInterval(function() {
        if (currentValue < 6) {
            currentValue++;
            rangeInput.value = currentValue;
            executeFunctionAtStep(currentValue);
        } else {
            stopAnimation();
            isPlaying = false;
            playButton.disabled = false;
            stopButton.disabled = true;
        }
    }, 10000); // Intervalle de temps en millisecondes entre chaque étape de l'animation
}

function stopAnimation() {
    clearInterval(animationInterval);
}
