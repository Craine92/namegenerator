function generateNames() {
    let numberOfNames = parseInt(document.getElementById("numberOfNames").value);
    let generatedNamesList = document.getElementById("generatedNames");
    generatedNamesList.innerHTML = ''; // Leere die vorherigen Namen

    for (let i = 0; i < numberOfNames; i++) {
        let name = generateRandomName();
        let listItem = document.createElement('li');
        listItem.textContent = name;
        generatedNamesList.appendChild(listItem);
    }
}

function generateRandomName() {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let name = '';

    let nameLength = Math.floor(Math.random() * 8) + 5; // Zufällige Länge zwischen 5 und 12
    let useVowel = false; // letiable, um sicherzustellen, dass der nächste Buchstabe ein Vokal ist
    let lastChar = ''; // letiable, um den letzten hinzugefügten Buchstaben zu verfolgen

    for (let i = 0; i < nameLength; i++) {
        if (useVowel) {
            // Füge einen zufälligen Vokal hinzu
            let vowel = vowels[Math.floor(Math.random() * vowels.length)];
            if (vowel !== lastChar) {
                name += vowel;
                lastChar = vowel;
            }
            useVowel = false; // Setze die letiable zurück, damit der nächste Buchstabe ein Konsonant ist
        } else {
            // Füge einen zufälligen Konsonanten hinzu
            let consonant = String.fromCharCode(Math.floor(Math.random() * 21) + 98); // Nur Konsonanten im Bereich von 'b' bis 'v'
            if (consonant !== lastChar) {
                name += consonant;
                lastChar = consonant;
            }
            useVowel = true; // Setze die letiable, damit der nächste Buchstabe ein Vokal ist
        }
    }

    return name;
}

