function intersection(nums1, nums2){
    let map = new Map();
    let result = [];
    for(let num of nums1){
        if(map.has(num)){
           map.set(num, map.get(num)+1);
        }else{
            map.set(num, 1);
    }
    }
    for(let num of nums2){
        if(map.has(num) && map.get(num) > 0){
            result.push(num);
            map.set(num, map.get(num)-1);
        }
    }
    return result;

}

console.log(intersection( [4,9,5],[9,4,9,8,4]));