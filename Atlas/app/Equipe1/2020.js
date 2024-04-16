map.addSource('annee2020', {
    type: 'vector',
    tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2020/{z}/{x}/{y}.pbf']
});

map.addLayer({
    "id": "annee2020",
    "type": "circle",
    "source": "annee2020",
    "source-layer": "HE391000.Point_2020",
    "layout": {
        "visibility": "none" // Initialiser la visibilité à "none" pour cacher la couche
    }
});

// Définir une variable pour suivre l'état des points
let pointsAffiches2020 = false;

// Fonction pour basculer l'état des points
function togglePoints2020() {
    if (pointsAffiches2020) {
        // Si les points sont actuellement affichés, les masquer
        map.setLayoutProperty('annee2020', 'visibility', 'none');
        pointsAffiches2020 = false;
    } else {
        // Sinon, afficher les points
        map.setLayoutProperty('annee2020', 'visibility', 'visible');
        pointsAffiches2020 = true;
    }
}

// Ajouter un écouteur d'événements au bouton
const bouton2020 = document.getElementById('point2020');
bouton2020.addEventListener('click', togglePoints2020);
