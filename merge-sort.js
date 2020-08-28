const merge = (left, right) => {
  const result = [];
  while (left.length > 0 && right.length > 0) {
    result.push(left[0] < right[0] ? left.shift() : right.shift());
  }
  return [...result, ...left, ...right];
};

const mergeSort = ([...initialArray]) => {
  if (initialArray.length < 2) return initialArray;
  const middle = Math.floor(initialArray.length / 2);
  const leftSorted = mergeSort(initialArray.slice(0, middle));
  const rightSorted = mergeSort(initialArray.slice(middle));
  return merge(leftSorted, rightSorted);
};

// Tests
console.log(mergeSort([2, 3, 10, 1, 7, 6, 9, 7, 5]));
console.log(
  mergeSort([54, 123, 43, 234, 132, 43, 32, 1123, 45, 65, 78, 98, 235, 500])
);
console.log(mergeSort([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(mergeSort([2]));
console.log(mergeSort([]));
