var reverseString = function(input) { 
    // recursion
    //if (input == "") {
    //    return "";
    //}
    //else return reverseString(input.substr(1)) + input.charAt(0);

    return input.split("").reverse().join("");
}

module.exports = reverseString