// Ajouter la source de données des collisions ******La couche ilot de chaleur est vide dans la BD
map.addSource('chaleur', {
    type: 'vector',
    tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.ilots_chaleur/{z}/{x}/{y}.pbf']
});

// Ajouter la couche de données des collisions
// Ajouter la couche de données des polygones de chaleur
map.addLayer({
    "id": "chaleur",
    "type": "fill",
    "source": "chaleur",
    "source-layer": "HE391000.ilots_chaleur",
    "layout": {
        "visibility": "none" // Initialiser la visibilité à "none" pour cacher la couche
    }
});

// Définir une variable pour suivre l'état des polygones de chaleur
let chaleurPolygonsAffiches = false;

// Fonction pour basculer l'état des polygones de chaleur
function toggleChaleurPolygons() {
    if (chaleurPolygonsAffiches) {
        // Si les polygones de chaleur sont actuellement affichés, les masquer
        map.setLayoutProperty('chaleur', 'visibility', 'none');
        chaleurPolygonsAffiches = false;
    } else {
        // Sinon, afficher les polygones de chaleur
        map.setLayoutProperty('chaleur', 'visibility', 'visible');
        chaleurPolygonsAffiches = true;
    }
}

// Ajouter un écouteur d'événements au bouton pour les polygones de chaleur
const boutonChaleurPolygons = document.getElementById('chaleurBtn');
boutonChaleurPolygons.addEventListener('click', toggleChaleurPolygons);
