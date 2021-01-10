import '../../css/frontend.scss';

var wp_swiper = new function() {
    var self = this;
    var $ = jQuery;
    self.options = {};

    self.init = function() {
		self.init_options();
    };
    
    self.getNumber = function( value, inital = 1 ) {
        return Number( value ) ? Number( value ) : inital;
    };

    self.init_options = function() {
        var wpSwipers = document.querySelectorAll( ".wp-swiper" );
        window.wpSwiper = [];
        for( let i = 0; i < wpSwipers.length; i++ ) {
            let swiper_container = wpSwipers[i].querySelector( ".swiper-container" );
           
            if( swiper_container.hasAttribute( "data-navigation" ) ) {
                if( ( swiper_container.getAttribute( "data-navigation" ) == "true" ) ) {
                    self.options.navigation = {
                        nextEl: wpSwipers[i].querySelector( ".swiper-button-next" ),
                        prevEl: wpSwipers[i].querySelector( ".swiper-button-prev" ),
                    }
                }
            }
            if( swiper_container.hasAttribute( "data-pagination" ) ) {
                if( ( swiper_container.getAttribute( "data-pagination" ) == "true" ) ) {
                    self.options.pagination = {
                        el: wpSwipers[i].querySelector( ".swiper-pagination" )
                    };
                }
            }
            if( swiper_container.hasAttribute( "data-slidespercolumn" ) ) {
                self.options.slidesPerColumn = self.getNumber( swiper_container.getAttribute( "data-slidespercolumn" ), 1 );
            }
            if( swiper_container.hasAttribute( "data-autoplay" ) ) {
                self.options.autoplay = ( swiper_container.getAttribute( "data-autoplay" ) == "true" );
            }
            if( swiper_container.hasAttribute( "data-delay" ) ) {
                self.options.delay = swiper_container.getAttribute( "data-delay" );
            }
            if( swiper_container.hasAttribute( "data-speed" ) ) {
                self.options.speed = self.getNumber( swiper_container.getAttribute( "data-speed" ), 500);
            }
            if( swiper_container.hasAttribute( "data-loop" ) ) {
                self.options.loop = ( swiper_container.getAttribute( "data-loop" ) == "true" );
            }
            if( swiper_container.hasAttribute( "data-effect" ) ) {
                self.options.effect = swiper_container.getAttribute( "data-effect" );
            }
            if( swiper_container.hasAttribute( "data-slidesperview" ) ) {
                self.options.slidesPerView = self.getNumber( swiper_container.getAttribute( "data-slidesperview" ), 1 );
            }
            if( swiper_container.hasAttribute( "data-spacebetween" ) ) {
                self.options.spaceBetween = self.getNumber( swiper_container.getAttribute( "data-spacebetween" ), 0 );
            }
            if( swiper_container.hasAttribute( "data-mousewheel" ) ) {
                self.options.mousewheel = swiper_container.getAttribute( "data-mousewheel" );
            }
            if( swiper_container.hasAttribute( "data-releaseonedges" ) ) {
                self.options.mousewheel = {};
                self.options.mousewheel.releaseOnEdges = swiper_container.getAttribute( "data-releaseonedges" );
            }
            window.wpSwiper[i] = new Swiper(swiper_container, self.options);
        }
        
    };

    $(document).ready(function(){
		try{
			self.init();
		} catch(e){
			console.warn('JS Error: ');
			console.log(e);
		}
	});
}