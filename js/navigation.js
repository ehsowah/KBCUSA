  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function aboutFunction() {
  document.getElementById("aboutDropdown").classList.toggle("show");
  hideMinstDropdown()
}

function ministFunction() {
  document.getElementById("minstDropdown").classList.toggle("show");
  hideAboutDropDown()
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
      hideAboutDropDown()
      hideMinstDropdown()
  }
}

function hideAboutDropDown() {
  var myDropdown = document.getElementById("aboutDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
}

function hideMinstDropdown() {
  var myDropdown = document.getElementById("minstDropdown");
  if (myDropdown.classList.contains('show')) {
    myDropdown.classList.remove('show');
  }
}

// humburger button
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav_links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('activeLink');
});

