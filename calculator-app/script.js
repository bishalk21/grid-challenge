let screenText = document.getElementById("display");
let result = "";
let previousStr = "";

// innerText returns the visible text contained in a node
// textContent returns the full text.

const p1 = () => {
  result += 1 + " ";
  screenText.textContent = result;
};

const p2 = () => {
  result += 2 + " ";
  screenText.textContent = result;
};

const p3 = () => {
  result += 3 + " ";
  screenText.textContent = result;
};

const p4 = () => {
  result += 4 + " ";
  screenText.textContent = result;
};

const p5 = () => {
  result += 5 + " ";
  screenText.textContent = result;
};

const p6 = () => {
  result += 6 + " ";
  screenText.textContent = result;
};

const p7 = () => {
  previousStr = result;
  result += 7 + " ";
  screenText.textContent = result;
};

const p8 = () => {
  previousStr = result;
  result += 8 + " ";
  screenText.textContent = result;
};

const p9 = () => {
  result += 9 + " ";
  screenText.textContent = result;
};

const p0 = () => {
  result += 0 + " ";
  screenText.textContent = result;
};

const pDot = () => {
  result += "." + " ";
  screenText.textContent = result;
};

const pPlus = () => {
  result += "+" + " ";
  screenText.textContent = result;
};

const pMinus = () => {
  result += "-" + " ";
  screenText.textContent = result;
};

const pMultiply = () => {
  result += "*" + " ";
  screenText.textContent = result;
};

const pDivide = () => {
  result += "/" + " ";
  screenText.textContent = result;
};

const pAC = () => {
  result = "";
  screenText.textContent = "0";
};

const pDEL = () => {
  result = result.slice(0, -2);
  if (result == "") {
    result = "0 ";
  }
  screenText.textContent = result;
};

function pEqual() {
  result = result.replace(/ /g, "");
  try {
    result = eval(result);
    if (result === Infinity || result === -Infinity) {
      alert("Result is infinity!.....");
      result = "0";
    }
    result += " ";
    screenText.textContent = result;
  } catch (error) {
    alert("Incorrect input..... 🙃");
    result = "0";
    screenText.textContent = result;
  }
}
