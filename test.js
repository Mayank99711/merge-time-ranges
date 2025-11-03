const { combineActiveSlots } = require('./my-module.js');

// Example input data
const ranges = [
  [1000, 2000],
  [2500, 4000],
  [3900, 4100],
  [8000, 9000],
  [9050, 9500]
];

const gaplimit = 200;

// Run the function and log the result
console.log(combineActiveSlots(ranges, gaplimit));
