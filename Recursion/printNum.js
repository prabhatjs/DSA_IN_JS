function printNum(n)
{
 //base case if n==0 
    if(n==0)
    {
        return;
    }
    console.log(n);
    printNum(n-1);
    
}

console.log(printNum(5));
/*
n=5
printNum(5)
print 4

printnum(4)
print 3

printnum(3)
print 2

printnum (2)
print 1

printnum (1)
print o check base case its run down to up side growing
*/