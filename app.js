const verb = [
    'Stworzenie',
    'Wytworzenie',
    'Implementacja',
    'Zaimplementowanie',
    'Zaprojektowanie',
    'Zaprojektowanie i implementacja',
]

const adjectiveCore = [
    'nowe',
    'zaktualizowane',
    'ulepszone',
    'poprawione',
]

const maleNoun = [
    'komponentu',
    'interfejsu',
    'elementu',
    'schematu',
]

const femaleNoun = [
    'funkcjonalności',
    'części',
    'funkcji',
    'metody',
]

const pluralNoun = [
    'komponentów',
    'funkcjonalności',
    'interfejsów',
    'elementów',
    'części',
    'schematów',
    'funkcji',
    'metod',
]

const secondNoun = [
    'interfejsu użytkownika',
    'API',
    'testów',
    'serwera',
    'bazy danych',
    'hurtowni danych',
    'modelu',
    'modelu statystycznego'
]

const thirdNoun = [
    'dla projektu',
    'w projekcie',
    'dla programu',
    'w programie',
    'dla narzędzia',
    'w narzędziu',
    'dla aplikacji',
    'w aplikacji',
]

function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function proportionalRandom(arr1, arr2) {
    if (arr1.length > arr2.length)
        return Math.random() > arr2.length / arr1.length;
    else
        return Math.random() > arr1.length / arr2.length;
}

function getAdjective(male) {
    if (male)
        return randomElement(adjectiveCore) + 'go';
    else
        return randomElement(adjectiveCore) + 'j';
}

function generateChain(name) {
    let chain = randomElement(verb) + ' ';
    if (proportionalRandom(pluralNoun, adjectiveCore))
        chain += randomElement(pluralNoun) + ' ';
    else if (proportionalRandom(maleNoun, femaleNoun))
        chain += getAdjective(true) + ' ' + randomElement(maleNoun) + ' ';
    else
        chain += getAdjective(false) + ' ' + randomElement(femaleNoun) + ' ';

    chain += randomElement(secondNoun) + ' ';

    chain += randomElement(thirdNoun) + ' ' + name;
    return chain;
}

for (let i = 0; i < process.argv[3]; i++) {
    console.log(generateChain(process.argv[2]))
}
