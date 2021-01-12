// how to use switch and default
function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
        case 5:
        case 6:
        case 7:
            answer = "something";
            break
        default:
            answer = "nothing";
            break;
    }
    return answer;
}

console.log(caseInSwitch(5));
console.log(caseInSwitch(6));
console.log(caseInSwitch(2));
console.log(caseInSwitch(10));

// objects (property, value)
var ourDog = {
    "name": "Camper",   
    "legs": 5,
    "tails": 1,
    "friends":["everything!"]
};
// accessing object with dot notation
var dogname = ourDog.name;
// accessing object with bracket notation

var doglegs = ourDog["legs"];
// change obect property
ourDog.name = "Happy Camper";
// add property to object
ourDog.speak = "bark"

delete ourDog.legs

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found"
    }
}

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};
var gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents)


var ourArray = []
for (var i = 0; i < 5; i++) {
    ourArray.push (i)
}

// ternary operator (return () if true else : return () if false)
function checkSign(num) {
    return num> 0 ? "positive" : num < 0 ? "negative" : "zero"
}


// var - global scoped , can be updated and redeclared with scope
// let - block scoped, can be updated but not redeclared 
// const - block skoped, neigher updated nor redeclared, must be initialized during declaration 


// use destructuring in api calls

const stats= {
    max:56.79,
    standard_deviation:4.34,
    median:34.54,
    mode:23.87,
    min: -0.75,
    average:35.85,
};

const half = (function() {
    return function half({max,min}) {
        return (max+  min) / 2.0;
    };
})

console.log(stats)
console.log(half(stats))
