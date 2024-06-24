function calculateWeights(s) {
    let weights = new Set();
    let i = 0;
    
    while (i < s.length) {
        let currentChar = s[i];
        let charWeight = currentChar.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
        let totalWeight = 0;
        let count = 0;
        
        while (i < s.length && s[i] === currentChar) {
            count++;
            totalWeight += charWeight;
            weights.add(totalWeight);
            i++;
        }
    }
    
    return weights;
}

function weightedStrings(s, queries) {
    let weights = calculateWeights(s);
    return queries.map(query => weights.has(query) ? 'Yes' : 'No');
}


let s1 = "deeffggg";
let queries1 = [5, 10, 21, 15];
let result1 = weightedStrings(s1, queries1);
console.log(result1);

let s2 = "aaabbccccd";
let queries2 = [3, 6, 12, 24];
let result2 = weightedStrings(s2, queries2);
console.log(result2);
