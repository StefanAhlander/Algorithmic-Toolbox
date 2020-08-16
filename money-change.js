const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');

rl.on("line", line => {
  console.log(moneyChange(parseInt(line)));
});

const moneyChange = payment => {
  const denominations = [10, 5, 1];
  let p = parseInt(payment);
  let change = 0;

  for (let i = 0; i < denominations.length; i++) {
    if (p > 0) {
      let coins = Math.floor(p / denominations[i]);
      change += coins;
      p = p - coins * denominations[i];
    }
  }

  console.log(change);
  process.exit();
};

module.exports = moneyChange;