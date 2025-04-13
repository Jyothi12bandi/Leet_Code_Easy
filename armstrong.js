function isArmstrong(n) {
    let ans = n;
    let result = 0;
    let s = String(n);

    while(n>0)
    {
        let rem = n%10;
        result += Math.pow(rem,s.length);
        n = Math.floor(n/10);
    }
    return ans===result;

}
console.log(isArmstrong(1634));
console.log(isArmstrong(12));