// Function to save the input data to Local Storage
function saveInputData() {
  const data = {};

  // Loop through all input text fields with unique ID and save their values
  document.querySelectorAll('input[type="text"]').forEach((input) => {
    data[input.id] = input.value;
  });

  // Save the data as a JSON string //
  localStorage.setItem("workoutData", JSON.stringify(data));
}

// Function to load the input data from Local Storage
function loadInputData(week) {
  const savedData = localStorage.getItem("workoutData");
  if (savedData) {
    const data = JSON.parse(savedData);

    // Loop through the saved data and populate the input fields
    for (const inputId in data) {
      const input = document.getElementById(inputId);
      if (input) {
        input.value = data[inputId];
      }
    }
  }
}

// Attach an event listener to the save button
const saveButton = document.querySelector(".save-btn");
if (saveButton) {
  saveButton.addEventListener("click", saveInputData);
}

// Attach event listeners to input fields to save data on input
document.querySelectorAll('input[type="text"]').forEach((input) => {
  input.addEventListener("input", saveInputData);
});

// Load the input data when the page loads
loadInputData();
