$(document).ready(function() {
    $("li a").click( evt => {

        if (evt.currentTarget.text == "Karen") {
            loadKarenLanguage();
        } else if (evt.currentTarget.text == "English") {
            loadEnglishLanguage();
        }
    });
});

function loadKarenLanguage() {
    $.ajax({
        url: "language.json"
    }).done(function(data) {
        
        $(".lang").each(function(index, element) {
            $(this).text(data.karen[$(this).attr('key')]);
            $(this).css("font-family","Saw cfcr000")
            $(this).css("font-size", "23px");
        })
    })
}

function loadEnglishLanguage() {
    $.ajax({
        url: "language.json"
    }).done(function(data) {
        
        $(".lang").each(function(index, element) {
            $(this).text(data.english[$(this).attr('key')]);
            $(this).css("font-family","Montserrat")
            $(this).css("font-size", "16px");
        })
    })
}