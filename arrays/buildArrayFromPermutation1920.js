
function buildArray(nums){
    let ans = [];
    for(let i=0; i<nums.length; i++){
        ans[i] = nums[nums[i]]
    }
    return ans;
}

console.log(buildArray([0,2,1,5,3,4]))
// Input: nums = [0,2,1,5,3,4]
// Output: [0,1,2,4,5,3]