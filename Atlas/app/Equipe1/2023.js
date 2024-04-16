map.addSource('annee2023', {
    type: 'vector',
    tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2023/{z}/{x}/{y}.pbf']
});

map.addLayer({
    "id": "annee2023",
    "type": "circle",
    "source": "annee2023",
    "source-layer": "HE391000.Point_2023",
    "layout": {
        "visibility": "none" // Initialiser la visibilité à "none" pour cacher la couche
    }
});

// Définir une variable pour suivre l'état des points
let pointsAffiches2023 = false;

// Fonction pour basculer l'état des points
function togglePoints2023() {
    if (pointsAffiches2023) {
        // Si les points sont actuellement affichés, les masquer
        map.setLayoutProperty('annee2023', 'visibility', 'none');
        pointsAffiches2023 = false;
    } else {
        // Sinon, afficher les points
        map.setLayoutProperty('annee2023', 'visibility', 'visible');
        pointsAffiches2023 = true;
    }
}

// Ajouter un écouteur d'événements au bouton
const bouton2023 = document.getElementById('point2023');
bouton2023.addEventListener('click', togglePoints2023);
