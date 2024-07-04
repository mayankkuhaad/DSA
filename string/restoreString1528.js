var restoreString = function(s, indices) {
    let ans = [];
    let strArr = s.split("");
    for(let i=0; i<strArr.length; i++){
       ans[indices[i]] = strArr[i];
    }
    return ans.join("")
};

console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3]))