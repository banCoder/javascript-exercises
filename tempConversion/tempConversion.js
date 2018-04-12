var ftoc = function() {
  return round(((arguments[0] - 32) * 5) / 9);
}

var ctof = function() {
  return round((arguments[0] * 1.8) + 32);
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
function round(number, precision = 1) {
  let factor = Math.pow(10, precision)
  return Math.round(number * factor) / factor;
}

module.exports = {
  ftoc,
  ctof
}
