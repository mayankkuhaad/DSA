var defangIPaddr = function(address) {
    let defangedAddress = '';
    for(let s of address){
        if(s === "."){
            defangedAddress += "[.]"
        }else{
            defangedAddress += s
        }
    }
    return defangedAddress
};

console.log(defangIPaddr("1.1.1.1"));