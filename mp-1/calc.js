let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");
let output = document.getElementById("output");

function showResult(result) {
  output.innerHTML = String(result);

  if (result < 0) {
    output.classList.add("neg");
  } else {
    output.classList.remove("neg");
  }
}

function getA() {
  return Number(firstNumber.value);
}
function getB() {
  return Number(secondNumber.value);
}

function addition() {
  let a = getA();
  let b = getB();
  showResult(a + b);
}

function subtraction() {
  let a = getA();
  let b = getB();
  showResult(a - b);
}

function multiplication() {
  let a = getA();
  let b = getB();
  showResult(a * b);
}

function division() {
  let a = getA();
  let b = getB();
  showResult(a / b);
}

function power() {
  let base = getA();
  let exp = getB();

  exp = parseInt(exp);

  let result = 1;

  if (exp === 0) {
    result = 1;
    showResult(result);
    return;
  }

  if (exp > 0) {
    for (let i = 0; i < exp; i = i + 1) {
      result = result * base;
    }
    showResult(result);
    return;
  }

  let absExp = -exp;
  for (let i = 0; i < absExp; i = i + 1) {
    result = result * base;
  }
  result = 1 / result;
  showResult(result);
}

function clearAll() {
  firstNumber.value = "";
  secondNumber.value = "";
  output.innerHTML = "";
  output.classList.remove("neg");
}
