function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
}

// Example usage:
console.log(maxProfit([7, 1, 5, 3, 6, 4]));  // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1]));  // Output: 0
