var removeDuplicates = function(nums) {
    let set = new Set(nums);
    let count = 0;
    set.forEach((value)=>{
        nums[count] = value;
        count++;
    })
    return {count, nums}
};
 
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); 