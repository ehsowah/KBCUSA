$(document).ready(function() {

    $(".lang-menu").click( evt => {
       
        if (evt.currentTarget.id == "ka") {
            Cookies.set("language", "ka", {expires: 3});

            $("#nav-placeholder").load("navigationBar.html");
            loadKarenLanguage();
        } else if (evt.currentTarget.id == "en"){
            Cookies.set("language", "en", {expires: 3});
            $("#nav-placeholder").load("navigationBarEnglish.html");
            loadEnglishLanguage();
        }
    });
});

function loadKarenLanguage() {
    $.ajax({
        url: "json/language.json"
    }).done(function(data) {
        
        $(".lang").each(function(index, element) {
            $(this).text(data.karen[$(this).attr('key')]);
        })
    })
}

function loadEnglishLanguage() {
    $.ajax({
        url: "json/language.json"
    }).done(function(data) {
        
        $(".lang").each(function(index, element) {
            $(this).text(data.english[$(this).attr('key')]);
        })
    })
}