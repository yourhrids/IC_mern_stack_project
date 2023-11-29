function outputFunction(input) {
  var result = input.replace(/[acz]/g, "");
  return result;
}

var original = "abcxyz123";
var modified = outputFunction(original);

console.log(modified);
