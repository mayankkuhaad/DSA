function maxProduct(nums) {
    if (nums.length === 0) return 0;

    let minSoFar = nums[0];
    let maxSoFar = nums[0];
    let result = nums[0];

    for(let i=1; i<nums.length; i++){
        let current = nums[i];
        let tempMax = Math.max(current, maxSoFar * current, minSoFar * current);
        let tempMin = Math.min(current, maxSoFar * current, minSoFar * current);

        minSoFar = tempMin;
        maxSoFar = tempMax;

        result = Math.max(result, maxSoFar);
    }
    return result
}

console.log(maxProduct([2, 3, -2, 4]));  // Output: 6
console.log(maxProduct([-2, 0, -1]));  // Output: 0
console.log(maxProduct([-2, 3, -4]));  // Output: 24
