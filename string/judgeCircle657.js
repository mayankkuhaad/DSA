var judgeCircle = function(moves) {
    let movesArr = moves.split("");
    let countUpDown = 0;
    let countLeftRight = 0;
    for(let value of movesArr){
        if(value === "U"){
            countUpDown++;
        }
        if(value === "D"){
            countUpDown--;
        }
        if(value === "L"){
            countLeftRight--;
        }
        if(value === "R"){
            countLeftRight++;
        }
    }
    if(countLeftRight===0 && countUpDown===0){
        return true
    }else{
        return false

        /**
         let x = 0, y = 0;
    
    for (let move of moves) {
        switch (move) {
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
            case 'L':
                x--;
                break;
            case 'R':
                x++;
                break;
        }
    }
    
    return x === 0 && y === 0;
         */
    }
};
console.log(judgeCircle("LL"))