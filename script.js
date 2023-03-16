//assign the calc screen as UI
let result = document.getElementById("result");

//add values to display
function addToResult(value) {
  result.value += value;
}


//clear the display
function clearResult() {
  result.value = "";
}

//backspace function
function backspace() {
  let currentValue = result.value;
  let newValue = currentValue.slice(0, -1);
  result.value = newValue;
}

//calculations
function calculate(operation) {
  let currentValue = result.value;
  let allTheValues = currentValue.split(operation);
  let firstValue = parseFloat(allTheValues[0]);
  let secondValue = parseFloat(allTheValues[1]);

  let calculationResult;
  if (operation === "+") {
    calculationResult = firstValue + secondValue;
  } else if (operation === "-") {
    calculationResult = firstValue - secondValue;
  } else if (operation === "*") {
    calculationResult = firstValue * secondValue;
  } else if (operation === "/") {
    calculationResult = firstValue / secondValue;
  } else if (operation === "%") {
    calculationResult = firstValue / 100;
  }

  let roundedResult = Math.round(calculationResult * 100) / 100;
  result.value = roundedResult.toFixed(2);
}

//function to detect keys
document.addEventListener("keydown", function (event) {
  let key = event.key;
  if (key >= 0 && key <= 9) {
    //key is number
    addToResult(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    //key is operatoro 
    addToResult(key);
  } else if (key === ".") {
    //demical point
    if (result.value === "") {
      addToResult("0.");
    } else if (result.value.slice(-1) !== ".") {
      addToResult(".");
    }
  } else if (key === "Enter") {
    //enter
    let operator = result.value.match(/[+\-*/]/g);
    if (operator) {
      calculate(operator[0]);
    }
  } else if (key === "Backspace") {
    //back
    backspace();
  } else if (key === "Escape") {
    //clear
    clearResult();
  }
});
