var wb_container_frontend = new function(){
    var self = this;
	var $ = jQuery;
	
	self.deferred_images_loaded = false;
	self.deferred_load_pos = 200;
	
	self.init = function(){
		$(window).on( 'load resize', function(){
			setTimeout( self.load_deferred_images, 2000);
		});
		
		$(window).on( 'scroll', function(e){
			if( $(window).scrollTop() >= self.deferred_load_pos ){ //if vertical scroll position has changed
				self.load_deferred_images();
			}
		});
	};
    
    
    self.load_deferred_images = function(){
        if( !self.deferred_images_loaded ){
            if( $('.wb_deferred_background')[0] ){
                $('.wb_deferred_background').each(self.load_deferred_background_image);
            }
            self.deferred_images_loaded = true;
        }
    };
    
    self.load_deferred_background_image = function(){
        var $elm = $(this);
        var src = $elm.attr('data-background-src');
        if( null != src ){
            var background_image = src;
            
            
            var dpix = 1;
            var screen_width = $(window).width();
            if( typeof window.devicePixelRatio != "undefined" ){
                dpix = window.devicePixelRatio;
            }
            var effective_width = screen_width * dpix;
            
            var src_sm = $(this).attr('data-background-src-sm');
            if( null == src_sm ){
                src_sm = src;
            }
            var src_lg = $(this).attr('data-background-src-lg');
            if( null == src_lg ){
                src_lg = src;
            }
            if( effective_width < 1400 ){
                background_image = src_sm;
            }
            /*if( effective_width > 1400 && effective_width < 2000 ){
                $(this).css( 'background-image', 'url('+slide_src+')' );
            }*/
            if( effective_width > 2160 ){
                background_image = src_lg;
            }
            
            $elm.css('background-image', 'url('+background_image+')').removeClass('wb_deferred_background');
        }
    };
    
    $(document).ready(function(){
		try{
			self.init();
		} catch( e ){
			console.warn( 'JS Error in container_block.js' );
			console.log( e );
		}
	});
}
