const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];
  if (threshold < 0) throw new Error("Threshold cannot be negative");

  // Step 1: Sort ranges by start time
  const orderedRanges  = ranges.sort((a, b) => a[0] - b[0]);

  const finalRanges = [];
  let [currentStart, currentEnd] = orderedRanges[0];

  for (const [start, end] of orderedRanges.slice(1)) {
    if (start <= currentEnd + threshold) {
      currentEnd = Math.max(currentEnd, end);
    } else {
      finalRanges.push([currentStart, currentEnd]);
      currentStart = start;
      currentEnd = end;
    }
  }

  // Push the last interval
  finalRanges.push([currentStart, currentEnd]);

  return finalRanges;
};

module.exports = {
  mergeTimeRanges
};
