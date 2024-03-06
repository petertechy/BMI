function calculateBMI() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultElement = document.getElementById('result');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultElement.innerText = 'Please enter valid height and weight.';
      return;
    }

    const bmi = calculateBMIValue(height, weight);
    const bmiCategory = getBMICategory(bmi);

    resultElement.innerText = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory}).`;
  }

  function calculateBMIValue(height, weight) {
    // BMI formula: weight (kg) / (height (m) * height (m))
    return weight / ((height / 100) * (height / 100));
  }

  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  }

  document.getElementById("submitBtn").addEventListener("click", function () {
    // Get input values
    const name = document.getElementById("nameInput").value;
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("messageInput").value;


    // Log the values (replace with your email sending logic on the server)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear form fields
    document.getElementById("nameInput").value = "";
    document.getElementById("emailInput").value = "";
    document.getElementById("messageInput").value = "";
});
