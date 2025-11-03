const mergeTimeRanges = (ranges, threshold) => {
  if (!Array.isArray(ranges) || ranges.length === 0) return [];

  // Step 1: Sort ranges by start time
  const sorted = ranges.sort((a, b) => a[0] - b[0]);

  const merged = [];
  let [currStart, currEnd] = sorted[0];

  for (let i = 1; i < sorted.length; i++) {
    const [nextStart, nextEnd] = sorted[i];

    // If overlapping or within threshold gap → merge
    if (nextStart <= currEnd + threshold) {
      currEnd = Math.max(currEnd, nextEnd);
    } else {
      // Push previous merged range and start a new one
      merged.push([currStart, currEnd]);
      currStart = nextStart;
      currEnd = nextEnd;
    }
  }

  // Push the last interval
  merged.push([currStart, currEnd]);

  return merged;
};

module.exports = {
  mergeTimeRanges
};
