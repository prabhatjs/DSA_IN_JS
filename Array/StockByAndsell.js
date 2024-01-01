function StockBuy(arr){
    let minimum=10000;
    let maxProfit=0;
    for(let i=0;i<arr.length;i++)
    {
            minimum=Math.min(minimum,arr[i]);
            maxProfit=Math.max(maxProfit,arr[i]-minimum);
    }
    return maxProfit;
}

let arr=[7,2,5,3,6,4];
console.log(StockBuy(arr))