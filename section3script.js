document.addEventListener("DOMContentLoaded", function () {
  const planetSizes = {
    mercury: 1, // Base size
    venus: 2.5,
    earth: 2.6,
    mars: 1.4,
    jupiter: 11.2,
    saturn: 9.4,
    uranus: 4.1,
    neptune: 3.9,
  };

  const planetImages = {
    mercury: "images/mercury-bg.jpg",
    venus: "images/venus-bg.jpg",
    earth: "images/earth-bg.jpg",
    mars: "images/mars-bg.jpg",
    jupiter: "images/jupiter-bg.jpg",
    saturn: "images/saturn-bg.jpg",
    uranus: "images/uranus-bg.jpg",
    neptune: "images/neptune-bg.jpg",
  };

  const mercurySize = 40; // Base size in pixels for Mercury
  const dropdown = document.getElementById("planetDropdown");
  const chosenPlanetDiv = document.getElementById("chosenPlanet");
  const sizeInfoDiv = document.getElementById("sizeInfo");

  dropdown.addEventListener("change", function () {
    const selectedPlanet = dropdown.value;
    const sizeMultiplier = planetSizes[selectedPlanet];
    const newSize = mercurySize * sizeMultiplier;

    chosenPlanetDiv.style.width = `${newSize}px`;
    chosenPlanetDiv.style.height = `${newSize}px`;
    chosenPlanetDiv.style.backgroundImage = `url('${planetImages[selectedPlanet]}')`;

    sizeInfoDiv.textContent = `The planet ${capitalizeFirstLetter(
      selectedPlanet
    )} is ${sizeMultiplier} times bigger than Mercury.`;
  });

  // Initialize with Earth as default
  chosenPlanetDiv.style.width = `${mercurySize * planetSizes["earth"]}px`;
  chosenPlanetDiv.style.height = `${mercurySize * planetSizes["earth"]}px`;
  chosenPlanetDiv.style.backgroundImage = `url('${planetImages["earth"]}')`;
  dropdown.value = "earth";
  sizeInfoDiv.textContent = `The planet Earth is 2.6 times bigger than Mercury.`;

  // Function to capitalize the first letter of a string (for planet names)
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});
