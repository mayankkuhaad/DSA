function goodPairs(nums){
    let map = new Map();
    let count = 0;
    for(let num of nums){
        if(map.has(num)){
            count += map.get(num);
            map.set(num , map.get(num) + 1 );
        }else{
            map.set(num, 1)
        }
    }
    return count;
}

console.log(goodPairs([1,1,1,1]))