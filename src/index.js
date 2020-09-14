exports.min = function min(array) {
    return (
      !Array.isArray(array) || !array.length
        ? 0
        : Math.min(...array)
    );
};

exports.max = function max(array) {
  return (
    !Array.isArray(array) || !array.length
      ? 0
      : Math.max(...array)
  );
};

exports.avg = function avg(array) {
  return (
    !Array.isArray(array) || !array.length
      ? 0
      : array.reduce((sum, el) => sum += el, 0) / array.length
  );
};
