function aAppersFirst(s) {
    let a=[];
    let b=[];
    for(let i=0;i<s.length;i++)
    {
        let c=s.charAt(i);
        if(c==='a') a.push(i);
        if(c==='b')b.push(i);
       
    }
    let c = [...a,...b];
    for(let i=0;i<c.length-1;i++)
    {
        if(c[i]>c[i+1])
        {
            return false;
        }
    }
    return true;
}
console.log(aAppersFirst('aaba'))//false;
  