
// Définir une variable pour suivre l'état des ppolygones
let airPolygonsAffiches = false;

function togglePointsAir() {
    // Vérifier si la source de données 'chaleur-source' existe déjà
    if (!map.getSource('air-source')) {
        map.addSource('air-source', {
            type: 'vector',
            tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.qualite_air/{z}/{x}/{y}.pbf']
        });

        map.addLayer({
            "id": "air",
            "type": "fill",
            "source": "air-source",
            "source-layer": "HE391000.qualite_air",
            "layout": {"visibility": "none"},
            "paint": {
                "fill-color": {
                    "property": "gridcode",
                    "type": "interval",
                    "stops": [
                        [25, "rgba(154, 203, 116, 1)"],
                        [29, "rgba(224, 162, 107, 1)"],
                        [45, "rgba(159, 52, 66, 1)"],
                        ]
                    
                    
                }, 
                "fill-opacity": 0.3,
                "fill-outline-color": "transparent"
            },
           
        });
    }

    if (airPolygonsAffiches) {
        // Si les polygones de chaleur sont actuellement affichés, les masquer
        map.setLayoutProperty('air', 'visibility', 'none');
        airPolygonsAffiches = false;
    } else {
        // Sinon, afficher les polygones de chaleur
        map.setLayoutProperty('air', 'visibility', 'visible');
        airPolygonsAffiches = true;
    }
}

// Ajouter un écouteur d'événements au bouton pour les polygones de chaleur

const boutonAirPolygons = document.getElementById('qualiteAirBtn');
boutonAirPolygons.addEventListener('click', togglePointsAir);

