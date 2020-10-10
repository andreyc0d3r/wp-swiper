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
        var wpSwipers = document.getElementsByClassName( "swiper-container" );
        window.wpSwiper = [];
        for( i = 0; i < wpSwipers.length; i++ ) {
            if( wpSwipers[i].hasAttribute( "data-navigation" ) ) {
                if( ( wpSwipers[i].getAttribute( "data-navigation" ) == "true" ) ) {
                    self.options.navigation = {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }
                }
            }
            if( wpSwipers[i].hasAttribute( "data-pagination" ) ) {
                if( ( wpSwipers[i].getAttribute( "data-pagination" ) == "true" ) ) {
                    self.options.pagination = {
                        el: '.swiper-pagination',
                    };
                }
            }
            if( wpSwipers[i].hasAttribute( "data-slidespercolumn" ) ) {
                self.options.slidesPerColumn = self.getNumber( wpSwipers[i].getAttribute( "data-slidespercolumn" ), 1 );
            }
            if( wpSwipers[i].hasAttribute( "data-autoplay" ) ) {
                self.options.autoplay = ( wpSwipers[i].getAttribute( "data-autoplay" ) == "true" );
            }
            if( wpSwipers[i].hasAttribute( "data-delay" ) ) {
                self.options.delay = wpSwipers[i].getAttribute( "data-delay" );
            }
            if( wpSwipers[i].hasAttribute( "data-speed" ) ) {
                self.options.speed = self.getNumber( wpSwipers[i].getAttribute( "data-speed" ), 500);
            }
            if( wpSwipers[i].hasAttribute( "data-loop" ) ) {
                self.options.loop = ( wpSwipers[i].getAttribute( "data-loop" ) == "true" );
            }
            if( wpSwipers[i].hasAttribute( "data-effect" ) ) {
                self.options.effect = wpSwipers[i].getAttribute( "data-effect" );
            }
            if( wpSwipers[i].hasAttribute( "data-slidesperview" ) ) {
                self.options.slidesPerView = self.getNumber( wpSwipers[i].getAttribute( "data-slidesperview" ), 1 );
            }
            if( wpSwipers[i].hasAttribute( "data-spacebetween" ) ) {
                self.options.spaceBetween = self.getNumber( wpSwipers[i].getAttribute( "data-spacebetween" ), 0 );
            }
            window.wpSwiper[i] = new Swiper(wpSwipers[i], self.options);
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