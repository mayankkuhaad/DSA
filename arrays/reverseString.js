function revString(str){
    return str.split(" ").filter(item => item !== "").reverse().join(" ").trim();
}

console.log(revString("a good   example"));