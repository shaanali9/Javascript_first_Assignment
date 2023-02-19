var userNames = ["Admin","Erik","Jerico","Roman","Reign"]

var loginName = "Reign";

for(var i =0; i < userNames.length; i++)
{
    if(userNames[0] == loginName){
        console.log("Hello admin, would you like to see a status report?");
    }else if(userNames[i] == loginName){
        console.log("Hello ", loginName, " thanks for logged in.")
    }
}