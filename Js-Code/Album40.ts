function make_album(artistName,albumTitle,numberOfTracks = 0)
{
    let newAlbum = {
        artist_name: artistName,
        title:albumTitle,
        totalTracks:numberOfTracks
    }
    return newAlbum;
}

let songAlbums = {
    artist_name: "",
    title:"",
    totalTracks:0
}

songAlbums = make_album("Elton john","title one");
for(var key in songAlbums) {
    var value = songAlbums[key];
    console.log(value);
}


songAlbums = make_album("Micheal jakson","title two");
for(var key in songAlbums) {
    var value = songAlbums[key];
    console.log(value);
}

songAlbums = make_album("Ellie goulding","title three",15);
for(var key in songAlbums) {
    var value = songAlbums[key];
    console.log(value);
}