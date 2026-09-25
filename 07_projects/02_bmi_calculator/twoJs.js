const form = document.querySelector('form');
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const results = document.querySelector('#results');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const heightValue = heightInput.value.trim();
  const weightValue = weightInput.value.trim();
  const height = parseFloat(heightValue);
  const weight = parseFloat(weightValue);

  if (heightValue === '' || Number.isNaN(height) || height <= 0) {
    results.innerHTML = 'Please give a valid height.';
    return;
  }

  if (weightValue === '' || Number.isNaN(weight) || weight <= 0) {
    results.innerHTML = 'Please give a valid weight.';
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let bmiCategory = '';

  if (Number(bmi) < 18.6) {
    bmiCategory = 'Under Weight';
  } else if (Number(bmi) >= 18.6 && Number(bmi) <= 24.9) {
    bmiCategory = 'Normal Range';
  } else {
    bmiCategory = 'Over Weight';
  }

  results.innerHTML = `
    <span>Your BMI is ${bmi}</span><br>
    <span>You are in the ${bmiCategory} category.</span>
  `;
});