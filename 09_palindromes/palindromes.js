const palindromes = function (string) {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let newString = "";
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (characters.includes(string[i]) ) {
            newString += string[i];
        }
    }
    for (let j = 0; j < newString.length / 2; j++) {
        if (newString[j] !== newString[newString.length - (j + 1)]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
