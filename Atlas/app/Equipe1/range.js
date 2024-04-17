// Récupération du range slider
var slider = document.getElementById("myRange");

// Fonction à exécuter à chaque étape
function executeFunctionAtStep() {
  var stepValue = parseInt(this.value);
  switch(stepValue) {
    case 1:
      removeAllLayersAndSources();
      point2014();
      console.log("Step 1");
      break;
    case 2:
      removeAllLayersAndSources();
      point2019();
      console.log("Step 2");
      break;
    case 3:
      removeAllLayersAndSources();
      point2020();
      console.log("Step 3");
      break;
    case 4:
      removeAllLayersAndSources();
      point2021();
      console.log("Step 4");
      break;
    case 5:
      removeAllLayersAndSources();
      point2022();
      console.log("Step 5");
      break;
    case 6:
      removeAllLayersAndSources();
      point2023();
      console.log("Step 6");
      break;
    default:
      console.log("Invalid step");
  }
}

slider.addEventListener("input", executeFunctionAtStep);
