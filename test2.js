function isBalanced(s) {
    const stack = [];
    const matchingBracket = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            if (stack.length === 0 || stack.pop() !== matchingBracket[char]) {
                return 'NO';
            }
        }
    }

    return stack.length === 0 ? 'YES' : 'NO';
}


let sample1 = "([{}])";
console.log(isBalanced(sample1));

let sample2 = "([{]})";
console.log(isBalanced(sample2));

let sample3 = "({[]})";
console.log(isBalanced(sample3));

let sample4 = "{[(())]}";
console.log(isBalanced(sample4));

let sample5 = "{[(])}";
console.log(isBalanced(sample5));

let sample6 = "[{()}]";
console.log(isBalanced(sample6));
