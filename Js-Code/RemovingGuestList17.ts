var guestListNew = ["Ahmad","Shahid","Rashid"];


for (var i = 0; i < guestListNew.length;i++)
{
console.log("Hey ",guestListNew[i], " you are invited at dinner at hotel.");
}
console.log(guestListNew[0], " couldn't make it to dinner.");
console.log("So new list is this.");
guestListNew[0] = "Zulfiqar";

for (var i = 0; i < 3;i++)
{
console.log("Hey ",guestListNew[i], " you are invited at dinner at hotel.");
}

console.log("Hey Guys I found a bigger table at hotel.");
guestListNew.splice(3,0,"ALi");
for (var i = 0; i < guestListNew.length;i++)
{
console.log("Hey ",guestListNew[i], " you are invited at dinner at hotel.");
}
console.log("I can invite only two people now.")

for (var i = 0; i < guestListNew.length-2;i++)
{
    var removedGuest = guestListNew.pop();
    console.log(removedGuest, "you are not invited to dinner anymore.");
}

for (var i = 0; i < guestListNew.length;i++)
{
    console.log("Hey ",guestListNew[i], " you are invited at dinner at hotel.");
}
for (var i = 0; i < guestListNew.length;i++)
{
    guestListNew.pop();
}

console.log(guestListNew.length);