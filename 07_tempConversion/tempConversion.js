const ftoc = function(fahr) {
  let cels = (fahr - 32) * 5/9;
  cels = parseFloat(cels.toFixed(1));
  return cels;
};

const ctof = function(cels) {
  let fahr = 9/5 * cels + 32;
  fahr = parseFloat(fahr.toFixed(1));
  return fahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
