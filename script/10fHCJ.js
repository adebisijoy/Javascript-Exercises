function reuseToggleButton(selector) {
  const buttonElement = document.querySelector(selector);

  if (!buttonElement.classList.contains('toggled-button')) {
      buttonElement.classList.add('toggled-button');
  } else {
     buttonElement.classList.remove('toggled-button');
  }
}