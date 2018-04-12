var sumAll = function() {
    // check parameters
    if (typeof arguments[0] != "number" || typeof arguments[1] != "number" || arguments[0] < 0 || arguments[1] < 0) {
        return "ERROR";
    }

    let sum = 0;    
    if (arguments[0] < arguments[1]) {
        for (let i = arguments[0], j = arguments[1]; i <= j; i++) {
            sum += i;
        }
    } else {
        for (let j = arguments[0], i = arguments[1]; i <= j; i++) {
            sum += i;
        }
    }
    return sum;
}

module.exports = sumAll
