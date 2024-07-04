function findMin(nums){
    let smallestVal = nums[0];
    for(let i=1; i<nums.length; i++){
        smallestVal= Math.min(smallestVal, nums[i]);
    }    
    return smallestVal
}

console.log(findMin([11,13,15,17]));