// ajout du REV 




map.addSource('reseau_cyclable_source', {
    type: 'vector',
    tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.rezo_cyclable_MTL2/{z}/{x}/{y}.pbf']
});

map.addLayer({
    "id": "reseau_cyclable",
    "type": "line",
    "source": "reseau_cyclable_source",
    "source-layer": "HE391000.rezo_cyclable_MTL2",
    "paint": {
        "line-color": "#5C5C5C", // Couleur de la ligne
        "line-opacity": 1 // Opacité de la ligne
    }
});

map.addSource('REV-source', {
    type: 'vector',
    tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.reseau-express-velo/{z}/{x}/{y}.pbf']
});

map.addLayer({
    "id": "REV",
    "type": "line",
    "source": "REV-source",
    "source-layer": "HE391000.reseau-express-velo",
    "paint": {
        "line-color": "#FFFFFF", // Couleur de la ligne
        "line-opacity": 1 // Opacité de la ligne
    }
});





// A.1. Création du contrôle d'échelle 
var scale = new maplibregl.ScaleControl({

    unit: 'metric' // utilisation de l'unité métrique 

});



map.addControl(scale); // ajout du contrôle en bas à gauche de la carte 



// A.2. Création du contrôle de navigation 

var nav = new maplibregl.NavigationControl({

    showCompass: true, // affichage de la boussole 

    showZoom: true, // affichage des boutons de zoom 

    visualizePitch: true // affichage de l'angle d'inclinaison 

});

map.addControl(nav, 'bottom-right'); // ajout du contrôle en haut à droite de la carte 



// A.3. Création du contrôle de géolocalisation 

var geolocateControl = new maplibregl.GeolocateControl({

    positionOptions: {

        enableHighAccuracy: true // activation de la géolocalisation précise 

    },

    trackUserLocation: true // suivi automatique de la position de l'utilisateur 

})



map.addControl(geolocateControl, 'bottom-right'); // ajout du contrôle en bas à droite de la carte 




// A.4. Zoom et boussole 

var view = new MapView({

    container: "viewDiv",

    map: map

});



var zoom = new Zoom({

    view: view

});



var compass = new Compass({

    view: view

});



view.ui.add(compass, "top-left");