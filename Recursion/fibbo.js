function fibbo(n)
{
    if(n==0 || n==1)
    {
        return 1;
    }
    let f1=fibbo(n-1);
    let f2=fibbo(n-2);
    return f1+f2;
}

console.log(fibbo(5));

//0,1,1,2,3,5,8,13,21...... so on

// more then 1 recursive call we are not create recursion stack on that we create recursion tree--->