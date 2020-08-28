function bubbleSort(a) {
  var swapp;
  var n = a.length - 1;
  var x = a;
  do {
    swapp = false;
    for (var i = 0; i < n; i++) {
      if (x[i] > x[i + 1]) {
        [x[i + 1], x[i]] = [x[i], x[i + 1]];
        swapp = true;
      }
    }
    n--;
  } while (swapp);
  return x;
}

// Tests
console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);
