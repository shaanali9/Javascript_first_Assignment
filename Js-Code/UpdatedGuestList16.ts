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