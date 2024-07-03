var findNumbers = function(nums) {
    let count = 0;
    for(let num of nums){
        let numberString = String(num);
        if(numberString.length % 2 === 0){
            count++;
        }
    }
    return count
};

console.log(findNumbers([555,901,482,1771]));