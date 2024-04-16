map.addSource('annee2019', {
    type: 'vector',
    tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2019/{z}/{x}/{y}.pbf']
});

map.addLayer({
    "id": "annee2019",
    "type": "circle",
    "source": "annee2019",
    "source-layer": "HE391000.Point_2019",
    "layout": {
        "visibility": "none" // Initialiser la visibilité à "none" pour cacher la couche
    }
});

// Définir une variable pour suivre l'état des points
let pointsAffiches2019 = false;

// Fonction pour basculer l'état des points
function togglePoints2019() {
    if (pointsAffiches2019) {
        // Si les points sont actuellement affichés, les masquer
        map.setLayoutProperty('annee2019', 'visibility', 'none');
        pointsAffiches2019 = false;
    } else {
        // Sinon, afficher les points
        map.setLayoutProperty('annee2019', 'visibility', 'visible');
        pointsAffiches2019 = true;
    }
}

// Ajouter un écouteur d'événements au bouton
const bouton2019 = document.getElementById('point2019');
bouton2019.addEventListener('click', togglePoints2019);
