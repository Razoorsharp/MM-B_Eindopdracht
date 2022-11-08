// code for the main page 
d = Document;

$(document).ready(function(){

$(".no-JS").remove();   // removes warning div for the site if JS is disabled. 

// Page resolution RWD variable defining. 
var pageResForIcons = '';
if (!window.matchMedia('(min-width: 768px)').matches) {
	pageResForIcons = '32px';
} else if(window.matchMedia('(min-width: 768px)').matches){
	pageResForIcons = '64px';
}

// boeken card creator. 
$.getJSON("./json/boeken.json", function(data){
    var boekenMarkup = '';
    console.log(data);
    $.each(data, function(key, value){
        console.log(value);
        boekenMarkup += '<div class="boekenCard">';        
        boekenMarkup += '<img src="'+ value.image +'" alt="">'; 
        boekenMarkup += '<p class="boekPrijs">'+ value.prijs +'</p>';
        boekenMarkup += '<div class="cardContent">';		
        boekenMarkup += '<p>'+ value.description +'</p><br><hr>';
        boekenMarkup += '<h2>'+ value.title +'</h2>';
        boekenMarkup += '<button>'+ value.buttonName +'</button>';
        boekenMarkup += '</div></div></div>';    
    });
    $('.homeBoeken').append(boekenMarkup);
});

// Artikellen Card ceator
$.getJSON("./json/artikellen.json", function(data){
    var artikellenMarkup = '';
    console.log(data);
    $.each(data, function(key, value){
        console.log(value);
        artikellenMarkup += '<div class="artikelCard"><div class="cardSpacer"><div class="cardContent">';        
        artikellenMarkup += '<h2>'+ value.title +'</h2>';
        artikellenMarkup += '<p>'+ value.tekstPreview +'</p>';		
        artikellenMarkup += '<img src="'+ value.image +'" alt="'+ value.title +'">';
        artikellenMarkup += '<button>Volledig Artikel</button>';
        artikellenMarkup += '</div></div></div>';    
    });
    $('.artikelCardHolder').append(artikellenMarkup);
});

// recepten Card ceator @note: nog afmaken
$.getJSON("./json/recepten.json", function(data){
    var receptenMarkup = '';
    
    $.each(data, function(key, value){
        console.log(value);
        receptenMarkup += '<div class="receptCard"><div class="cardSpacer"><div class="receptHead">';        
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
                console.log(ingredient)
                receptenMarkup += '<li>'+ ingredient+ '</li>';
            });
        receptenMarkup += '</ul>';	
        receptenMarkup += '<img src="'+ value.image +'" alt="'+ value.title +'">';
        receptenMarkup += ' <button>'+ value.title +'</button>';
        receptenMarkup += '</div></div></div></div>';    
    });
    $('.receptCardHolder').append(receptenMarkup);
});
        // receptIconPLacement function. i = Sooftgerecht in de recepten constructor. en plaatst het benodigde icoon per recept card er in. 
 function receptIconPlacement(nrGerei,nrGerecht,nrTijd){ 
  
     // icon gerei defineren. 
        iconGerei = '<ul><li class="receptGerei"><img src="images/icons/'+ pageResForIcons +'/'+ nrGerei +'.png"></li>';
    // icon hoofd ingredient defineren
        iconGerecht = '</li><li class="receptHoofdIngr"><img src="images/icons/'+ pageResForIcons +'/'+ nrGerecht +'.png"></li>';
    // icon en tekst tijd 
        iconTijd = '<li class="recentTime receptTime'+ nrTijd +'"><img src="images/icons/'+ pageResForIcons +'/163.png"></li></ul>'

     return iconGerei+iconGerecht+iconTijd;

 }

}); // end/closing of script
 

