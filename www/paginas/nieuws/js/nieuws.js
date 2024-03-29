var d = document;

$(document).ready(function(){
$.getJSON("/json/artikellen.json", function(data){
    var artikellenMarkup = '';
    
    $.each(data, function(key, value){
        
        artikellenMarkup += '<a href="'+ value.url +'">'
        artikellenMarkup += '<div class="artikelCard"><div class="cardSpacer"><div class="cardContent">';        
        artikellenMarkup += '<h2>'+ value.title +'</h2>';
        artikellenMarkup += '<p>'+ value.tekstPreview +'</p>';		
        artikellenMarkup += '<div class="artikelBGImg" style="background-image:url('+  value.image +')"></div>';
        artikellenMarkup += '<button>Volledig Artikel</button>';
        artikellenMarkup += '</div></div></div></a>';    
    });
    $('.artikelCardHolder').append(artikellenMarkup);
});// einde Json

}); // einde document check