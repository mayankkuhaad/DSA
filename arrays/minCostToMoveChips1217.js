var minCostToMoveChips = function(position) {
    let odd = 0;
    let even = 0;
    for(let i=0; i<position.length; i++){
        if(position[i] % 2 !== 0){
            odd++
        }else{
            even++;
        }
    }
    return Math.min(even,odd);
};
console.log(minCostToMoveChips([1,1000000000]));