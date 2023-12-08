//Define DOM elements
//#hero__animation WRONG WAY

const toggleButton = document.querySelector("#toggle-button");
const root = document.querySelector(":root");
const storageaKey = "color-mode";
const defaultMode = "light-mode";

// Load the user's preffered color mode from local storage.
function loadColorMode() {
   const colorMode = localStorage.getItem(storageaKey);
   root.classList.add(colorMode || defaultMode);
   updateToggleButton();
  }

  loadColorMode();

  // Toggle the color mode
  toggleButton.addEventListener("click", () => {
    saveColorMode();
  });

  // Save the users's preffered color mode to local storage
  function saveColorMode() {
    // Check if the root element has a class of "dark-mode". If yes, then the current mode is switched to light, and vice versa.
    const currentMode = root.classList.contains("dark-mode")
    ? "light-mode"
    : "dark-mode";
    root.classList.remove("light-mode", "dark-mode");
    root.classList.add(currentMode);
    // localStorage.setItem(storageKey, currentMode);
    updateToggleButton();
}

function updateToggleButton() {
    if (root.classList.contains("dark-mode")) {
      toggleButton.style.backgroundmage = "var(--moon)";
    } else {
      toggleButton.style.backgroundimage = "var(--sun)";
    }
  }