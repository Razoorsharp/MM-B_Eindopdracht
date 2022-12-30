d = document;

$(document).ready(function(){


        // -----------------
        // navigation Creator 
        // ------------------
  var navigationMarkup='';
    navigationMarkup += '<div class="mobile-container"> <div class="topnav"> <div class="navGlyphicons"><a href="#"><span class="glyphicon glyphicon-user"></span>'
    navigationMarkup += '</a><a href="#"><span class="glyphicon glyphicon-shopping-cart"></span> </a> </div>'
    navigationMarkup += '<a href="#home" class="active"></a><div class="linkContainer" id="myLinks"><div class="spacer"></div>';
    navigationMarkup += '<a href="#news">Campagne</a>';
    navigationMarkup += '<a href="paginas/recepten/index.html">Recepten</a>';
    navigationMarkup += '<a href="#">Nieuws</a>';
    navigationMarkup += '<div class="spacer"></div>';
    navigationMarkup += '<a href="#">Over ons</a>';
    navigationMarkup += '<a href="paginas/contact/index.html">Contact</a>';
    navigationMarkup += '<a href="#">Shop</a>';
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



           
                
               
                    
                      
                    
                    
                      
                   
                 
              
              
                
                
                
                
          
                
                
                
                
              
             
                
              
           
     