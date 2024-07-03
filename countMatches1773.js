var countMatches = function(items, ruleKey, ruleValue) {
    let ruleIndex;
    if(ruleKey === "type"){
        ruleIndex = 0;
    }
    if(ruleKey === "color"){
        ruleIndex = 1;
    }
    if(ruleKey === "name"){
        ruleIndex = 2;
    }
    let count = 0;
    for(let i=0; i<items.length; i++){
        if(items[i][ruleIndex] === ruleValue){
            count++;
        }
    }
    return count;
    
};

console.log(countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],
     "color", 
     "silver"
))