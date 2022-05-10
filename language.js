$(document).ready(function() {
    

    $(".lang-menu").click( evt => {
       

        if (evt.currentTarget.id == "ka") {
            $("#nav-placeholder").load("navigationBar.html");
            
        } else if (evt.currentTarget.id == "en"){
            $("#nav-placeholder").load("navigationBarEnglish.html");
        
        }

        
    });
});

function loadKarenLanguage() {
    $.ajax({
        url: "language.json"
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
        url: "language.json"
    }).done(function(data) {
        
        $(".lang").each(function(index, element) {
            $(this).text(data.english[$(this).attr('key')]);
            $(this).css("font-family","Montserrat")
            $(this).css("font-size", "16px");
            $("h1").css("font-size", "40px");
        })
    })
}