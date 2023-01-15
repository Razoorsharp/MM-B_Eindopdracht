$(document).ready(function(){

// if(!d.getElementById("ingredientenHolder"))return false;
var d = document;
var ingredientenFilter = d.getElementById('ingredientenHolder');
var gereiFilter = d.getElementById('gereiHolder');



//var pageResForIcons = ''; // dit was een functie om bepaalde iconen te bepalen op basis van window
// wel laten staan ter referentie. 
// if (!window.matchMedia('(min-width: 768px)').matches) {
// 	pageResForIcons = '32px';
// } else if(window.matchMedia('(min-width: 768px)').matches){
// 	pageResForIcons = '64px';
// }
$.getJSON("../../json/recepten.json", function(data){
    var receptenMarkup = '';
    var filterIngredienten= '';  // lijst met HTML die gebouwd wordt op basis van Json Soort
    var filterGerei = ''; // lijst met HTML die gebouwd wordt op basis van Json gerei
    // loop for creating the filter options
    var soortGerecht =[]; // array om alle soorten gerechten te verzamelen
    // zet soort gerechten in een array genaamd soortGerecht
        // loop door alle gerecht soorten heen, en zet deze in soort gerecht array
        $.each(data, function(key, value){
            soortGevonden = value.soort;
            if(soortGerecht.indexOf(soortGevonden) == -1){ // als gercht soort al bestaat, dat hem dan niet nog eens in de lijst
                soortGerecht.push(soortGevonden);
            }
        });
        // loop door alle soorten gerei heen
        var soortGerei =[];
        $.each(data, function(key, value){
            soortGevonden = value.benodigdheden;
            if(soortGerei.indexOf(soortGevonden) == -1){ // als gercht soort al bestaat, dat hem dan niet nog eens in de lijst
                soortGerei.push(soortGevonden);
            }
        });
  

        // for loop om alle soorten gerechten in de HTML te zetten variabel staat boven gedevineerd 
    for(soort of soortGerecht){
		filterIngredienten += '<li><input type="checkbox" name="ingredientFilter" value="'+ soort +'">'+ soort +'</li>';
	}
    for(soort of soortGerei){
		filterGerei += '<li><input type="checkbox" name="gereiFilter" value="'+ soort +'"><img src="../../images/icons/32px/'+ soort +'.png" alt=""></li>';
	}
	$(ingredientenFilter).append(filterIngredienten);
    $(gereiFilter).append(filterGerei);
    // loop for creating the cards
    $.each(data, function(key, value){
        
        receptenMarkup += '<div class="receptCard" id="'+ value.id +'" data-soort="'+ value.soort +'" data-gerei="'+ value.benodigdheden +'"><div class="cardSpacer"><div class="receptHead">';        
        receptenMarkup += '<h2>'+ value.title +'</h2>';
        // defineer variabelen voor de juiste iconen gebaseerd op de Json
        let soortGerei = value.benodigdheden;
        let soortGerecht = value.hoofdIngredient;
        let bereidTijd = value.tijd;
        let image = "../../" + value.image;
        
        // icons function, berei gerecht en time bepaald door nummers in de Json, zie handleiding. 
        receptenMarkup += receptIconPlacement(soortGerei,soortGerecht,bereidTijd); 
        receptenMarkup += '</div>';
        receptenMarkup += '<div class="receptText">';
        receptenMarkup += '<ul>';
            $.each(value.ingredienten, function(id, ingredient){
                
                receptenMarkup += '<li>'+ ingredient+ '</li>';
            });
        receptenMarkup += '</ul>';	
        receptenMarkup += `<div class="receptImage" style="background-image: url('../../${value.image}');"></div>`; 
        // onderstaande error er in gehouden voor toekomstige referentie ( in engels maar toch). 
       //  ERROR (fixed): (if used without the ${} method): background image does not work and the HTML jumbles the entire code around because of a / character, which doesnt happen in an image tag. The div's purpose is to display the image that is now available as background image. untill fixed keep the IMG tag. 
       receptenMarkup += ' <button>'+ value.buttonTekst +'</button>';
       receptenMarkup += '</div></div></div></div>';    
    });
    
    $('.receptCardHolder').append(receptenMarkup);
   
            //----------------
            // SEARCH FUNCTION
            //-----------------
    $('.receptenFilter input').on('change', function(e){ // zoek functie zelf
		//??this?? de checkbox  // check nog eens wat $(this) en alleen This weergeeft. rijke html jquery ?
       
		var deCheckbox = $(this)
        
		var waarde = deCheckbox.val();
       
		var selected = deCheckbox.is(':checked'); // true/false
        
        

		var aantalSoort = $('[name=ingredientFilter]:checked').length; // aantal producten nummer variabel
        
		var aantalGerei = $('[name=gereiFilter]:checked').length; // 0 tm 5

	
       
		$('.receptCard').each(function(){
            
			var card = $(this);
            
            

			if(card.attr('data-gerei') == waarde){
				// Ja de Checkbox hoort bij deze card
             
				card.attr('data-gerei-flag', selected);
                // console.log(" zet gerei flag " + card.attr('data-gerei-flag'));                
			}
            

			if(card.attr('data-soort') == waarde){
				// Ja de Checkbox hoort bij deze card
				card.attr('data-soort-flag', selected);
                // console.log("data soort flag = " + card.attr('data-soort-flag'));
			}

			var s_show = true;
			var g_show = true;
            // console.log(g_show);

			if (card.attr('data-soort-flag') == 'false' && aantalSoort != 0){
               
				s_show = false;
                
			}

			if (card.attr('data-gerei-flag') == 'false' && aantalGerei != 0){
				g_show = false;
                
			}

            if(!card.attr('data-soort-flag') == 'true' && aantalSoort != 0){
                
            }

			if (s_show && g_show){
				card.show();
			}else{
				card.hide();
			}

		}); // End of search function


	}); // eindechange event
 }).done(function() {
    
  }); // END JSON REQUESTS

       // receptIconPLacement function. i = Sooftgerecht in de recepten constructor. en plaatst het benodigde icoon per recept card er in. 
       function receptIconPlacement(nrGerei,nrGerecht,nrTijd){ 
        // pageResForIcons werd hier onder gebruikt om te bepalen of de map 32px of 64px gebruikt moest worden. 
        // leuk systeem maar niet meer relevant, toch er in gelaten om "kunde" te laten zien.. maar om esthetische redenen er vanaf gestapt
        // icon gerei defineren. 
           iconGerei = '<ul><li class="receptGerei"><img src="/images/icons/32px/'+ nrGerei +'.png"></li>';
       // icon hoofd ingredient defineren
           iconGerecht = '</li><li class="receptHoofdIngr"><img src="/images/icons/32px/'+ nrGerecht +'.png"></li>';
       // icon en tekst tijd 
           iconTijd = '<li class="receptTime receptTime'+ nrTijd +'"><img src="/images/icons/32px/163.png"></li></ul>'
   
        return iconGerei+iconGerecht+iconTijd;
        
    }
    
    $(document).on('click', '.receptCard', function(){
        
        var url = '/paginas/recepten/show.html?receptId='+ this.id;
        $(location).prop('href', url);
      });
    
    
    
 
}); // einde van document.load
