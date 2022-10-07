  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myNavFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function myNavFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }

      var myDropdown2 = document.getElementById("myDropdown2");
    if (myDropdown2.classList.contains('show')) {
      myDropdown2.classList.remove('show');
    }
    }

    
  
  }