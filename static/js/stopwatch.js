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
