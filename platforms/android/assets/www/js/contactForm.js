/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var contactForm = {
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
        contactForm.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('ContactForm Received Event: ' + id);
    }
};

function checkEmail(emailForm) {
    console.log("******************************************")
    console.log("checking email form");
    console.log("******************************************")
    console.log("form name  = " + emailForm.name.value);
    console.log("form email = " + emailForm.email.value);
    console.log("form subject  = " + emailForm.subject.value);
    console.log("form message  = " + emailForm.message.value);
    console.log("******************************************")

    var serializedForm = $("#emailForm").serialize();
    console.log("serform = " + serializedForm);
    var formContents = {
        name: emailForm.name.value,
        email: emailForm.email.value,
        subject: emailForm.subject.value,
        message: emailForm.message.value
    };
    submitEmail(formContents);
    return false;
}

function submitEmail(formContents) {
    $.ajax({
        url: 'http://www.sovatest.netai.net/testJSONP.php',
        dataType: "jsonp",
        type: "GET",
        crossDomain: true,
        data: formContents,
        jsonpCallback: "emailCallback",
        beforesend: function (jqXHR, settings) {
            console.log("sendingEmailRequest");
            $.mobile.loading('show');

        },
        success: function (data, textStatus, jqXHR) {
            console.log("emailSuccess");

        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log("emailError = " + textStatus + " " + errorThrown);
        },
        complete: function (jqXHR, textStatus) {
            console.log("emailComplete");
            $.mobile.loading('hide');
            PageNoHistory("contact_thankyou_Page");
        }
    });
    return false;
}

function emailCallback(data) {
    console.log("callback data = " + data);
}

function emailPreSend(jqXHR, settings) {
    console.log("sendingEmailRequest");

}

function emailSuccess(data, textStatus, jqXHR) {
    console.log("emailSuccess");

}

function emailError(jqXHR, textStatus, errorThrown) {
    console.log("emailError = " + errorThrown);

}

function emailComplete(jqXHR, textStatus) {
    console.log("emailComplete");
}