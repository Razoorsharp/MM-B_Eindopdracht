console.log("running");

var pageResForIcons = '';
if (!window.matchMedia('(min-width: 768px)').matches) {
	pageResForIcons = '32px';
} else if(window.matchMedia('(min-width: 768px)').matches){
	pageResForIcons = '64px';
}
$.getJSON("../../json/recepten.json", function(data){
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