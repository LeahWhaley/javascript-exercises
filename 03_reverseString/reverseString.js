const reverseString = function(originalString) {
    let stringArray = originalString.split("");
    stringArray.reverse();
    let reversedString = stringArray.join("");
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
