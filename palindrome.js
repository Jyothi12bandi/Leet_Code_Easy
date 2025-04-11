var isPalindrome = function(x) {
    let ans = 0;
    let a = x;
    while(x>0)
    {
        let rem = x%10;
        ans = (ans*10)+rem;
        x = Math.floor(x/10);
    }
    return ans === a;
    
};