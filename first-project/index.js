console.log("hello");

regString = /(([a-z]+)(\d+))/gmi

input = `a1b10c4`;

console.log(regString.exec(input));
console.log(input.match(regString));