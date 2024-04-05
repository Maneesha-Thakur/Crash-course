function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
        document.getElementById("result").innerHTML = "Please enter valid weight and height.";
        return;
    }

    var bmi = weight / (height * height);

    var resultText = "BMI: " + bmi.toFixed(2) + "<br>";

    if (bmi <= 18.4) {
        resultText += "Result: Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultText += "Result: Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultText += "Result: Overweight";
    } else {
        resultText += "Result: Obese";
    }

    document.getElementById("result").innerHTML = resultText;
}