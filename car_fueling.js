const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

process.stdin.setEncoding('utf8');

rl.on('line', line => {
  const distance = parseInt(line);

  rl.on('line', line => {
    const tankDistance = parseInt(line);

    rl.on('line', line => {
      const n = parseInt(line);

      rl.on('line', line => {
        const gasStations = line.split(' ').map(Number);

        console.log(maxStops(distance, tankDistance, n, gasStations));
        process.exit();
      });
    });
  });
});

function maxStops(distance, t, n, g) {
  let tankDistance = t;
  let refills = 0;
  let lastStation = 0;
  let gasStations = [0, ...g, distance];

  for (let i = 1; i < gasStations.length; i++) {
    if (tankDistance > distance) {
      return refills;
    }
    if (gasStations[i] > tankDistance) {
      if (i === 0 || (i - 1 === lastStation)) {
        return -1;
      }
      lastStation = i - 1;
      tankDistance = t + gasStations[i - 1];
      refills++;
      i--;
    }
  }
  return refills;
};