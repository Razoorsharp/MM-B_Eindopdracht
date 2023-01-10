

// ------- Boeken Creator ---
$.getJSON("/json/boeken.json", function(data){
    var boekenMarkup = '';
    console.log(data);
    $.each(data, function(key, value){
        console.log(value);
         if( value.author == "Nigella Lawson")  {
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
//  ------- Recepten Creator ------
$.getJSON("/json/recepten.json", function(data){
    var receptenMarkup = '';
    var receptCount = 0;
    $.each(data, function(key, value){
        receptCount++;
        console.log("recept count op = "+receptCount)
        if(value.author == "Nigella Lawson"){ // if statement zodat alleen recepten van nagilla getoond worden. 
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
        }

        
    });
    $('.receptCardHolder').append(receptenMarkup);
});
function receptIconPlacement(nrGerei,nrGerecht,nrTijd){ 
  
    // icon gerei defineren. 
       iconGerei = '<ul><li class="receptGerei"><img src="/images/icons/32px/'+ nrGerei +'.png"></li>';
   // icon hoofd ingredient defineren
       iconGerecht = '</li><li class="receptHoofdIngr"><img src="/images/icons/32px/'+ nrGerecht +'.png"></li>';
   // icon en tekst tijd 
       iconTijd = '<li class="recentTime receptTime'+ nrTijd +'"><img src="/images/icons/32px/163.png"></li></ul>'

    return iconGerei+iconGerecht+iconTijd;

}

// Recepten click

$(document).on('click', '.receptCard', function(){
   console.log(this.id);
   var url = '/paginas/recepten/show.html?receptId='+ this.id;
   $(location).prop('href', url);
 });