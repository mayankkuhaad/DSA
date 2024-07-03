function containsDuplicate(nums){
    let map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.has(nums[i])){
            return true;
        }else{
            map.set(nums[i]);
        }
    }
    return false
}

console.log(containsDuplicate([1,2,3,1]));