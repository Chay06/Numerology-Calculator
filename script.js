// script.js

// Function to calculate numerology and display results
function calculateNumerology() {
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;

    // Validate input
    if (!name || !dob) {
        alert("Please enter both your name and date of birth.");
        return;
    }

    // Calculate numerology values
    const numerologyResults = calculateNumerologyResults(name, dob);

    // Display results
    displayResults(numerologyResults);
}

// Function to display results
function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    for (const [key, value] of Object.entries(results)) {
        const resultElement = document.createElement('p');
        resultElement.textContent = `${key}: ${value}`;
        resultsContainer.appendChild(resultElement);
    }
}
