var leapYears = function() {
    return ((arguments[0] % 100 == 0 && arguments[0] % 400 == 0) || (arguments[0] % 100 != 0 && arguments[0] % 4 == 0));
}

module.exports = leapYears
