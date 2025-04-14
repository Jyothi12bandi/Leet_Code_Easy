function sortedArray(arr)
{
    let k = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(i===0 || arr[i] !==arr[i-1])
        {
            arr[k++] = arr[i];
        }
    }
    return k;
}
console.log(sortedArray([1,1,2]))//2