const reverseString = function(string) {
    const chars = string.split('');
    let finalindex = chars.length - 1;
    const revArr = [];
    for (let i = finalindex; i >= 0; i--) {
        revArr.push(chars[i]);
    }
    let reversed = revArr.join('');
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
