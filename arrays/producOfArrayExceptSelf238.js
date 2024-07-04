function selfProduct(nums){
    let result = [];
    let leftProd = 1;
    let rightProd = 1;

  for(let i =0 ; i<nums.length; i++){
    result[i] = leftProd;
    leftProd *= nums[i];
  }

  for(let i=nums.length-1; i>=0; i--){
    result[i] *= rightProd;
    rightProd *= nums[i]
  }
  return result
}
console.log(selfProduct([1,2,3,4]));