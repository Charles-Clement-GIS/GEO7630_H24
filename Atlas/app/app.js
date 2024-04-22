

// création de la carte Mapbox GL
var map = new maplibregl.Map({
    container: 'map', // identifiant de l'élément HTML conteneur de la carte
    style: 'https://api.maptiler.com/maps/844ceac7-1626-4655-8d90-45433d56d02b/style.json?key=ldEZwRKSd58kyBXzxzqw', // URL du style de la carte
    center: [-73.67, 45.59], // position centrale de la carte
    zoom: 10, // niveau de zoom initial
    hash: true // activation du hash pour la gestion de l'historique de la carte
});


function loadTeam(teamName) {
    // Vider toutes les divs
    document.getElementById('Equipe1').innerHTML = '';
    document.getElementById('Equipe2').innerHTML = '';
    document.getElementById('Equipe3').innerHTML = '';
    document.getElementById('Equipe4').innerHTML = '';
    document.getElementById('Equipe5').innerHTML = '';
    document.getElementById('Equipe6').innerHTML = '';
    document.getElementById('Equipe7').innerHTML = '';
    // Charger le contenu de l'équipe sélectionnée
    fetch('./' + teamName + '/index.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(teamName).innerHTML = data;
            // Charger les fichiers .js depuis le répertoire spécifique
            const scripts = document.getElementById(teamName).querySelectorAll('script[src]');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                newScript.src = `./${teamName}/${script.getAttribute('src')}`;
                document.body.appendChild(newScript);
            });
           // Charger les fichiers .css depuis le répertoire spécifique
            const links = document.getElementById(teamName).querySelectorAll('link[rel="stylesheet"]');
            links.forEach(link => {
                const newLink = document.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.type = 'text/css';  // Ajoutez ce type pour éviter l'erreur de type MIME
                newLink.href = `./${teamName}/${link.getAttribute('href')}`;
                document.head.appendChild(newLink);
            });
        })
        .catch(error => {
            console.error('There was a problem with fetching the team content:', error);
        });
}



