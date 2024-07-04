function concatArr(nums){
    // let ans = [];
    // ans = [...nums, ...nums];
    // return ans;

    let lengthOfArray = nums.length;
    let ans = new Array(2 * lengthOfArray);
    for(let i=0; i<lengthOfArray; i++){
        ans[i] = nums[i];
        ans[i+lengthOfArray] = nums[i];
    }
    return ans
}

console.log(concatArr([1,2,1]))