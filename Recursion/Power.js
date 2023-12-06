function Power(a,b){

    if(b==0)//base case b ki value b==0 se km nhi hogi
    {
        return 1;
    }
    let ans=Power(a,b-1);//
    return ans*a;
}

console.log(Power(3,5));