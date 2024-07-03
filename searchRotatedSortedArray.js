function searchRotatedSortedArray(nums, target){
   let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // If left half is sorted
        if (nums[left] <= nums[mid]) {
            // Check if target is in the left half
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;

}

console.log(searchRotatedSortedArray([4,5,6,7,0,1,2], 2))