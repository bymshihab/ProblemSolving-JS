var equalFrequency = function(word) {
    const freqMap = new Map();
    for (const char of word) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }
    
    const freqValues = Array.from(freqMap.values());
    if (freqValues.length === 1) {
        return true; // All characters already have the same frequency
    }
    if (freqValues.length > 2) {
        return false; // More than two different frequencies are present
    }

    const [freq1, freq2] = freqValues;
    const [char1, char2] = Array.from(freqMap.keys());
    if ((freq1 === 1 && freq2 > 1) || (freq2 === 1 && freq1 > 1)) {
        // If one of the frequencies is 1, and the other is greater than 1,
        // it's impossible to remove one character to make frequencies equal.
        return false;
    }
    if (Math.abs(freq1 - freq2) > 1) {
        // If the difference between the frequencies is greater than 1,
        // it's impossible to remove one character to make frequencies equal.
        return false;
    }
    if ((freq1 === 1 && freq2 === 1) || Math.min(freq1, freq2) === 1) {
        // If both frequencies are 1 or if one of them is 1,
        // removing one character will result in equal frequencies.
        return true;
    }
    // If frequencies are equal, removing one character will result in equal frequencies.
    return true;

};

console.log(equalFrequency("cccaa"));