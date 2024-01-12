// numerology.js

// Function to calculate Life Path and Destiny Numbers
function calculateNumerologyResults(name, dob) {
    const lifePathNumber = calculateLifePathNumber(dob);
    const destinyNumber = calculateDestinyNumber(name);

    return {
        "Life Path Number": lifePathNumber,
        "Destiny Number": destinyNumber,
        "Soul Number": calculateSoulNumber(name),
        "Personality Number": calculatePersonalityNumber(name),
        "Maturity Number": calculateMaturityNumber(lifePathNumber, destinyNumber),
        "Meaning":displayNumerologyResults(name, dob),
        
        
    };
}

// Mapping of letters to their corresponding numbers
const letterToNumber = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9,
    'J': 1, 'K': 2, 'L': 3, 'M': 4, 'N': 5, 'O': 6, 'P': 7, 'Q': 8, 'R': 9,
    'S': 1, 'T': 2, 'U': 3, 'V': 4, 'W': 5, 'X': 6, 'Y': 7, 'Z': 8
};

// Function to calculate Life Path Number
function calculateLifePathNumber(dateOfBirth) {
    const [day, month, year] = dateOfBirth.split('/').map(Number);
    let lifePathNumber = day + month + year;

    while (lifePathNumber > 9) {
        lifePathNumber = reduceToSingleDigit(lifePathNumber);
    }

    return lifePathNumber;
}

// Function to reduce a number to a single digit
function reduceToSingleDigit(number) {
    return number.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Function to calculate Destiny Number
function calculateDestinyNumber(name) {
    const uppercaseName = name.toUpperCase();
    let destinyNumber = 0;

    for (let i = 0; i < uppercaseName.length; i++) {
        const char = uppercaseName[i];
        if (letterToNumber[char]) {
            destinyNumber += letterToNumber[char];
        }
    }

    while (destinyNumber > 9) {
        destinyNumber = reduceToSingleDigit(destinyNumber);
    }

    return destinyNumber;
}

// Function to calculate Soul Number
function calculateSoulNumber(name) {
    const vowels = name.replace(/[^aeiou]/gi, ''); 
    let soulNumber = 0;

    for (let i = 0; i < vowels.length; i++) {
        const char = vowels[i].toUpperCase();
        soulNumber += letterToNumber[char];
    }

    while (soulNumber > 9) {
        soulNumber = reduceToSingleDigit(soulNumber);
    }

    return soulNumber;
}

//function to calculate personality number
function calculatePersonalityNumber(name) {
    const consonants = name.replace(/[aeiou]/gi, ''); 
    let personalityNumber = 0;

    for (let i = 0; i < consonants.length; i++) {
        const char = consonants[i].toUpperCase();
        personalityNumber += letterToNumber[char] || 0; 
    }

    while (personalityNumber > 9) {
        personalityNumber = reduceToSingleDigit(personalityNumber);
    }

    return personalityNumber;
}


// Function to calculate Maturity Number
function calculateMaturityNumber(lifePathNumber, destinyNumber) {
    let maturityNumber = lifePathNumber + destinyNumber;

    while (maturityNumber > 9) {
        maturityNumber = reduceToSingleDigit(maturityNumber);
    }

    return maturityNumber;
}

// Function to display number meaning
function displayNumberMeaning(number, type) {
    const meanings = {
        1: 'Leadership, initiative, independence, determination, selfishness',
        2: 'Sensitivity, compromise, harmony, balance, cooperation',
        3: 'Creativity, enthusiasm, optimism, fantasy, inspiration',
        4: 'Stability, security, tradition, hard work, cautiousness',
        5: 'Change, freedom, revolution, progressiveness, sexuality',
        6: 'Care, responsibility, family, duty, romanticism',
        7: 'Loneliness, skepticism, mysticism, philosophy, perfectionism',
        8: 'Power, domination, money, success, recognition',
        9: 'Forgiveness, compassion, integration, reward, spirituality'
    };

    const meaning = meanings[number];
    console.log(`${type} Number (${number}): ${meaning}`);
}
//Function to display numerology results
function displayNumerologyResults(name, dob) {
    const lifePathNumber = calculateLifePathNumber(dob);
    const destinyNumber = calculateDestinyNumber(name);
    const soulNumber = calculateSoulNumber(name);
    const personalityNumber = calculatePersonalityNumber(name);
    const maturityNumber = calculateMaturityNumber(lifePathNumber, destinyNumber);

    console.log(`Life Path Number: ${lifePathNumber}`);
    console.log(`Destiny Number: ${destinyNumber}`);
    console.log(`Soul Number: ${soulNumber}`);
    console.log(`Personality Number: ${personalityNumber}`);
    console.log(`Maturity Number: ${maturityNumber}`);

    displayNumberMeaning(lifePathNumber, 'Life Path');
    displayNumberMeaning(destinyNumber, 'Destiny');
    displayNumberMeaning(soulNumber, 'Soul');
    displayNumberMeaning(personalityNumber, 'Personality');
    displayNumberMeaning(maturityNumber, 'Maturity');
}





function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("results").innerHTML = "";
  }
  

// Example 
const name = "Margaret Hill";
const dob = "6/3/1990";
displayNumerologyResults(name, dob);
