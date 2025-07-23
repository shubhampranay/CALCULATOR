const display = document.getElementById('display');
function appendValue(value) {
  const lastChar = display.value.slice(-1);
  const operators = ['+', '-', '*', '/', '%', '.'];
  if (operators.includes(value) && operators.includes(lastChar)) {
    return;
  }
  display.value += value;
}
function clearDisplay() {
  display.value = '';
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    let expression = display.value.replace(/×/g, '*').replace(/÷/g, '/');
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '%', '.'].includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});