const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
  if (line !== "\n") {
    const n = parseInt(line.toString().split(' ')[0], 10);
    const m = parseInt(line.toString().split(' ')[1], 10);

    console.log(getFibMod(n, m));
    process.exit();
  }
}

function getFibMod(n, m) {
  function getPisanoPeriod(m) {
    let a = 0, b = 1, c = a + b;
    for (let i = 0; i < m * m; i++) {
      c = (a + b) % m;
      a = b;
      b = c;
      if (a == 0 && b == 1) {
        return i + 1;
      }
    }
  };

  const pisanoPeriod = getPisanoPeriod(m);

  n = n % pisanoPeriod;

  let [previous, current] = [BigInt(0), BigInt(1)];
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  for (let i = 0; i < (n - 1); i++) {
    [previous, current] = [current, previous + current];
  }

  return parseInt((current % BigInt(m)), 10);
}

module.exports = getFibMod;
