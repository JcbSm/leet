function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    let concat = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = concat.length;

    return len % 2 == 1 ? concat[Math.floor(len/2)] : (concat[len/2 - 1] + concat[(len/2 - 1) + 1])/2;
};