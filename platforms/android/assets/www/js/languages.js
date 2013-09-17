var languages = {
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
        languages.receivedEvent('deviceready');
        $.mobile.loading('show');
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, Fail);
        CurrentLanguage = window.localStorage.getItem("currentLanguage");
        if (CurrentLanguage == null) CurrentLanguage = "Polish";
        //var appLocation = "file://" + window.location.pathname.replace("/index.html", '');
        //console.log(appLocation);
        //window.resolveLocalFileSystemURI(appLocation+"/Lang", onLangDirSuccess, Fail);
    },
    // Update DOM on a Received Event
        receivedEvent: function(id) {
            console.log('Languages Received Event: ' + id);
    }
};
var SavedLanguages = [];
var CurrentLanguage;
var LanguagesAlreadyLoaded = false;
var AppRootFolder;
var MediaPlayer;

function PlayAudio(src) {
    // Prepends any additional path information
    var url = "/" + AppRootFolder + "/Lang/" + CurrentLanguage + "/Audio" + src;
    if (MediaPlayer!= null) MediaPlayer.stop();
    MediaPlayer = new Media(url, AudioSuccess, Fail);
    MediaPlayer.play();
}
function AudioSuccess() {

}

function SetLanguage(langName) {
    window.localStorage.setItem("currentLanguage", langName);
    MainPage();
}

function onFileSystemSuccess(fileSystem) {
    fileSystem.root.getDirectory("Jargo",
                                 { create: true },
                                 onAppDirSuccess, Fail);

}

function onAppDirSuccess(directory) {
    AppRootFolder = directory.name;
    directory.getDirectory("Lang",
                                 { create: true },
                                 onLangDirSuccess, Fail);
}

function onLangDirSuccess(directory) {
    var directoryReader = directory.createReader();
    directoryReader.readEntries(onReadLangSuccess, Fail);
}

function onReadLangSuccess(langEntries) {
    var deferreds = [];
    $.each(langEntries, function (index, langDir) {
        var deferred = $.Deferred();
        $.when(LoadLanguage(langDir))
            .then(ReadCategories)
            .then(ReadPhrases)
            .done(function () { deferred.resolve() });
        deferreds.push(deferred);
    });
    $.when.all(deferreds)
    .done(PopulatePages);
}

function LoadLanguage(langDir) {
    var deferred = $.Deferred();
    var langObj = {
        "name": langDir.name,
        "path": langDir.fullPath,
        "categories": []
    };

    deferred.resolve(langObj,langDir);

    return deferred.promise();
}

function ReadCategories(langObj, langDir) {
    var deferred = $.Deferred();
    var categoryReader;

    
    categoryReader = langDir.createReader();
    categoryReader.readEntries(function (entries) {
        var categoryFiles = [];
        var categoryObjs = [];
        $.each(entries, function (index, entry) {
            if (entry.isFile &&
                entry.name.indexOf(".json") != -1) {
                var splitName = entry.name.split('.')[0];
                var catObj = {
                    "name": splitName,
                    "phrases":[]
                };
                langObj.categories.push(catObj);
                categoryFiles.push(entry);
                console.log("Category: " + splitName);
            }
        });
        deferred.resolve(langObj,categoryFiles);
    });

    return deferred.promise();
}

function ReadPhrases(langObj, categoryFiles) {
    var deferred = $.Deferred();

    if (categoryFiles.length == 0) {
        SavedLanguages.push(langObj);
        deferred.resolve(langObj);
        return deferred.promise();
    }

    var jsonCalls = [];
    $.each(categoryFiles, function (index, catFile) {
        var indexOfCat;
        var catname = catFile.name.split('.')[0];
        // Find index of category
        for (var i = 0; i < langObj.categories.length; i++) {
            if (langObj.categories[i].name == catname) { indexOfCat = i };
        }
        // Create JSON query for this category
        var query = $.getJSON(catFile.fullPath, function (data) {
            // Callback when complete = add all parsed phrases from JSON file to the language obj
            $.each(data, function (index, phrase) {                
                langObj.categories[indexOfCat].phrases.push(phrase);
            });

        });
        jsonCalls.push(query);
    });

    // Run the JSON queries gathered above
    $.when.all(jsonCalls).done(function () {
        SavedLanguages.push(langObj);
        // when all done resolve this deferred  Next step = PopulateLanguages
        deferred.resolve(langObj);
    });

    return deferred.promise();
}

function PopulatePages() {
    PopulateLangMenu();
    PopulateCategoryMenu();
    PopulatePhraseMenu();
    PopulatePhraseDetails();
    BindLinkEvents();
    $.mobile.loading('hide');
    MainPage();
}

function PopulateLangMenu() {
    var langMenuTemplate = Handlebars.templates['langMenu'];
    $("#LanguageList").html(langMenuTemplate(SavedLanguages));

}

function PopulateCategoryMenu() {
    var categoryMenuTemplate = Handlebars.templates['categoryList'];
    $("#app").append(categoryMenuTemplate(SavedLanguages));

}

function PopulatePhraseMenu() {
    var phraseMenuTemplate = Handlebars.templates['phraseList'];
    $("#app").append(phraseMenuTemplate(SavedLanguages));
}

function PopulatePhraseDetails() {
    var phraseDetailTemplate = Handlebars.templates['phraseDetails'];
    $("#app").append(phraseDetailTemplate(SavedLanguages));
}

function BindLinkEvents() {

    $(".langButton").each(function(){
        $(this).on('touchend', function () {
            var url = $(this).attr("id").replace(/^langButton_/, '');
            url += "_Page";
            Page(url);
        });
    });

    $(".catButton").each(function () {
        $(this).on('touchend', function () {
            var url = $(this).attr("id").replace(/^catButton_/, '');
            url += "_Page";
            Page(url);
        });
    });

    $(".phraseButton").each(function () {
        $(this).on('touchend', function () {
            var url = $(this).attr("id").replace(/^phraseButton_/, '');
            url += "_Page";
            Page(url);
        });
    });

    $(".contactButton").each(function () {
        $(this).on('touchend', function () {
            Page("contact_Page");
        });
    });

    $(".contactForm-Done").each(function () {
        $(this).on('touchend', function () {
            Page("optionPage");
        });
    });

    $(".backButton").each(function () {
        $(this).on('touchend', function () {
            history.back();
        });
    });

}

function Fail(error) {
    console.log("error: "+error.code);
}

function OutPut(obj) {
    console.log(obj);
}
