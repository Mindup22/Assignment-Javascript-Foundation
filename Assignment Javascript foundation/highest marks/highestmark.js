let marks = [80, 90, 75, 85, 95];
let highestMark = marks[0];

for (let i = 1; i < marks.length; i++) {
  highestMark = marks[i] > highestMark ? marks[i] : highestMark;
}

console.log(`The highest mark is ${highestMark}.`);