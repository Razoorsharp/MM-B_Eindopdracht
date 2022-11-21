window.addEventListener('load', function(){
var d = document;
// if(!d.getElementById("homeHeroBackImage"))return false;
    
var leftRightField = d.getElementById("homeHeroMid") // eventlistener needed to check oif the left or right button was clicked. 
var buttonLeft = d.getElementById("homePaginationLeft"); // button for leftscroll
var buttonRight = d.getElementById("homePaginationRight"); //button for right scroll
var heroText = d.getElementsByClassName("heroPaginationIntro"); // general text 
var heroHead = d.getElementsByClassName("heroPaginationHead");// header within text
var heroButton = d.getElementsByClassName("heroPaginaButton");// text within the button for the link. 
var page1 = d.getElementById("homePagination1"); // pagination input radio button
var page2 = d.getElementById("homePagination2"); // pagination input radio button
var page3 = d.getElementById("homePagination3"); // pagination input radio button
var image1 = d.getElementById("homeHeroBackImage1");
var image2 = d.getElementById("homeHeroBackImage2");
var image3 = d.getElementById("homeHeroBackImage3");

var indicator = 1; // indicator needed for image id  and pagination radiobutton to check. 

// __________________________________________________-
//         Events
// ---------------------------------------------------

// leftRightField event checks which button is pressed and sets indicator accordingly for the hero element to show. 
// function switchimage is also run to set the radio buttons which in turn run an animation
leftRightField.addEventListener('click', function(e){
console.log(e.target.id)
    if( e.target.id == "homePaginationLeft"){
        console.log("links")
        // check if indicator is at minimum
        if(indicator == 1){     
            console.log("gaat niet");
            return false;
        }else{
            console.log("gaat wel")
            indicator--;
            console.log(indicator);
            switchImg(indicator);
        }
        // check if indicator is correct and at maximum
    }else if(e.target.id == "homePaginationRight"){
        console.log("rechts");
        if(indicator ==3){
            console.log(indicator);
            console.log("gaat niet rechts")
            return false;
        }else if(indicator =>1){
            console.log("rechts gaat")
            indicator++;
            console.log(indicator);
            switchImg(indicator);

        }
    }
});

    // Radio button triggering the animations, switchimg function

    page1.addEventListener('click', function(e){
        indicator = 1;
        switchImg(indicator)
    });
    page2.addEventListener('click', function(e){
        indicator = 2;
        switchImg(indicator)
    });
    page3.addEventListener('click', function(e){
        indicator = 3;
        switchImg(indicator)
    });

            // ----------------------------------
            //         Functions
            // -----------------------------------
    // switching function switches the pagination which in turn switch to an animaton in earlier eventlisteners
    function switchImg(i){
        $.getJSON("./json/heropages.json", function(data){
            $.each(data, function(key, value){
                if(i == value.id){ // if the buttons were used, checkboxes need to change.                   
                    $("#homePagination"+ i).prop("checked", true); // with the indicator set, the pagination buttons need to be checked.            
                    $(heroText).html(value.intro);
                    $(heroHead).html(value.head);
                    $(heroButton).html(value.buttonText);
                } 
                if(page1.checked){
                    // fun animation for first image
                    CarrouselTo1();
                    
                }else if(page2.checked){
                    // run animation for page 2
                    CarrouselTo2();
                }else if(page3.checked){
                    //run animation for image 3
                    CarrouselTo3();

                }


            });
        });
    }

    function CarrouselTo1(){
        console.log("running animation 1");
        width = screen.width;
        console.log("window width = "+ width)
        gsap.to(image1, {
            css:{left:"0vw"}
        })
        gsap.to(image2, {
            css:{left:"100vw"}
        })
        gsap.to(image3, {
            css:{left:"200vw"}
        })

        
    };
    function CarrouselTo2(){
        console.log("running animation 2");
        width = screen.width;
        console.log("window width = "+ width)
        gsap.to(image1, {
            css:{left:"-100vw"}
        })
        gsap.to(image2, {
            css:{left:"0vw"}
        })
        gsap.to(image3, {
            css:{left:"100vw"}
        })
    };
    function CarrouselTo3(){
        console.log("running animation 3");
        width = screen.width;
        console.log("window width = "+ width)
        gsap.to(image1, {
            css:{left:"-200vw"}
        })
        gsap.to(image2, {
            css:{left:"-100vw"}
        })
        gsap.to(image3, {
            css:{left:"0vw"}
        })
    };
}); // end of script. 