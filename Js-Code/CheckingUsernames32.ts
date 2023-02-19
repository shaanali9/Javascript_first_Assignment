var current_users = ["Admin","Erik","Jerico","Roman","Reign"];
var new_users = ["Admin","Rick","Jerico","Rees","Rashid"];

for(var i = 0; i < new_users.length; i++){
    for(var j =0; j < current_users.length; j++){
        if(new_users[i].toLowerCase() == current_users[j].toLowerCase())
        {
            console.log("You need to Enter a new user name.");
        }
        else
        {
            console.log("You canuse this user name.");
        }
    }
}