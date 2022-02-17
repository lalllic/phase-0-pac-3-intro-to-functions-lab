// shout
function shout(string) {
    return string.toUpperCase();
}

// whisper
function whisper(string) {
    return string.toLowerCase();
}

// log shout
function logShout(string) {
    return console.log(string.toUpperCase());
}

// log whisper
function logWhisper(string) {
    return console.log(string.toLowerCase());
}


// headphone roommate
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) return "I can't hear you!";
    if (string === string.toUpperCase()) return "YES INDEED!";
    if (string === "Let's have dinner together!") return "I would love to!";
}


/*
// doesn't work beacuse i convert rather than check?
function sayHiToHeadphonedRoommate(string) {
    switch(string) {
        case string.toLowerCase():
            "I can't hear you!";
            break;
        case string.toUpperCase():
            "YES INDEED!";
            break;
        case "Let's have dinner together!":
            "I would love to!";
            break;
    }
}
*/
// sayHiToHeadphonedRoommate("Let's have dinner together!");