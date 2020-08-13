const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
  let n = parseInt(line, 10);
  n = n % 60;
  console.log(results.get(n));
  process.exit();
}

function sumFib(n) {
  n += 2;
  const _fib = (n) => {
    if (n === 0)
      return [0, 1];

    let [a, b] = _fib(Math.floor(n / 2));
    let c = BigInt(a) * (BigInt(b) * 2n - BigInt(a));
    let d = BigInt(a * a + b * b);
    if (n % 2 === 0)
      return [BigInt(c), BigInt(d)];
    return [BigInt(d), BigInt(c + d)];
  };

  return parseInt((_fib(n)[0] - 1n) % 10n, 10);
}

const results = new Map();

for (let i = 0; i <= 59; i++) {
  results.set(i, sumFib(i));
}

module.exports = sumFib;
