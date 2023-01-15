// code for the main page 
d = Document;

$(document).ready(function(){

$(".no-JS").remove();   // removes warning div for the site if JS is disabled. 

// Page resolution RWD variable defining. 
var pageResForIcons = '';
if (!window.matchMedia('(min-width: 768px)').matches) {
	pageResForIcons = '32px';
} 

// boeken card creator. 
$.getJSON("/json/boeken.json", function(data){
    var boekenMarkup = '';
    var bookCount =0;
    console.log(data);
    $.each(data, function(key, value){
        console.log(value);
        if (bookCount <2){
            bookCount++
              
        boekenMarkup += `<div class="boekenCard"> <div class="boekenCardBg" style="background-image: url('${value.image}');"></div>`; 
        boekenMarkup += '<p class="boekPrijs">'+ value.prijs +'</p>';
        boekenMarkup += '<div class="cardContent">';		
        boekenMarkup += '<p>'+ value.description +'</p><br><hr>';
        boekenMarkup += '<h2>'+ value.title +'</h2>';
        boekenMarkup += '<button>'+ value.buttonName +'</button>';
        boekenMarkup += '</div></div></div>';   
        }
       
    });
    $('.boekenCardHolder').append(boekenMarkup);
});


// Artikellen Card ceator
$.getJSON("/json/artikellen.json", function(data){
    var artikellenMarkup = '';
    console.log(data);
    $.each(data, function(key, value){
        console.log(value);
        artikellenMarkup += '<a href="'+ value.url +'">'
        artikellenMarkup += '<div class="artikelCard"><div class="cardSpacer"><div class="cardContent">';        
        artikellenMarkup += '<h2>'+ value.title +'</h2>';
        artikellenMarkup += '<p>'+ value.tekstPreview +'</p>';		
        artikellenMarkup += '<img src="'+ value.image +'" alt="'+ value.title +'">';
        artikellenMarkup += '<button>Volledig Artikel</button>';
        artikellenMarkup += '</div></div></div></a>';    
    });
    $('.artikelCardHolder').append(artikellenMarkup);
});

// recepten Card ceator @note: nog afmaken
$.getJSON("./json/recepten.json", function(data){
    var receptenMarkup = '';
    var receptCount = 0;
    $.each(data, function(key, value){
        receptCount++;
        console.log("recept count op = "+receptCount)
        if(receptCount == 4)return; // op de hoofd pagina willen we maar 3 recepten zien. dus kappen we hem hier af
        // sorteer functie moet nog gebouwd worden op basis van json datum van meest recente toegevoegd.  

        receptenMarkup += '<div class="receptCard" id="'+ value.id +'"><div class="cardSpacer"><div class="receptHead">';        
        receptenMarkup += '<h2>'+ value.title +'</h2>';
        // defineer variabelen voor de juiste iconen gebaseerd op de Json
        let soortGerei = value.benodigdheden;
        let soortGerecht = value.hoofdIngredient;
        let bereidTijd = value.tijd;
        // icons function, berei gerecht en time bepaald door nummers in de Json, zie handleiding. 
        receptenMarkup += receptIconPlacement(soortGerei,soortGerecht,bereidTijd); 
        receptenMarkup += '</div>';
        receptenMarkup += '<div class="receptText">';
        receptenMarkup += '<ul>';
            $.each(value.ingredienten, function(id, ingredient){
               
                receptenMarkup += '<li>'+ ingredient+ '</li>';
            });
        receptenMarkup += '</ul>';	
        receptenMarkup += `<div class="receptImage" style="background-image: url('${value.image}');" alt="test"></div>`; 
        receptenMarkup += ' <button>'+ value.buttonTekst +'</button>';
        receptenMarkup += '</div></div></div></div>';    
    });
    $('.receptCardHolder').append(receptenMarkup);
});

        // FOOTER CRATION
    var footerMarkup ='';
    footerMarkup += '<div class="cardSpacer"><div class=footerIcons>';
    footerMarkup += '<img src="images/cuisinelogo.png" alt="cuisine logo"><div class="footerIconsP">  <a><p></p></a> <a><p></p></a><a><p></p></a> </div> </div>';
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

   
    
        // receptIconPLacement function. i = Sooftgerecht in de recepten constructor. en plaatst het benodigde icoon per recept card er in. 
 function receptIconPlacement(nrGerei,nrGerecht,nrTijd){ 
  
     // icon gerei defineren. 
        iconGerei = '<ul><li class="receptGerei"><img src="images/icons/32px/'+ nrGerei +'.png"></li>';
    // icon hoofd ingredient defineren
        iconGerecht = '</li><li class="receptHoofdIngr"><img src="images/icons/32px/'+ nrGerecht +'.png"></li>';
    // icon en tekst tijd 
        iconTijd = '<li class="recentTime receptTime'+ nrTijd +'"><img src="images/icons/32px/163.png"></li></ul>'

     return iconGerei+iconGerecht+iconTijd;

 }

 // Recepten click

 $(document).on('click', '.receptCard', function(){
    console.log(this.id);
    var url = '/paginas/recepten/show.html?receptId='+ this.id;
    $(location).prop('href', url);
  });

}); // end/closing of script
 

