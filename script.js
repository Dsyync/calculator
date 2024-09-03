function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearScreen() {
  document.getElementById("display").value = "";
}

function calculateResult() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
