(function() {

    var hamburger = {
      navToggle: document.querySelector('.nav-toggle'),
      nav: document.querySelector('.nav'),
  
      doToggle: function(e) {
        e.preventDefault();
        this.nav.classList.toggle('menu');
        this.navToggle.classList.toggle('expanded');
        
      }
    };
  
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e);});
    hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e);});
  
  }());