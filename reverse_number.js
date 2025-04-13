
let x= 123;

function reverse(x) {
    let ans = x;
    let new_num = 0;
    while(ans !=0){
     let rem = ans%10;
     new_num = (new_num*10) + rem;
     ans = ans/10;
    }
    console.log(new_num);
 };

 reverse(x)
