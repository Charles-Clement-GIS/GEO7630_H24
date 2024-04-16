map.addSource('annee2014', {
    type: 'vector',
    tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2014/{z}/{x}/{y}.pbf']
});
map.addLayer({
    "id": "annee2014",
    "type": "circle",
    "source": "annee2014",
    "source-layer": "HE391000.Point_2014",
    "layout": {
        "visibility": "none" // Initialiser la visibilité à "none" pour cacher la couche
    }
});

// Définir une variable pour suivre l'état des points
let pointsAffiches = false;

// Fonction pour basculer l'état des points
function togglePoints() {
    if (pointsAffiches) {
        // Si les points sont actuellement affichés, les masquer
        map.setLayoutProperty('annee2014', 'visibility', 'none');
        pointsAffiches = false;
    } else {
        // Sinon, afficher les points
        map.setLayoutProperty('annee2014', 'visibility', 'visible');
        pointsAffiches = true;
    }
}

// Ajouter un écouteur d'événements au bouton
const bouton2014 = document.getElementById('point2014');
bouton2014.addEventListener('click', togglePoints);