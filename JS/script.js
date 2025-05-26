function Content() {
  var name = document.getElementById("name").value;
  alert("Hello, " + name);
}

function ChangeColorButton(color) {
  document.getElementById("show-btn").style.background = color;
  document.getElementById("show-btn").style.color = "white";
}

function showDivData() {
  var data = document.getElementById("name").value;
  document.getElementById("show-data").innerHTML = data;
}

function showButton(status) {
  if (status == true) {
    document.getElementById("new-btn").style.display = "inline";
  } else {
    document.getElementById("new-btn").style.display = "none";
  }
}

// Calculator
function addValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

// Shapes
const shape = document.getElementById('shape');
const colorPicker = document.getElementById('colorPicker');
const shapeSelector = document.getElementById('select');

// Change Shape color
colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  // Triangle transparent
  if (!shape.classList.contains('triangle')) {
    shape.style.backgroundColor = selectedColor;
  } else {
    shape.style.borderBottom = `100px solid ${selectedColor}`;
  }
});

// Shape changer
shapeSelector.addEventListener('change', () => {
  shape.className = '';
  const selectedShape = shapeSelector.value;
  shape.classList.add(selectedShape);

  const selectedColor = colorPicker.value;

  if (selectedShape === 'triangle') {
    shape.style.backgroundColor = 'transparent';
    shape.style.borderBottom = `100px solid ${selectedColor}`;
    shape.style.width = '0';
    shape.style.height = '0';
    shape.style.borderLeft = '50px solid transparent';
    shape.style.borderRight = '50px solid transparent';
    shape.textContent = '';
  } else {
    shape.style.border = 'none';
    shape.style.borderLeft = 'none';
    shape.style.borderRight = 'none';
    shape.style.borderBottom = 'none';
    shape.style.width = '100px';
    shape.style.height = '100px';
    shape.style.backgroundColor = selectedColor;
    shape.textContent = '';
  }
});
