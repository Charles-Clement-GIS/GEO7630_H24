// Récupération du range slider
var slider = document.getElementById("myRange");

// Fonction à exécuter à chaque changement de valeur
slider.oninput = function() {
  var stepValue = parseInt(this.value);
  // Exécution de la fonction avec la valeur de l'étape
  executeFunctionAtStep(stepValue);
}

// Fonction à exécuter à chaque étape
function executeFunctionAtStep(step) {
  switch(step) {
    case 1:
      console.log("Step 1");
      // Fonction à exécuter pour l'étape 1
      break;
    case 2:
      console.log("Step 2");
      // Fonction à exécuter pour l'étape 2
      break;
    case 3:
      console.log("Step 3");
      // Fonction à exécuter pour l'étape 3
      break;
    case 4:
      console.log("Step 4");
      // Fonction à exécuter pour l'étape 4
      break;
    case 5:
      console.log("Step 5");
      // Fonction à exécuter pour l'étape 5
      break;
    case 6:
      console.log("Step 6");
      // Fonction à exécuter pour l'étape 6
      break;
    default:
      console.log("Invalid step");
  }
}