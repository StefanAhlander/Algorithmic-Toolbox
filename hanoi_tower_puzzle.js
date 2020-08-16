let numberOfMoves = 0;
let numDisks = process.argv[2];

const solveHanoiTowerPuzzle = (disk, start, destination, staging) => {
  numberOfMoves++;
  if (disk === 1) {
    console.log(`Move disk 1 from post ${start} to post ${destination}`);
  } else {
    solveHanoiTowerPuzzle(disk - 1, start, staging, destination);
    console.log(`Move disk ${disk} from post ${start} to post ${destination}`);
    solveHanoiTowerPuzzle(disk - 1, staging, destination, start);
  }
};

solveHanoiTowerPuzzle(numDisks, 1, 3, 2);
console.log(`Number of moves = ${numberOfMoves}`);
