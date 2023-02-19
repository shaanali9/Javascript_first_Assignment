let personName: string = 'Eric John';
console.log("Hello", personName ,", would you like to learn some Python today?");
console.log();
personName = personName.toUpperCase();
console.log(personName, " in upper case");

console.log();
personName = personName.toLowerCase();
console.log(personName, " in lower case");

console.log();
personName = TitleCase(personName);
console.log(personName, " in Title case");

function TitleCase(string)
{
    var sentence = string.toLowerCase().split(" ");

    for(var i = 0; i < sentence.length; i ++)
    {
        sentence[i] = sentence[i][0].toUpperCase + sentence[i].slice(1);
    }    
    return sentence.join(" ");
}