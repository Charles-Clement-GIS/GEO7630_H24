map.addSource('annee2021', {
    type: 'vector',
    tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2021/{z}/{x}/{y}.pbf']
});

map.addLayer({
    "id": "annee2021",
    "type": "circle",
    "source": "annee2021",
    "source-layer": "HE391000.Point_2021",
    "layout": {
        "visibility": "none" // Initialiser la visibilité à "none" pour cacher la couche
    }
});

// Définir une variable pour suivre l'état des points
let pointsAffiches2021 = false;

// Fonction pour basculer l'état des points
function togglePoints2021() {
    if (pointsAffiches2021) {
        // Si les points sont actuellement affichés, les masquer
        map.setLayoutProperty('annee2021', 'visibility', 'none');
        pointsAffiches2021 = false;
    } else {
        // Sinon, afficher les points
        map.setLayoutProperty('annee2021', 'visibility', 'visible');
        pointsAffiches2021 = true;
    }
}

// Ajouter un écouteur d'événements au bouton
const bouton2021 = document.getElementById('point2021');
bouton2021.addEventListener('click', togglePoints2021);
