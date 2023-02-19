var listOfPlaces = [];
listOfPlaces[0] = "Rome";
listOfPlaces.push("New York");
listOfPlaces.push("Barcelona");
listOfPlaces.push("Brazil");
listOfPlaces.push("Portugal");


for (var i = 0; i < listOfPlaces.length;i++)
{
    console.log(listOfPlaces[i]);
}

var listToSort = listOfPlaces;

listToSort.sort();
console.log("sorted")
for (var i = 0; i < listToSort.length;i++)
{
    console.log(listToSort[i]);
}

console.log("unsorted")
for (var i = 0; i < listOfPlaces.length;i++)
{
    console.log(listOfPlaces[i]);
}


listToSort.reverse();
for (var i = 0; i < listToSort.length;i++)
{
    console.log(listToSort[i]);
}

for (var i = 0; i < listOfPlaces.length;i++)
{
    console.log(listOfPlaces[i]);
}

listOfPlaces.reverse();
for (var i = 0; i < listOfPlaces.length;i++)
{
    console.log(listOfPlaces[i]);
}


listOfPlaces.reverse();
for (var i = 0; i < listOfPlaces.length;i++)
{
    console.log(listOfPlaces[i]);
}


listOfPlaces.sort();
for (var i = 0; i < listOfPlaces.length;i++)
{
    console.log(listOfPlaces[i]);
}

listOfPlaces.sort();
listOfPlaces.reverse();
for (var i = 0; i < listOfPlaces.length;i++)
{
    console.log(listOfPlaces[i]);
}