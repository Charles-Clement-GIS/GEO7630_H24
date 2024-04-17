
    map.addSource('annee2014', {
        type: 'vector',
        tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2014/{z}/{x}/{y}.pbf']
    });

    map.addLayer({
        "id": "annee2014",
        "type": "circle",
        "source": "annee2014",
        "source-layer": "HE391000.Point_2014",
        "visibility": "none",
        "filter": ["all"],
        "paint": {
            "circle-color": {
                "property": "score",
                "type": "interval",
                "stops": [
                    [{"value": 41284, "zoom": 10}, "rgba(242, 233, 1, 1)"],
                    [{"value": 159435, "zoom": 10}, "rgba(245, 190, 17, 1)"],
                    [{"value": 470764, "zoom": 10}, "rgba(249, 147, 33, 1)"],
                    [{"value": 879637, "zoom": 10}, "rgba(252, 104, 48, 1)"],
                    [{"value": 2422146, "zoom": 10}, "rgba(255, 61, 64, 1)"]
                ],
                "default": "#F2e901"
            },
            "circle-opacity": 1
        }
    });

    console.log("Step 1 executed");



// Définir une variable pour suivre l'état des points
let pointsAffiches = false;

// Fonction pour basculer l'état des points
function togglePoints() {
    if (pointsAffiches) {
        // Si les points sont actuellement affichés, les masquer
        map.setLayoutProperty('annee2014', 'visibility', 'none');
        pointsAffiches = false;
    } else {
        // Sinon, afficher les points
        map.setLayoutProperty('annee2014', 'visibility', 'visible');
        pointsAffiches = true;
    }
}

// Ajouter un écouteur d'événements au bouton
const bouton2014 = document.getElementById('point2014');
bouton2014.addEventListener('click', togglePoints);