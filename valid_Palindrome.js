function isPalindrome(s)
{
    let t = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    let right = t.length-1;
    let left = 0;
    while(left<right)
    {
        if(t[left]!==t[right]) return false;
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));