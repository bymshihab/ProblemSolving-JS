var sortSentence = function(s) {
    console.log(s);  
    
    let words = s.split(" ");
    console.log(words);
    let myMap = new Map();

    for(let  i =0; i<words.length; i++){
       let word = words[i];

        let index = parseInt(word[word.length-1]);
        let netWord = word.substring(0, word.length-1);


        myMap.set(index, netWord);
    }

    console.log(myMap);

    let sortedEntries = [...myMap.entries()].sort((a, b) => a[0] - b[0]);

    console.log(sortedEntries);
    let arr = []
    for (let [key, value] of sortedEntries) {
        // console.log(` Value: ${value}`);
       arr.push(value);

    }
    //console.log(arr.join(' '));
    return arr.join(' ');
};

console.log(sortSentence("is2 sentence4 This1 a3"));