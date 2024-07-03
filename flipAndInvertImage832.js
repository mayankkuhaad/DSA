var flipAndInvertImage = function(image) {
    // const invert = (val) => val === 0 ? 1 : 0;
    
    // let temp = [];
    // for (let i = 0; i < image.length; i++) {
    //     temp[i] = image[i].reverse().map(invert);
    // }
    
    // return temp;

    const n = image.length;
    for (let i = 0; i < n; i++) {
        let left = 0, right = n - 1;
        while (left <= right) {
            let temp = image[i][left] ^ 1;
            image[i][left] = image[i][right] ^ 1;
            image[i][right] = temp;
            left++;
            right--;
        }
    }
    return image;
};

console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]));