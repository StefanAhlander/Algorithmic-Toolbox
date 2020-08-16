const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');

rl.on('line', line => {
  const n = parseInt(line);

  rl.on('line', line => {
    const profitPerClick = line.split(' ').map(Number);

    rl.on('line', line => {
      const clicksPerDay = line.split(' ').map(Number);

      console.log(maxRevenue(n, profitPerClick, clicksPerDay));
      process.exit();
    });
  });
});

function maxRevenue(n, ppc, cpd) {
  let profitPerClick = ppc.sort((a, b) => b - a);
  let clicksPerDay = cpd.sort((a, b) => b - a);
  let revenue = 0;

  for (let i = 0; i < n; i++) {
    revenue += clicksPerDay[i] * profitPerClick[i];
  }

  return revenue;
}