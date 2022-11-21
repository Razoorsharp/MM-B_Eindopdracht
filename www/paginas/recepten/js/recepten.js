console.log("running");
// if(!d.getElementById("ingredientenHolder"))return false;
var d = document;
var ingredientenFilter = d.getElementById('ingredientenHolder');
var gereiFilter = d.getElementById('gereiHolder');



var pageResForIcons = '';
if (!window.matchMedia('(min-width: 768px)').matches) {
	pageResForIcons = '32px';
} else if(window.matchMedia('(min-width: 768px)').matches){
	pageResForIcons = '64px';
}
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
    console.log(soortGerecht); // laat alle gerechten in de array zien . 

        // for loop om alle soorten gerechten in de HTML te zetten variabel staat boven gedevineerd 
    for(soort of soortGerecht){
		filterIngredienten += '<li><input type="radio" name="ingredientFilterOptie" value="'+ soort +'">'+ soort +'</li>';
	}
	$(ingredientenFilter).append(filterIngredienten);
    // loop for creating the cards
    $.each(data, function(key, value){
        
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
                
                receptenMarkup += '<li>'+ ingredient+ '</li>';
            });
        receptenMarkup += '</ul>';	
        receptenMarkup += '<img src="../../'+ value.image +'" alt="'+ value.title +'">';
        receptenMarkup += ' <button>'+ value.title +'</button>';
        receptenMarkup += '</div></div></div></div>';    
    });
    $('.receptCardHolder').append(receptenMarkup);
});

       // receptIconPLacement function. i = Sooftgerecht in de recepten constructor. en plaatst het benodigde icoon per recept card er in. 
       function receptIconPlacement(nrGerei,nrGerecht,nrTijd){ 
  
        // icon gerei defineren. 
           iconGerei = '<ul><li class="receptGerei"><img src="../../images/icons/'+ pageResForIcons +'/'+ nrGerei +'.png"></li>';
       // icon hoofd ingredient defineren
           iconGerecht = '</li><li class="receptHoofdIngr"><img src="../../images/icons/'+ pageResForIcons +'/'+ nrGerecht +'.png"></li>';
       // icon en tekst tijd 
           iconTijd = '<li class="recentTime receptTime'+ nrTijd +'"><img src="../../images/icons/'+ pageResForIcons +'/163.png"></li></ul>'
   
        return iconGerei+iconGerecht+iconTijd;
   
    }