// Animated-TopNav

function animatedTopNav(paddingSmall, paddingLarge){
    // anitmatedTopNav-helper
    // absolute distance to prevent hiding of content
    
    $('.animatedTopNav').after('<div class="animatedTopNav-helper"></div>');
    $('.animatedTopNav-helper').css('background-color', '#2f2f2f').css('width','inherit');

    var fontSize = $('.animatedTopNav').children().css('font-size');
    var paddingTopnavHelper = parseInt(paddingLarge)*2 + parseInt(fontSize) + 7; //FAULT: Fix "7"!

    $('.animatedTopNav-helper').css('padding-top', paddingTopnavHelper+"px");


    // Scroll Animation

    //calculate reduceAtDistance
    var reduceAtDistance = paddingTopnavHelper-parseInt(paddingSmall)*2; //theoretical you can subtract the font size
    
    // Init size at page reload so it is overwrites the CSS propertys
    var pageAtTop;
    
    if(document.body.scrollTop >= reduceAtDistance){
        $('.animatedTopNav').children().css({
            'paddingTop': paddingSmall,
            'paddingBottom': paddingSmall
        });
        
        pageAtTop = false;
        
    } else {
        $('.animatedTopNav').children().css({
            'paddingTop': paddingLarge,
            'paddingBottom': paddingLarge
        });
        
        pageAtTop = true;
    }
    
    // Set event listener
    $( window ).scroll(function() {
        if (document.body.scrollTop >= reduceAtDistance && pageAtTop === true) {
            pageAtTop = false;
            
            $('.animatedTopNav').children().animate({
                'paddingTop': paddingSmall,
                'paddingBottom': paddingSmall
            },'fast');
            
            $('.container').css({
                'max-width': '900px'
            });
            
            /*$('.container').css({
                
                backgroundColor: 'rgba(156,6,48,0.1)'
            });
            console.log('...');
            */
            /*
            $('.animatedTopNav').css({
                'opacity': '0',
                'transition': 'opacity 0.5s ease-out 0s'
            })
            */
        } else if (document.body.scrollTop <= reduceAtDistance && pageAtTop === false){
            pageAtTop = true;
            
            $('.animatedTopNav').children().animate({
                'paddingTop': paddingLarge,
                'paddingBottom': paddingLarge
            },'fast');
        }
    });
}