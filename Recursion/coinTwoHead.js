//2 head in sequence is not you answer 
//3 coin ki esi posibility nikalo jisme 2 lagatar head na ho

//3 coin posible answer psiblity of 3 coin

function coinflip(n,answer)
{
    if(n===0)
    {
        console.log(answer);
        return;
    }
    if(answer.length===0 || answer.charAt(answer.length-1)!=="H"  ){
    coinflip(n-1,answer+"H");
}
    coinflip(n-1,answer+"T");
}

coinflip(3,"");

//jitni choice utni call