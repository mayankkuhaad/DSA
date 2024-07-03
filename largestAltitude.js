var largestAltitude = function(gain) {
    // let lengthOfAnswerArray = gain.length;
    // let answerArray = new Array(lengthOfAnswerArray+1);
    // answerArray[0] = 0;
    // for(let i = 0; i<gain.length; i++){
    //     answerArray[i+1] = gain[i] + answerArray[i];
    // }
    // let highestPoint = Math.max(...answerArray);
    // return highestPoint;

    let currentAltitude = 0;
    let maxHeight = 0;

    for(let i=0; i<gain.length; i++){
        currentAltitude = currentAltitude + gain[i];
        if(currentAltitude > maxHeight){
            maxHeight = currentAltitude
        }
    }
    return maxHeight
};

console.log(largestAltitude( [-4,-3,-2,-1,4,3,2]));