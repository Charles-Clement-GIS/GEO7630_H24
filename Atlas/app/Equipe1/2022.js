map.addSource('annee2022', {
    type: 'vector',
    tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2022/{z}/{x}/{y}.pbf']
});

map.addLayer({
    "id": "annee2022",
    "type": "circle",
    "source": "annee2022",
    "source-layer": "HE391000.Point_2022",
    "layout": {
        "visibility": "none" // Initialiser la visibilité à "none" pour cacher la couche
    }
});

// Définir une variable pour suivre l'état des points
let pointsAffiches2022 = false;

// Fonction pour basculer l'état des points
function togglePoints2022() {
    if (pointsAffiches2022) {
        // Si les points sont actuellement affichés, les masquer
        map.setLayoutProperty('annee2022', 'visibility', 'none');
        pointsAffiches2022 = false;
    } else {
        // Sinon, afficher les points
        map.setLayoutProperty('annee2022', 'visibility', 'visible');
        pointsAffiches2022 = true;
    }
}

// Ajouter un écouteur d'événements au bouton
const bouton2022 = document.getElementById('point2022');
bouton2022.addEventListener('click', togglePoints2022);
