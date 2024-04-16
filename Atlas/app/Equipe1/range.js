let slider = document.getElementById("slider");
let output = document.getElementById("output");

slider.addEventListener("change", function() {
  output.textContent = this.value;

  // Vérification de la position du slider
  switch (parseInt(this.value)) {
    case 0:
      // Ajout de la source et de la couche pour l'année 2014
      map.addSource('annee2014', {
          type: 'vector',
          tiles: ['https://friendly-journey-jj9rx6ggqp7fpw4w-8801.app.github.dev/HE391000.Point_2014/{z}/{x}/{y}.pbf']
      });
      map.addLayer({
          "id": "annee2014",
          "type": "circle",
          "source": "annee2014",
          "source-layer": "HE391000.Point_2014",
          "layout": {
              "visibility": "visible" 
          }
      });
      break;
    case 1:
      // Ajoutez ici le code pour l'événement lorsque la position est égale à 1
      console.log("Événement 2 : La position est égale à 1.");
      break;
    case 2:
      // Ajoutez ici le code pour l'événement lorsque la position est égale à 2
      console.log("Événement 3 : La position est égale à 2.");
      break;
    case 3:
      // Ajoutez ici le code pour l'événement lorsque la position est égale à 3
      console.log("Événement 4 : La position est égale à 3.");
      break;
    case 4:
      // Ajoutez ici le code pour l'événement lorsque la position est égale à 4
      console.log("Événement 5 : La position est égale à 4.");
      break;
    case 5:
      // Ajoutez ici le code pour l'événement lorsque la position est égale à 5
      console.log("Événement 6 : La position est égale à 5.");
      break;
    default:
      // Ajoutez ici le code pour les autres cas, si nécessaire
      break;
  }
});
