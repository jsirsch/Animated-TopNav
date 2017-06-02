// html-class based version to clean up Code and make it more efficient

// notes:
// use toggle class


// Animated-TopNav

function animatedTopNav(){
    //read parameters out of html
    var paddingSmall =
    var paddingLarge =

    struct topNavHelper {
        var backgroundColor;
        var padding;
    };
    ...

    // anitmatedTopNav-helper
    // absolute distance to prevent hiding of content

    $('.animatedTopNav').after('<div class="animatedTopNav-helper"></div>'); // use $(this)... to support several instances
    $('.animatedTopNav-helper').css('background-color', '#2f2f2f').css('width','inherit'); // read property out of default class(css)

    var fontSize = $('.animatedTopNav').children().css('font-size'); // use $(this)... to support several 
    var paddingTopNavHelper = parseInt(paddingLarge)*2 + parseInt(fontSize) + 7; //FAULT: Fix "7"! // use topNavHelper.padding

    $('.animatedTopNav-helper').css('padding-top', paddingTopNavHelper+"px"); //use css template and toggle class instead


    // Scroll Animation

    //calculate reduceAtDistance
    var reduceAtDistance = paddingTopNavHelper-parseInt(paddingSmall)*2; //theoretical you can also subtract the font size //var reduceAtDistance = topNavHelper.padding - ...
    
    // Init size at page reload so it is overwrites the CSS propertys
    var pageAtTop; // use this.(...) to allow several instances
    
    if(document.body.scrollTop >= reduceAtDistance){
        $('.animatedTopNav').children().css({ //$(this)...
            'paddingTop': paddingSmall,
            'paddingBottom': paddingSmall
        });
        
        pageAtTop = false; //this.(...)
        
    } else {
        $('.animatedTopNav').children().css({ //$(this)...
            'paddingTop': paddingLarge,
            'paddingBottom': paddingLarge
        });
        
        pageAtTop = true; //this.(...)
    }
    
    // Set event listener
    $( window ).scroll(function() {
        if (document.body.scrollTop >= reduceAtDistance && pageAtTop === true) {
            pageAtTop = false; //this.(...)
            
            //toggle html-class instead of animate things
            //write animations in css!
            $('.animatedTopNav').children().animate({ //$(this)...
                'paddingTop': paddingSmall,
                'paddingBottom': paddingSmall
            },'fast');
            
        } else if (document.body.scrollTop <= reduceAtDistance && pageAtTop === false){
            pageAtTop = true; //this.(...)
            
            $('.animatedTopNav').children().animate({ //$(this)...
                'paddingTop': paddingLarge,
                'paddingBottom': paddingLarge
            },'fast');
        }
    });
}