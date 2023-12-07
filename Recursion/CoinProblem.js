//3 coin posible answer psiblity of 3 coin

function coinflip(n,answer)
{
    if(n===0)
    {
        console.log(answer);
        return;
    }

    coinflip(n-1,answer+"H");
    coinflip(n-1,answer+"T");
}

coinflip(3,"");

//jitni choice utni call