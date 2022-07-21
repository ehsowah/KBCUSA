$(function(){
  var myCookie = Cookies.get('language');
  console.log(myCookie)

    if (myCookie == 'en') {
        $("#nav-placeholder").load("navigationBarEnglish.html");
        loadEnglishLanguage();
    } else {
        $("#nav-placeholder").load("navigationBar.html");
        loadKarenLanguage();
    }

    
    $("#footer-placeholder").load("footer.html");
  });


  function loadKarenLanguage() {
    $.ajax({
        url: "json/language.json"
    }).done(function(data) {
        
        $(".lang").each(function(index, element) {
            $(this).text(data.karen[$(this).attr('key')]);
            
            $("h1").css("font-size", "60px");
              
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