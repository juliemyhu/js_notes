var myObj = {
    defaultErrorMessage: 'There was an error',
    queryDataThenAddThenWrite: function(shouldAdd,toAdd) {
        for ( var i=0; i<= toAdd; i++) {
            var someObjects = [];
            var newObject = { objectId: i, objectName:'Placeholder ' + i};
            someObjects.push(newObject);
        }
        asyncGetData().then(
            function(data) {
                if (shouldAdd === true) data.push(someObjects);

            },
            function() {
                setTimeout(function() {
                    console.log(this.defaultErrorMessage);
                }, 1);
            }
        );
        data.forEach(function(x,y) {
            if (x/2 == 0) {
                console.log(y.objectName);
            }
        });
    }
};

var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };


console.log(person.firstName)
myObj.queryDataThenAddThenWrite(true, 5)