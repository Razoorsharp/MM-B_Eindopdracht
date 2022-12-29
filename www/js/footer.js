d = document;
    //   if(!$("footer")) return false;
      $(document).ready(function(){
          // FOOTER CRATION
      var footerMarkup ='';
      footerMarkup += '<div class="cardSpacer"><div class=footerIcons>';
      footerMarkup += '<img src="/images/cuisinelogo.png" alt="cuisine logo"><div class="footerIconsP">  <a><p></p></a> <a><p></p></a><a><p></p></a> </div> </div>';
      footerMarkup += '<div class="footerText"><ul class="footerLinks">';
      footerMarkup += '<a href="paginas/campagne/index.html"><li>Campagne</li></a>';
      footerMarkup += '<a href="paginas/recepten/index.html"><li>Recepten</li></a>';
      footerMarkup += '<a href="paginas/artikellen/index.html"><li>Nieuws</li></a>';
      footerMarkup += '<a href="paginas/over_ons/index.html"><li>Over Cuisine</li></a>';
      footerMarkup += '<a href="paginas/contact/index.html"><li>Contact</li></a>';
      footerMarkup += '<a href="paginas/shop/index.html"><li>Shop</li></a>';
      footerMarkup += '</ul>';
      footerMarkup += '<ul class=footerContact>';
      footerMarkup += '<li>Cuisine .B.V.</li><li>Egelenburg 150-152</li><li>1081 GK | Amsterdam</li></ul>';
      footerMarkup += '<p class="footerCopyright">Cuisine B.V. copyright 2018</p>';
      footerMarkup += '</div></div>';
  
      $("footer").append(footerMarkup);
  //    !!!!END OF CREATORS !!!
      });// enf of document ready function