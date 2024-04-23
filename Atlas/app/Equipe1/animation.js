// Récupération des éléments boutons et initialisation des variables
var playButton = document.getElementById('playButton');
var stopButton = document.getElementById('stopButton');
var animationInterval;
var isPlaying = false;

// Écouteur d'événement pour le bouton de lecture
playButton.addEventListener('click', function() {
    if (!isPlaying) {
        startAnimation(); // Démarrage de l'animation si elle n'est pas déjà en cours
        isPlaying = true;
        playButton.disabled = true; // Désactivation du bouton de lecture pendant l'animation
        stopButton.disabled = false; // Activation du bouton d'arrêt pendant l'animation
    }
});

// Écouteur d'événement pour le bouton d'arrêt
stopButton.addEventListener('click', function() {
    if (isPlaying) {
        stopAnimation(); // Arrêt de l'animation si elle est en cours
        isPlaying = false;
        playButton.disabled = false; // Activation du bouton de lecture après l'arrêt
        stopButton.disabled = true; // Désactivation du bouton d'arrêt après l'arrêt
    }
});

// Fonction pour démarrer l'animation
function startAnimation() {
    var rangeInput = document.getElementById('myRange');
    var currentValue = parseInt(rangeInput.value);

    animationInterval = setInterval(function() {
        if (currentValue < 6) {
            currentValue++;
            rangeInput.value = currentValue;
            executeFunctionAtStep(currentValue); // Exécution d'une fonction à chaque étape de l'animation
        } else {
            stopAnimation(); // Arrêt de l'animation lorsque la valeur atteint 6
            isPlaying = false;
            playButton.disabled = false; // Activation du bouton de lecture après l'arrêt
            stopButton.disabled = true; // Désactivation du bouton d'arrêt après l'arrêt
        }
    }, 4000); // Intervalle de temps en millisecondes entre chaque étape de l'animation
}

// Fonction pour arrêter l'animation
function stopAnimation() {
    clearInterval(animationInterval);
}
