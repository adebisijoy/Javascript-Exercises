function reuseToggleButton(selector) {
  const buttonElement = document.querySelector(selector);
  turnOffPreviousButton();

  if (!buttonElement.classList.contains('toggled-button')) {
     buttonElement.classList.add('toggled-button')
  } else {
    buttonElement.classList.remove('toggled-button');
  }
}

function turnOffPreviousButton()  {
  const previousButton = document.querySelector('.toggled-button');

  if (previousButton) {
    previousButton.classList.remove('toggled-button')
  };
}