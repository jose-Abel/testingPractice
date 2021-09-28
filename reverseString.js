function reverseString(str) {
    const newString = [];
    const strToArray = str.split('');

    for(let i = strToArray.length - 1; i >= 0; i--) {
        newString.push(strToArray[i]);
    }

    return newString.join('');
}

module.exports = reverseString;