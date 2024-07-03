function twoSum(nums, target){
    let map = new Map();
    for(let i=0; i<nums.length; i++) {
        let complement = target - nums[i];
        if(map.has(complement)){
            return  [map.get(complement), i];
        }else{
            map.set(nums[i], i);
        }
    }
}

console.log(twoSum([2,7,11,15], 9));

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]