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
                        [25, "rgba(242, 233, 1, 1)"],
                        [29, "rgba(249, 147, 33, 1)"],
                        [45, "rgba(255, 61, 64, 1)"],
                        ]
                    
                    
                }, "fill-opacity": 0.3
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

