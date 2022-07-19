let bulbElement = document.getElementById("bulb");

let modalElement = document.getElementById("modal");

function turnOnLight() {
  bulbElement.classList.add("on");
}

function turnOffLight() {
  bulbElement.classList.remove("on");
  hideModal();
}

function visibleModal() {
  if (bulbElement.classList.contains("on")) {
    modalElement.classList.add("visible");
  }
}

function hideModal() {
  modalElement.classList.remove("visible");
}
