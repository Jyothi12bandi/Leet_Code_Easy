function sortedRotated(arr)
{
    let count = 0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>arr[(i+1)%arr.length]  &&  ++count > 1)
        {
            return false;
        }
    }
    return count <=1;
}
console.log(sortedRotated([3,4,5,1,2]));//true because at position 3 we can rotate and array become sorted.