// Getting the HTML elements from index.html
const inputNum = document.querySelector("#input-num");
const circleContainer = document.querySelector("#circle-container");

// Function to make the circles.
const makeCircles = () => {
  // Checking that the user entered number isn't under 1 or over 1000
  if (inputNum.value < 1 || inputNum.value > 1000) {
    // DON'T MAKE CIRCLES!
    window.alert("Vennligst skriv inn et tall mellom 1 og 1000");
  } else {
    const circles = document.querySelectorAll(".circle");
    for (let circle of circles) {
      circle.remove();
    }
    // MAKE CIRCLES!
    for (let i = 0; i < inputNum.value; i++) {
      const circle = document.createElement("div");
      circle.classList.add("circle");
      circle.textContent = i + 1;
      circle.style.backgroundColor = `#${Math.floor(
        Math.random() * 16777215
      ).toString(16)}`;
      circleContainer.append(circle);
    }
  }
};
