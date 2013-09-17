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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        $(document).on("pagebeforechange", function (e, ob) {
            if (typeof ob.toPage === 'string') {
                var str = "" + ob.toPage;
                if (str.indexOf("#") < 0) {
                    e.preventDefault();
                    history.go(1);
                }
            }
        });
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};

function MainPage() {
    var lang = window.localStorage.getItem("currentLanguage");
    if (lang == null) {
        window.localStorage.setItem("currentLanguage", "Polish");
    }
    var pageRef = lang + "_Page";
    Page(pageRef);
}

function Page(pageRef) {
    $.mobile.changePage("#" + pageRef, {
        transition: "fade"
    });
}

function PageNoHistory(pageRef) {
    $.mobile.changePage("#" + pageRef, {
        transition: "fade",
        changeHash: false
    });
}

