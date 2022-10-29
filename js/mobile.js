if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    // some code..
    const navigationBar = document.getElementById('nav-placeholder');
    const footer = document.getElementById('footer-placeholder');
    const container = document.getElementById('container');

    navigationBar.remove();
    footer.remove();
    container.style.padding = '5%';
   } else {
       console.log('user in on web')
   }