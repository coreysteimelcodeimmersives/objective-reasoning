// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(usr){
    return usr.userRole === 'ADMIN'
    ?  true
    : false;
}

function getEmail(usr){
    return `${usr.firstName.toLowerCase()}.${usr.lastName.toLowerCase()}@codeimmersives.com`
}

function getPlaylistLength(obj){
    return obj.songs.length;
}






// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};