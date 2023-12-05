function factorial(n)
{
    //base case if n==0 or n==1 then it is return 1 it handle the recursion to stop 
    if(n==0)
    {
        return 1;
    }
    let fun=factorial(n-1);
    return fun*n;
}

console.log(factorial(5));