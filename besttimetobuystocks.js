function buyandsell(prices) {
  let n = prices.length;
  let left = new Array(n);
  let right = new Array(n);
  left[0] = 0;
  right[0] = 0;
  for (let i = 0; i < n; i++) {
    debugger;
    left[i] = Math.min(left[i - 1], prices[i]);
  }
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], prices[i]);
  }
  let maxProfit = 0;
  for (let i = 0; i < n; i++)
    maxProfit = Math.max(maxProfit, (right[i] = left[i]));

  return maxProfit;
  console.log(maxProfit, "profit");
}

let result = buyandsell([7, 1, 3, 6, 2, 1]);
console.log(result);
