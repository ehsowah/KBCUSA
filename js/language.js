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
            
            $("h1").css("font-size", "60px");

            // $(this).hover(function(){
            //     $(this).css("color", "#0088a9");
            //     $("h1").css("color", "white");
            //     }, function(){
            //     $(this).css("color", "black");
            //     $("button").css("color", "white");
            //     $("h1").css("color", "white");
            //   });
              
        })
    })
}

function loadEnglishLanguage() {
    $.ajax({
        url: "json/language.json"
    }).done(function(data) {
        
        $(".lang").each(function(index, element) {
            $(this).text(data.english[$(this).attr('key')]);
            $(this).css("font-family","Montserrat")
            $(this).css("font-size", "16px");
            $("h1").css("font-size", "40px");
        })
    })
}