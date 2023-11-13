const btnEl = document.querySelectorAll(".buttons__btn");

btnEl.forEach((button) => {
  button.addEventListener("click", () => {
    makeActive(button);
  });
});

function makeActive(currentButton) {
  btnEl.forEach((button) => {
    if (button !== currentButton) {
      button.classList.remove("active_btn");
    }
    currentButton.classList.add("active_btn");
  });
}
