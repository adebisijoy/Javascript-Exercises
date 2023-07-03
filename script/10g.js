function toggleButton(selector) {
  const buttonElement = document.querySelector(selector);
  turnOffPreviousButton();

  if (!buttonElement.classList.contains("is-toggled")) {
    buttonElement.classList.add("is-toggled");
  } else {
    buttonElement.classList.remove("is-toggled");
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}