let chaleurPolygonsAffiches = false;

function togglePointsChaleur() {
    // Vérifier si la source de données 'chaleur-source' existe déjà
    if (!map.getSource('chaleur-source')) {
        map.addSource('chaleur-source', {
            type: 'vector',
            tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.ilots_chaleur/{z}/{x}/{y}.pbf']
        });

        map.addLayer({
            "id": "chaleur",
            "type": "fill",
            "source": "chaleur-source",
            "source-layer": "HE391000.ilots_chaleur",
            "layout": {"visibility": "none"},
            "paint": {
                "fill-color": {
                    "property": "temp_class",
                    "type": "interval",
                    "stops": [
                        [1, "rgba(242, 233, 1, 1)"],
                        [2, "rgba(245, 190, 17, 1)"],
                        [3, "rgba(249, 147, 33, 1)"],
                        [4, "rgba(252, 104, 48, 1)"],
                        [5, "rgba(255, 61, 64, 1)"]
                    ]
                    
                }, "fill-opacity": 0.3
            },
           
        });
    }

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
boutonChaleurPolygons.addEventListener('click', togglePointsChaleur);
