// Ajouter la source de données des collisions
map.addSource('Collision', {
    type: 'vector',
    tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.collisions/{z}/{x}/{y}.pbf']
});

// Ajouter la couche de données des collisions
map.addLayer({
    "id": "Collision",
    "type": "circle",
    "source": "Collision",
    "source-layer": "HE391000.collisions",
    "layout": {
        "visibility": "none" // Initialiser la visibilité à "none" pour cacher la couche
    }
});

// Définir une variable pour suivre l'état des points de collision
let collisionPointsAffiches = false;

// Fonction pour basculer l'état des points de collision
function toggleCollisionPoints() {
    if (collisionPointsAffiches) {
        // Si les points de collision sont actuellement affichés, les masquer
        map.setLayoutProperty('Collision', 'visibility', 'none');
        collisionPointsAffiches = false;
    } else {
        // Sinon, afficher les points de collision
        map.setLayoutProperty('Collision', 'visibility', 'visible');
        collisionPointsAffiches = true;
    }
}

// Ajouter un écouteur d'événements au bouton des collisions
const boutonCollision = document.getElementById('collisionBtn');
boutonCollision.addEventListener('click', toggleCollisionPoints);
