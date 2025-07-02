const fibonacci = function(index) {
    if ( index < 0 ) {
        return "OOPS";
    } else if ( index == 0 ) {
        return 0;
    } else if ( index == 1 || index == 2 ) {
        return 1;
    } else {
        let prev1 = 1;
        let prev2 = 1;
        let current = 0;
        for (let i = 3; i <= index; i++ ) {
            current = prev1 + prev2;
            prev1 = prev2;
            prev2 = current
        }
        return current;
    }

};

// Do not edit below this line
module.exports = fibonacci;
