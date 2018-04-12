var repeatString = function(input, times) {
    if (times < 0) return "ERROR";
    
    let output = "";
    for (let i = times; i > 0; i--) {
        output += input;
    }
    return output;
}

module.exports = repeatString
