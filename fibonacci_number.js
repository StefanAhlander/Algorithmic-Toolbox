const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
  console.log(fib(parseInt(line, 10)));
  process.exit();
}

function fib(n) {
  let a = 0, b = 1, c;
  if (n == 0) return 0;
  if (n == 1) return 1;
  for (let i = 2; i <= n; i += 1) {
    c = a + b, a = b, b = c;
  }
  return c;
}

module.exports = fib;
