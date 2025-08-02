const number = document.getElementById("number");
const ratingButtons = document.querySelectorAll(".rating-btn");
const submitBtn = document.getElementById("submit");
const ratings = document.querySelector(".ratings");
const message = document.querySelector(".message");

let selectedRating = null;

// Handle rating selection
ratingButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Update the displayed text
    selectedRating = button.value;
    number.innerHTML = `You selected ${selectedRating} out of 5`;

    // Optional: Add a class to the selected button for styling
    ratingButtons.forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// Handle form submission
submitBtn.addEventListener("click", () => {
  // Only proceed if a rating has been selected
  if (selectedRating) {
    ratings.style.display = 'none';
    message.style.display = 'block';
  } else {
    // Optional: Provide feedback if no rating is selected
    alert("Please select a rating before submitting.");
  }
});
