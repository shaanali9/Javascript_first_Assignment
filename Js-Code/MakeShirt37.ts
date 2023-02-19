function make_shirts(size = "null", message)
{
    if(size == "null")
    {
        console.log("Make a large and medium size shirt");
    }
    else
    {
        console.log(size,message);
    }
}

make_shirt(36,"This shirt will fit to me");