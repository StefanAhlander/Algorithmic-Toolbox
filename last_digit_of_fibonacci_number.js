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

  return parseInt(_fib(n)[0] % 10n, 10);
};

module.exports = fib;
