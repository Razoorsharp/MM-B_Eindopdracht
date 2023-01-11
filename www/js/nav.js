d = document;

$(document).ready(function(){


        // -----------------
        // navigation Creator 
        // ------------------
  var navigationMarkup='';
    navigationMarkup += '<div class="mobile-container"> <div class="topnav"> <div class="navGlyphicons"><a href="/paginas/account/index.html"><span class="glyphicon glyphicon-user"></span>'
    navigationMarkup += '</a><a href="/paginas/shop/cart/index.html"><span class="glyphicon glyphicon-shopping-cart"></span> </a> </div>'
    navigationMarkup += '<a href="#home" class="active"></a><div class="linkContainer" id="myLinks"><div class="spacer"></div>';
    navigationMarkup += '<a href="/paginas/campagne">Campagne</a>';
    navigationMarkup += '<a href="/paginas/recepten/index.html">Recepten</a>';
    navigationMarkup += '<a href="/paginas/nieuws/index.html">Nieuws</a>';
    navigationMarkup += '<div class="spacer"></div>';
    navigationMarkup += '<a href="/paginas/overons/index.html">Over ons</a>';
    navigationMarkup += '<a href="/paginas/contact">Contact</a>';
    navigationMarkup += '<a href="/paginas/shop/index.html">Shop</a>';
    navigationMarkup += '<div class="spacer"></div></div>';
    navigationMarkup += ' <a href="#" class="icon" id="navClick" ><i class="fa fa-bars"></i></a></div></div>';

  $('#navigation').append(navigationMarkup);

  var navBtn = d.getElementById("navClick");

navBtn.onclick = function() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    }else {
      x.style.display = "block";
    }
  }

});



           
                
               
                    
                      
                    
                    
                      
                   
                 
              
              
                
                
                
                
          
                
                
                
                
              
             
                
              
           
     