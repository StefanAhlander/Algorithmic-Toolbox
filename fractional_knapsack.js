const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function sortWeightsByValue(values, weigths) {
    let loot = [];
    for (let i = 0; i < values.length; i++) {
        loot.push({
            value: values[i],
            weigth: weigths[i],
            ratio: values[i] / weigths[i]
        });
    }

    loot.sort((a, b) => b.ratio - a.ratio);

    return loot;
}

function max(count, capacity, values, weights) {
    let loot = sortWeightsByValue(values, weights);
    let value = 0;

    while (capacity > 0) {
        let item = loot.shift();
        if (item.weigth > capacity) {
            return value + (item.value * (capacity / item.weigth));
        }
        value += item.value;
        capacity -= item.weigth;
        if (--count <= 0) {
            return value;
        }
    }

    return value.toFixed(4);
}

module.exports = max;
