function PrintNum2(n)
{   
   

    if(n==0){
        return;
    }
    

     PrintNum2(n-1);
     console.log(n);
}

console.log(PrintNum2(5))