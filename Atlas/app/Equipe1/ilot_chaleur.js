// Ajouter la source de données des collisions ******La couche ilot de chaleur est vide dans la BD
map.addSource('chaleur', {
    type: 'geojson',
    data: 'https://donnees.montreal.ca/dataset/dbdfbdba-0725-470d-a23e-da69dbedc4e6/resource/46832532-2a47-44df-adac-dbf8f614fc62/download/ilots-de-chaleur-images-satellite-2023.geojson'
});

// Ajouter la couche de données des polygones de chaleur
map.addLayer({
    "id": "chaleur",
    "type": "fill",
    "source": "chaleur",
    "paint": {
        "fill-color": "#ff0000", // Couleur de remplissage des polygones
        "fill-opacity": 0.5 // Opacité du remplissage
    },
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

