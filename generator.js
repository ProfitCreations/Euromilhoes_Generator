/**
 * Latest statistics updated at 14.04.2019
 */

// Variable to hold number statistics from Euromilhoes
let numbers = {
    1 : 125,
    2 : 102,
    3 : 122,
    4 : 136,
    5 : 126,
    6 : 121,
    7 : 123,
    8 : 112,
    9 : 111,
    10 : 130,
    11 : 123,
    12 : 120,
    13 : 119,
    14 : 126,
    15 : 131,
    16 : 114,
    17 : 135,
    18 : 106,
    19 : 136,
    20 : 120,
    21 : 127,
    22 : 103,
    23 : 140,
    24 : 120,
    25 : 127,
    26 : 133,
    27 : 124,
    28 : 119,
    29 : 131,
    30 : 130,
    31 : 121,
    32 : 104,
    33 : 96,
    34 : 108,
    35 : 114,
    36 : 117,
    37 : 131,
    38 : 131,
    39 : 120,
    40 : 112,
    41 : 101,
    42 : 124,
    43 : 121,
    44 : 139,
    45 : 124,
    46 : 94,
    47 : 100,
    48 : 113,
    49 : 125,
    50 : 143
};

// Variable to hold star statistics from Euromilhoes
let stars = {
    1 : 222,
    2 : 242,
    3 : 247,
    4 : 204,
    5 : 229,
    6 : 212,
    7 : 219,
    8 : 246,
    9 : 238,
    10 : 159,
    11 : 146,
    12 : 48
};

// Defining empty array
let numbersArray = [];

// Variable to hold chosen number
let chosenNumber;

// Defining variable array to hold chosen numbers
let chosenNumbers = [];

// Function to add numbers from num obj to the array
let addNum = function(number, times) {
    var i;
    for (i = 0; i < times; i++) {
        numbersArray.push(number);
    }
};


// function that will read num object propertys and use addNum
let readNum = function() {
    for (let i = 1; i < 51; i++) {
        addNum(i, numbers[i]);
    }
};

readNum();

// console.log("numbersArray -> ", numbersArray);

// function to shuffle arr items
function shuffle(array) {

    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;

    }

    return array;

}

shuffle(numbersArray);

// console.log("NumbersArray -> ", numbersArray);

// Function to pick a number from numbersArray
let pickNumber = function() {
    
    chosenNumber = numbersArray[Math.floor(Math.random()*numbersArray.length)];

    return chosenNumbers.push(chosenNumber);
};





// Function to remove a chosen number from numbersArray
let removeChosenNumber = function(x) {

    for (let i = 0; i < numbersArray.length; i++) {

        if (x === numbersArray[i]) {
            numbersArray.splice(i, 1);
        }

    }

    return checkRemoveChosenNumber(x);

};

// function to check if chosenNumber is removed from numbersArray
let checkRemoveChosenNumber = function(y) {

    for (let i = 0; i < numbersArray.length; i++) {

        if (y === numbersArray[i]) {
            return removeChosenNumber(y);
        }

    }

};



/**
 * Function to pick 5 numbers using the 
 * pickNumber,
 * removeChosenNumber and
 * checkRemoveNumber functions
 */

 let pick5Numbers = function() {

    for (let i = 0; i < 5; i++) {

        pickNumber();
        checkRemoveChosenNumber(chosenNumber);
    }

 };

 pick5Numbers();


//  console.log("chosenNumber is -> ", chosenNumber);
// console.log("Spliced numbersArray -> ", numbersArray);
// console.log("chosenNumbers -> ", chosenNumbers);

// Sort chosenNumbers
chosenNumbers.sort(function(a, b) {return a-b});
// console.log("chosenNumbers -> ", chosenNumbers);


/**
 * Stars
 */

 // Defining stars empty array
 let starsArray = [];

// Function to add stars from star object to starsArray
let addStar = function (star, times) {

    for (let i = 0; i < times; i++) {
        starsArray.push(star);
    }

};

// Function that will read stars object propertys and use addStar function 
let readStar = function() {
    
    for (let i = 1; i < 13; i++) {
        addStar(i, stars[i]);
    }

};

readStar();

// console.log("starsArray -> ", starsArray);

// Shuffle starsArray
shuffle(starsArray);

// console.log("Shuffled starsArray -> ", starsArray);

// Defining chosen star variable
let chosenStar;

// Defining chosen stars array
let chosenStarsArray = [];

// Function to pick a random star from starsArray
let pickStar = function() {

    chosenStar = starsArray[Math.floor(Math.random()*starsArray.length)];

    return chosenStarsArray.push(chosenStar);
};

// pickStar();

// console.log("chosenStar -> ", chosenStar);

// Function to remove a chosenStar from starsArray
let removeChosenStar = function(x) {

    for (let i = 0; i < starsArray.length; i++) {
        
        if (x === starsArray[i]) {

            starsArray.splice(i, 1);
        }

    }

    return checkRemoveChosenStar(x);

};

let checkRemoveChosenStar = function(y) {

    for (let i = 0; i < starsArray.length; i++) {

        if (y === starsArray[i]) {
            return removeChosenStar(y);
        }

    }

};


// console.log("Removed starsArray", starsArray);

// console.log("chosenStarsArray -> ", chosenStarsArray);

/**
 * Function to pick 2 random stars from starsArray
 * using the following functions:
 * pickStar,
 * removeChosenStar and
 * checkRemoveChosenStar
 */

 let pick2Stars = function() {

    for (let i = 0; i < 2; i++) {

        pickStar();
        checkRemoveChosenStar(chosenStar);

    }

 };

 // Run pick2Stars()
 pick2Stars();

 // Sort chosenStarsArray
 chosenStarsArray.sort(function(a, b) {return a-b});

// console.log("chosenStarsArray -> ", chosenStarsArray);

console.log("Your Generated Numbers and Stars -> ", chosenNumbers, " + ", chosenStarsArray );