module.exports = function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  let n1 = 0;
  let n2 = 1;
  let result = 0;
  for (let i = 2; i <= n; i += 1) {
    result = n1 + n2;
    n1 = n2;
    n2 = result;
  }
  return result;
};
