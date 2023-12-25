function storemap(){
    //restrorent menu
    let total=0;
    let menu=new Map();
    menu.set("burger",[50,100,150]);
    menu.set("pizza",100);
    menu.set("noodles",120);
    menu.set("paneer",150);
    if(menu.has("burger"))
    {
        console.log("Yes menu has Burger and rate is -",menu.get("burger"));
    }
    //looop over map 
    for(let [key,value] of menu)
    {
       console.log(key,value)
        // total+=value;
    }
    console.log(total);

    //second way of itrate
    for(var data of menu.entries())
    {
        console.log(data);
    }
}

storemap();