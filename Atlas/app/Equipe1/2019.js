// Définir une variable pour suivre l'état des points
let pointsAffiches2019 = false;

// Fonction pour basculer l'état des points
function togglePoints2019() {
    if (!map.getSource('annee2019-source')) {
        // Charger la source uniquement si elle n'est pas déjà chargée
        map.addSource('annee2019-source', {
            type: 'vector',
            tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2019/{z}/{x}/{y}.pbf']
        });
        
        // Ajouter la couche une fois la source chargée
        map.addLayer({
            "id": "annee2019",
            "type": "circle",
            "source": "annee2019-source",
            "source-layer": "HE391000.Point_2019",
            "visibility": "none",
            "filter": ["all"],
            "paint": {
                "circle-color": {
                    "property": "score",
                    "type": "interval",
                    "stops": [
                        [{"value": 4942, "zoom": 10}, "rgba(242, 233, 1, 1)"],
                        [{"value": 14329, "zoom": 10}, "rgba(245, 190, 17, 1)"],
                        [{"value": 25664, "zoom": 10}, "rgba(249, 147, 33, 1)"],
                        [{"value": 45003, "zoom": 10}, "rgba(252, 104, 48, 1)"],
                        [{"value": 1422146, "zoom": 10}, "rgba(255, 61, 64, 1)"]
                    ],
                    "default": "#F2e901"
                },
                "circle-opacity": 1
            }
        });
    }
    
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

map.on('click', 'annee2019', function (e) {
    var coordinates = turf.centroid(e.features[0]).geometry.coordinates;// Calcul des coordonnées du centre de la géométrie cliquée (indice utilisez turf.centroid)
  
    // Création du contenu du popup
    var popupContent = '<h3>' + e.features[0].properties.score + ' vélos comptabilisés en 2019' + '</h3>'; // Vous pouvez personnaliser le contenu du popup en fonction de vos besoins
  
    // Ajout du popup à la carte Maplibre
    new maplibregl.Popup()
      .setLngLat(coordinates)
      .setHTML(popupContent)
      .addTo(map);
  });