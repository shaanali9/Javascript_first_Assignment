function SandwitchDetails(details)
{
    console.log("Person want in a sandwitch is ");
    for(var i = 0; i < details.length; i++)
    {
        console.log(details[i]);
    }
}

var sandwitch_toEat = ["Egg","Olive","Chicken"]
SandwitchDetails(sandwitch_toEat);