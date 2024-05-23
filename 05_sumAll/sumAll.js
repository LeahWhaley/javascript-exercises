const sumAll = function(firstBound, secondBound) {
    if (typeof(firstBound) !== "number" || typeof(secondBound) !== "number") {
        return "ERROR";
    } else if (firstBound < 0 || secondBound < 0) {
        return "ERROR";
    }
    
    let sum = 0;
    let start = firstBound;
    let end = secondBound;
    if (firstBound > secondBound) {
        start = secondBound;
        end = firstBound;
    }
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
