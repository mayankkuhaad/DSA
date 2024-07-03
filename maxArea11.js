// var maxArea = function(height) {
//     let maxArea = 0;
//     let left = 0;
//     let right = height.length - 1;
    
//     while (left < right) {
//         let minHeight = Math.min(height[left], height[right]);
//         let area = minHeight * (right - left);
//         maxArea = Math.max(maxArea, area);
        
//         if (height[left] < height[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }
    
//     return maxArea;
// };


function maxArea(height){
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right){
        let minHeight = Math.min(height[left], height[right]);
        let maxWidth = right - left;
        let currArea = minHeight * maxWidth;

        maxArea = Math.max(maxArea, currArea);

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }

    return maxArea;
}

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(heights)); // Output: 49
