function append(value) {
  const display = document.getElementById('display');
  display.value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function deleteLast() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  let expression = display.value;
  expression = expression.replace(/sin\(/g, 'Math.sin(');
  expression = expression.replace(/cos\(/g, 'Math.cos(');
  expression = expression.replace(/tan\(/g, 'Math.tan(');
  expression = expression.replace(/log\(/g, 'Math.log10(');
  expression = expression.replace(/ln\(/g, 'Math.log(');
  expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
  expression = expression.replace(/\^/g, '**');
  try {
    display.value = Function('return ' + expression)();
  } catch (e) {
    display.value = 'Error';
  }
}

