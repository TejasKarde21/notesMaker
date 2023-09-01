const button = document.getElementById("btn");
const colorInput = document.getElementById("color-input");
const output = document.getElementById("output");

function get() {
  const textInput = document.getElementById("text-input");
  const textInputValue = textInput.value;
  const color = colorInput.value;

  let newDiv = document.createElement("div");
  newDiv.id = 'myNewElement';
  let newHeading = document.createElement("p");
  newHeading.id = "head";

  let icon = document.createElement("button");
  icon.textContent = 'X';
  icon.id = "cross";

  

  if (colorInput.value === "#000000") {
    newHeading.style.color = "#FFFFFF";
    newHeading.style.backgroundColor = colorInput.value;
    newDiv.style.backgroundColor = colorInput.value;
    icon.style.color = "#FFFFFF";
  } else {
    newHeading.style.backgroundColor = colorInput.value;
    newDiv.style.backgroundColor = colorInput.value;
  }

  newHeading.textContent = textInputValue;

  // Insert the newDiv before the last paragraph
  const lastParagraph = document.querySelector(".last");
  lastParagraph.parentNode.insertBefore(newDiv, lastParagraph);

  newDiv.appendChild(newHeading);
  textInput.value = "";
  newDiv.appendChild(icon);

  icon.addEventListener('click', function () {
    newDiv.remove();
  });
}