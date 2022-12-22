var d = document;

$(document).ready(function () {
    // -----------------------------
    // Determine receptId
    // ------------------------------
    var receptId = GetParameterValues('receptId');
    // alert("Hello your ID is " + id);
        function GetParameterValues(param) {
        var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            console.log(url);
            for (var i = 0; i < url.length; i++) {
            var urlparam = url[i].split('=');
            if (urlparam[0] == param) {
            console.log(urlparam[0]);
            console.log(urlparam[1]);
            return urlparam[1];
            
            }
            }
        }
        // console.log(" waarde van geclickte recept" + receptId);
        
        /*------------------------------ 
            Json data collecton
        --------------------------------*/
        $.getJSON("../../json/recepten.json", function(data){
           
            console.log(data);
            $.each(data, function(key, value){
                if(value.id == receptId){
                    console.log("ik ben recept "+ value.title);
                }
            });
            
        });
        // $('.boekenCardHolder').append(boekenMarkup);
    });

   