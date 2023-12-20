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

  const mercurySize = 50; // Base size in pixels for Mercury
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

    if (selectedPlanet !== "mercury") {
      sizeInfoDiv.textContent = `The planet ${capitalizeFirstLetter(
        selectedPlanet
      )} is ${sizeMultiplier} times bigger than Mercury.`;
    } else {
      sizeInfoDiv.textContent = ""; // Clear text if Mercury is selected
    }
  });

  // Initialize with Mercury as default
  chosenPlanetDiv.style.width = `${mercurySize * planetSizes["mercury"]}px`;
  chosenPlanetDiv.style.height = `${mercurySize * planetSizes["mercury"]}px`;
  chosenPlanetDiv.style.backgroundImage = `url('${planetImages["mercury"]}')`;
  sizeInfoDiv.textContent = "";

  // Function to capitalize the first letter of a string (for planet names)
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});
