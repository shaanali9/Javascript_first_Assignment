var guestList = [
    {Guest:"Ahmad"}
    ,
    {Guest:"Shahid"}
    ,
    {Guest: "Rashid"}
];

const guestArray = guestList[0];

for (var i = 0; i < 3;i++)
{
console.log("Hey ",guestList[i].Guest, " you are invited at dinner at hotel.");
}
console.log(guestList[0].Guest, " couldn't make it to dinner.");
console.log("So new list is this.");
guestList[0].Guest = "Zulfiqar";

for (var i = 0; i < 3;i++)
{
console.log("Hey ",guestList[i].Guest, " you are invited at dinner at hotel.");
}