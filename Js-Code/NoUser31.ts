var userNames = ["Admin","Erik","Jerico","Roman","Reign"]

if(userNames.length == 0)
{
    console.log("We need to find some users.");
}else{
    for(var i =0; i < userNames.length; i++){
        userNames.pop();
    }
}
if(userNames.length == 0)
{
    console.log("We need to find some users.");
}