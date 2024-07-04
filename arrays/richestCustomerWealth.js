function maxWealth(accounts){
    let maxWealth = 0;
    for(let i =0; i<accounts.length; i++){
        let customerWealth = 0;
        for(let j=0; j<accounts[i].length; j++){
            customerWealth += accounts[i][j];
        }
        if(customerWealth > maxWealth){
            maxWealth = customerWealth;
            index = i;
        }
    }
    return maxWealth
    // return Math.max(...accounts.map(customer => customer.reduce((sum, account) => sum + account, 0)));

}
console.log(maxWealth([[2,8,7],[7,1,3],[1,9,5]]));