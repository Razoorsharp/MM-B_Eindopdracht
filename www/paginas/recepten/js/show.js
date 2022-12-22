var d = document;

$(document).ready(function () {
    var id = GetParameterValues('receptId');
    alert("Hello your ID is " + id);
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
        var receptId = Id;

        $get
    });

   