$(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        // some code..
        modifyForDevices();
       } else {
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
       }
  
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

function modifyForDevices() {
    const container = document.getElementById('container');
    container.style.padding = '2%';
}