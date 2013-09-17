var promiseTest = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        promiseTest.receivedEvent('deviceready');
        TestPromises();
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('PromiseTest Received Event: ' + id);
    }
};

function TestPromises() {
    var deferred = $.Deferred();
    deferred.
    done(function (val) {
        console.log(val);

    }).
    done(chain1).
    done(chain2).
    done(chain3).
    done(chain4);   

    deferred.resolve("Hello World");
    
    $.when(MakeAPromise())
    .done(MakeASecondPromise)
    .done(MakeAThirdPromise);

}


function chain1() {
    console.log("1");
}

function chain2() {
    console.log("2");
}

function chain3() {
    console.log("3");
}

function chain4() {
    console.log("4");
}

var testObjs = [];

function MakeAPromise() {
    var deferred = $.Deferred();
    console.log("making a promise");

    setTimeout(function () {
        var obj1 = { "name": "obj1" };
        var obj2 = { "name": "obj2" };
        var objArr = [];
        objArr.push(obj1);
        objArr.push(obj2);

        deferred.resolve(objArr);
    }, 3000);

    return deferred.promise();
}

function MakeASecondPromise(val) {
    var deferred2 = $.Deferred();
    console.log("Promise1 Complete");
    console.log("making a 2nd promise");

    setTimeout(function () {
        $.each(val, function (index, testObj) {
            var subObj1 = { "name": testObj.name + ": sub1" };
            var subObj2 = { "name": testObj.name + ": sub2" };
            var subs = [];
            subs.push(subObj1);
            subs.push(subObj2);
            testObj.subObjs = subs;
        });
        deferred2.resolve(val);
    }, 3000);

    return deferred2.promise();
}

function MakeAThirdPromise(val) {
    var deferred3 = $.Deferred();
    console.log("Promise2 Complete");
    console.log("making a 3rd promise");

    setTimeout(function () {
        testObjs = val;
        deferred3.resolve("yay3");
        $.each(testObjs, function (index, testObj) {
            console.log(testObj.name);
            
            $.each(testObj.subObjs, function (index, sub) {
                console.log(sub.name);
            });
        });
    }, 3000);

    return deferred3.promise();
}