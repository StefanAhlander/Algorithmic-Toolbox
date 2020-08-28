const makeChange = (coins, value) => {
  const cache = {};

  const calcChange = (value) => {
    if (cache[value]) return cache[value];
    if (value === 0) return 0;
    let minCoins;
    coins.forEach((coin) => {
      if (value - coin >= 0) {
        let currMincoins = calcChange(value - coin);
        if (minCoins === undefined || currMincoins < minCoins) {
          minCoins = currMincoins;
        }
      }
    });
    cache[value] = minCoins + 1;
    return cache[value];
  };

  return calcChange(value);
};

// Tests
const coins = [10, 6, 1];

console.log(makeChange(coins, 12));
console.log(makeChange(coins, 10));
console.log(makeChange(coins, 3));
console.time('coins 63');
console.log(makeChange(coins, 63));
console.timeEnd('coins 63');
console.time('coins 163');
console.log(makeChange(coins, 163));
console.timeEnd('coins 163');
