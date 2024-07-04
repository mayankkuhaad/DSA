function shuffleArr(nums, n){
    let ans = [];
    for(let i=0; i<n; i++){
        ans.push(nums[i]);
        ans.push(nums[i+n]);
    }
    return ans
}

console.log(shuffleArr([2,5,1,3,4,7],3))