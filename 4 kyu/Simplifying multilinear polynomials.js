const input = "abc + a + b + 4ab +3c";
const output = input.replace(/([a-zA-Z])/g, "1$1");
console.log(output); // "1abc + 1a + 1b + 4ab +3c"