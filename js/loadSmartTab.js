$('#smarttab').smartTab({

    // Selected Tab, 0 = first tab
    selected: 0,  
  
    // theme name
    theme: 'brick',
  
    // Justified layout for tabs
    justified: false,
  
    // Auto adjust content height
    autoAdjustHeight: true,
  
    // Supports for Back button
    backButtonSupport: true,
    
    // Enables URL hash
    enableURLhash: true,
      
    // Configs animations here
    transition: {
  
      // <a href="https://www.jqueryscript.net/animation/">Animation</a> effect on navigation
      // none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
      animation: 'slideHorizontal',
      
      // Animation speed.
      speed: '400',
      
      // Easing function.
      // Requires jQuery easing plugin
      easing: '',
      
      // Only used if animation is 'css'
      prefixCss: '',
      fwdShowCss: '',
      fwdHideCss: '',
      bckShowCss: '',
      bckHideCss: '',
  
    },
  
    // Auto switches between tabs
    autoProgress: {
      
      // enable
      enabled: false,
      
      // interval in ms
      interval: 3500,
  
      // stop on focus
      stopOnFocus: true
  
    },
  
    // Keyboard navigation
    keyboardSettings: {
  
      // enable
      keyNavigation: true,
  
      // keycodes
      keyLeft: [37, 38],
      keyRight: [39, 40],
      keyHome: [36],
      keyEnd: [35],
  
    },
  
    // CSS Class settings
    style: {
      mainCss: 'st',
      navCss: 'nav',
      navLinkCss: 'nav-link',
      contentCss: 'tab-content',
      contentPanelCss: 'tab-pane',
      themePrefixCss: 'st-theme-',
      justifiedCss: 'st-justified',
      anchorDefaultCss: 'default',
      anchorActiveCss: 'active',
      loaderCss: 'st-loading'
    },
  
    // Callback function for content loading
    getContent: null,
  
  });