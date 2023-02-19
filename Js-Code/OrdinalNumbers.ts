var OrdinalNumbers  = [1,2,3,4,5,6,7,8,9]


for(var i = 0; i < OrdinalNumbers.length; i++)
{
    if(OrdinalNumbers[i] == 1)
    {
        console.log("1st")
    }
    else if(OrdinalNumbers[i] == 2)
    {
        console.log("2nd")
    }
    else if(OrdinalNumbers[i] == 3)
    {
        console.log("3rd")
    }
    else
    {
        console.log(OrdinalNumbers,"th")
    }
}