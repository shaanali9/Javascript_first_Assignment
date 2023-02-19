var magicians = ["magician1","magician2","magician3"];

function make_greak(magicians_name)
{
    return magicians_name + " Great";
}

function showMagicians(magicians_name)
{
    for(var i = 0; i < magicians_name.length; i++)
    {
        console.log(magicians_name[i]);
    }
}

var changedMagicians = [];

for(var i = 0; i < magicians.length; i++)
{
    changedMagicians[i] = make_greak(magicians[i]);
}

for(var i = 0; i < changedMagicians.length; i++)
{
    console.log(changedMagicians[i]);
}