var addToArrayForm = function(num, k) {
    let result = [];
    let carry = 0;
    let i = num.length - 1;

    while (i >= 0 || k > 0 || carry > 0) {
        let digitSum = carry;

        if (i >= 0) {
            digitSum += num[i];
            i--;
        }

        if (k > 0) {
            digitSum += k % 10;
            k = Math.floor(k / 10);
        }

        carry = Math.floor(digitSum / 10);
        result.push(digitSum % 10);
    }

    return result.reverse();

};
console.log(addToArrayForm([1,2,0,0],34))