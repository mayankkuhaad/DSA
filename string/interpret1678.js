var interpret = function(command) {
    let arr = command.split("");
    let result = '';
    for(let i=0; i<arr.length; i++){
        if(arr[i] === "G"){
            result += ("G");
        }else if(arr[i] === "(" && arr[i+1] === ")"){
            result += ("o");
        }else if(arr[i] === "(" && arr[i+1] !== ")"){
            result += ("al");
        }
    }
    return result
};

console.log(interpret("(al)G(al)()()G"));