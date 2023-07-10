const displayElm = document.querySelector(".display");

const btns = document.querySelectorAll(".btns > div");
// btns is nodelist (collection of nodes, not an array)
// use Array.from() to convert into array
const btnsArg = Array.from(btns); // ===> Array

let displayStr = "";
let operators = ["+", "-", "/", "*"];
let lastOperator = "";

const display = (str) => {
  displayElm.innerText = str || "0.00";
};

btnsArg.map((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    displayElm.innerText = value;

    if (value === "AC") {
      displayStr = "";
      display();
      return;
    }

    if (value === "C") {
      displayStr = displayStr.slice(0, -1);
      display(displayStr);
      return;
    }

    if (operators.includes(value)) {
      if (displayStr.length === 0) {
        // Do nothing if displayStr is empty
        return;
      }
      lastOperator = value;
      const lastChar = displayStr[displayStr.length - 1];

      if (operators.includes(lastChar)) {
        displayStr = displayStr.slice(0, -1);
        displayStr += value;
        display(displayStr);
        return;
      }
    }

    if (value === ".") {
      if (lastOperator) {
        const operatorIndex = displayStr.indexOf(lastOperator);
        const charAfterLastOperator = displayStr.slice(operatorIndex + 1);

        if (charAfterLastOperator.includes(".")) {
          return;
        }
        if (!lastOperator && displayStr.includes(".")) {
          return;
        }
      }
    }

    if (value === "=") {
      try {
        let result = eval(displayStr);
        if (!isFinite(result)) {
          result = "Result is infinity!.....";
        } else if (isNaN(result)) {
          result = "Incorrect input..... 🙃";
        }
        displayStr = result.toString();
        display(displayStr);
        return;
      } catch (error) {
        result = "Incorrect input..... 🙃";
        display(result);
      }
    }

    displayStr += value;
    display(displayStr);
  });
});
