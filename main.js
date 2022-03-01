// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin(usr){
    return usr.userRole === 'ADMIN'
    ?  true
    : false;
}

// Write a function, getEmail, that given a user object, return the users' Code Immersives email. We'll assume that a Code Immersives email is always in firstName.lastName@codeimmersives.com form.

// Examples

// getEmail({
//     firstName: 'Brian'
//     lastName: 'Carela'
// })
// => 'brian.carela@codeimmersives.com'

// getEmail({
//     firstName: 'Anthony',
//     lastName: 'DeRosa'
// })
// => 'anthony.derosa@codeimmersives.com'

function getEmail(usr){
    return `${usr.firstName.toLowerCase()}.${usr.lastName.toLowerCase()}@codeimmersives.com`
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