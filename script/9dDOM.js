function inputText() {
  const inputElement = document.querySelector('.js-name-input');
  document.querySelector('.js-name')
    .innerHTML = `Your name is: ${inputElement.value}`;
}