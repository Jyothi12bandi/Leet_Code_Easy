var countSymmetricIntegers = function(low, high) {
    let count =0;
    for(let i=low;i<=high;i++)
    {
         let s = String(i);
         let n = s.length;
         let t = s.slice(0,n/2);
         let m = s.slice(n/2);
         if(n%2===0)
         {
             let sum = 0;
            for(let i of t)
            {
                sum += parseInt(i);
            }
            let ysum = 0;
            for(let i of m)
            {
                ysum += parseInt(i);
            }
    
            if(sum === ysum)
            {
                count++;
            }
         
         }
         
         
    }
    return count;
 };