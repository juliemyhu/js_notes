function Stopwatch() {

    let startTime,endTime,running, duration = 0;
    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started.');
        running = true;

        startTime = new Date();


    };

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch has not started.');
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }; 

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0
    };

    Object.defineProperty(this,'duration', {
        get:function() {
            return duration;
        }
    });
}

function ageInDays() {
    var birthYear = prompt('what year were you born?');
    var calculateAge = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + calculateAge + ' days old')
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)

}

const sw = new Stopwatch()

function createStopwatch(start) {
    sw.start();
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('Timer: ' + sw.duration)
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer)
    document.getElementById('flex-box-result').appendChild(h1)
}

function stopStopwatch(sw) {
return sw.stop
}

// Rock, Paper, Scissors

function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice);

    console.log(yourChoice, botChoice)
    message = finalMessage(results);
    console.log(message)
    rpsFrontEnd(yourChoice.id, botChoice, message)
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0},
    }
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore]
}

function finalMessage([yourScore, computerScore]){
    if (yourScore === 0) {
        return {'message':'You lost', 'color':'red'};
    } else if (yourScore === 0.5) {
        return {'message':'You tied', 'color':'yellow'};
    } else {
        return {'message':'Won', 'color':'green'};
    }  
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] +"; font-size: 60px; padding:30px; '>" + finalMessage['message'] + "</h1>"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(234,38,24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i])
}

function buttonColorChange(buttonThingy) {
    if (buttonThingy.value === 'red') {
        buttonRed();
    } else if (buttonThingy.value === 'green') {
        buttonsGreen();
    } else if (buttonThingy.value === 'reset'){
        buttonColorReset();
    } else if (buttonThingy.value === 'random') {
        randomColors();
    }
}