// Animated-TopNav

function animatedTopNav(paddingSmall, paddingLarge, removeTopNavHelper){
    // anitmatedTopNav-helper
    // absolute distance to prevent hiding of content
    
    if(removeTopNavHelper === false){
        $('.animatedTopNav').after('<div class="animatedTopNav-helper"></div>');
        $('.animatedTopNav-helper').css('background-color', '#414141').css('width','inherit');
    }
    
    var fontSize = $('.animatedTopNav').children().css('font-size');
    
    //is needed for reduceAtDistance
    var paddingTopNavHelper = parseInt(paddingLarge)*2 + parseInt(fontSize) + 7; //FAULT: Fix "7"!
    
    if(removeTopNavHelper === false){
        $('.animatedTopNav-helper').css('padding-top', paddingTopNavHelper+"px");
    }
    
    // Scroll Animation

    //calculate reduceAtDistance
    var reduceAtDistance = paddingTopNavHelper-parseInt(paddingSmall)*2; //theoretical you can subtract the font size
    
    var animatedTopNavShadow = $('.animatedTopNav').css('box-shadow');
    console.log(animatedTopNavShadow);
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
        
        if(removeTopNavHelper === true){
            $('.animatedTopNav').css({
                backgroundColor: 'rgba(0,0,0,0)',
                'box-shadow': 'none'
            }).children().css({
                color: 'white'
            });
        }
        
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
            
            if(removeTopNavHelper === true){
                $('.animatedTopNav').animate({
                    'box-shadow': animatedTopNavShadow
                });
            }
            console.log('kleiner...');
        } else if (document.body.scrollTop <= reduceAtDistance && pageAtTop === false){
            pageAtTop = true;
            
            $('.animatedTopNav').children().animate({
                'paddingTop': paddingLarge,
                'paddingBottom': paddingLarge
            },'fast');
            console.log('größer...');
        }
    });
}