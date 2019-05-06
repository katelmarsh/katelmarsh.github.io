//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    var arr = [];
    for (var key in object) {
        arr.push(object[key]);
    }
    return arr;
}


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(data) {
    /*
    I : [Object] data - any Object 
    O : [String] - all keys with spaces in between 
    C : 
     - for loop 
     - concatonate 
     - conditional -- if typeof is string, concatonate 
     - OR Object.keys(data) && arr.join(" ")
    E : N/A in this problem 
    */
    /*
    another method:
    return Object.keys(data);.join(" ");
    
    */

    var array = [];
    for (var key in data) {
        array.push(key);
    }
    var string = array.join(" ");
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    /*
   I : [Object] object - any Object 
   O : [String] - all String keys with spaces in between 
   C : 
    - if typeof is string, concatonate 
    - arr.join(" ")
   E : needs to be a string 
   */
    /*
     var string = "";
     for (var key in object){
         if (typeof object[key] === 'string'){
             string += object[key] + " ";
         }
     }
     string.trim();
     
     return string;
     */
    var array = [];
    for (var key in object) {
        if (typeof object[key] === 'string') {
            array.push(object[key]);
        }
    }
    var string = array.join(" ");
    return string;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)) {
        return 'array';
    }
    else if (typeof collection === 'object') {
        return 'object';
    }
    else return 'neither';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    /*
    I - [string] string
    O - capitalized String
    C - 
    - use string[0]
    - charAt
    E
    */

    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var array = string.split(" ");
    var newString = [];
    for (var i = 0; i < array.length; i++) {
        newString.push(capitalizeWord(array[i]));
    }
    return newString.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return "Welcome " + capitalizeWord(object.name) + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    return capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if (Array.isArray(object['noises']) && object['noises'].length > 0) {
        return object['noises'].join(' ');
    }
    else {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.includes(word)) {
        return true;
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
    object['friends'].push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (object.hasOwnProperty("friends")) {
        var friends = object.friends;
        for (var i = 0; i < friends.length; i++) {
            if (friends[i] === name) {
                return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    /*
    1) identify <name>'s friends list
        - iterate over array
        - check each array[i].name 
    2) checked every name against that friends list
    3) save the names not in the list
    */
    var nonFriends = [];
    var friends;
    array.forEach(function(person) {
        if (person.name === name) {
            friends = person.friends;
        }
    });

    array.forEach(function(person) {
        if (!friends.includes(person.name) && person.name !== name) {
            nonFriends.push(person.name);
        }
    });
    return nonFriends;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    if (object[key] !== undefined) {
        object[key] = value;
    }
    else {
        object[key] = value;
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for (var key in object) {
        for (var i = 0; i < array.length; i++) {
            if (key === array[i]) {
                delete object[key];
            }
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    var newArray = array.filter(function(element, index) {
        return array.indexOf(element) >= index;
    });
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}