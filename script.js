let currentInput = '';
    let operator = '';
    let result = 0;

    function appendValue(value) {
      currentInput += value;
      updateDisplay();
    }

    function setOperator(op) {
      operator = op;
      result = parseFloat(currentInput);
      currentInput = '';
      updateDisplay();
    }

    function calculateResult() {
      if (operator && currentInput !== '') {
        switch (operator) {
          case '+':
            result += parseFloat(currentInput);
            break;
          case '-':
            result -= parseFloat(currentInput);
            break;
          case '*':
            result *= parseFloat(currentInput);
            break;
          case '/':
            result /= parseFloat(currentInput);
            break;
        }
        currentInput = result.toString();
        operator = '';
        updateDisplay();
      }
    }

    function clearDisplay() {
      currentInput = '';
      operator = '';
      result = 0;
      updateDisplay();
    }

    function updateDisplay() {
      document.getElementById('display').value = currentInput || result;
    }