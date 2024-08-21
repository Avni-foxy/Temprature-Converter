document.getElementById('convertButton').addEventListener('click', function() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(temperatureInput) || temperatureInput === "") {
        resultDiv.textContent = "Please enter a valid number.";
        return;
    }

    const temperature = parseFloat(temperatureInput);
    let result = "";

    if (unit === 'celsius') {
        result = `${temperature}°C = ${(temperature * 9/5 + 32).toFixed(2)}°F = ${(temperature + 273.15).toFixed(2)}K`;
    } else if (unit === 'fahrenheit') {
        result = `${temperature}°F = ${((temperature - 32) * 5/9).toFixed(2)}°C = ${((temperature - 32) * 5/9 + 273.15).toFixed(2)}K`;
    } else if (unit === 'kelvin') {
        result = `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C = ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    resultDiv.textContent = result;
});
