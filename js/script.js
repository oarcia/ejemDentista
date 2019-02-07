
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
  });
$(document).ready(function(){
    //SideNav
    $('.sidenav').sideNav();
    //Slider
    $('.slider').slider({
        indicators:false,
        heiht:500,
        transition:500,
        interval:6000
    })
  //Carta
    $('.materialboxed').materialbox();
  //ScrollSpy
    $('.scrollspy').scrollSpy();
})
