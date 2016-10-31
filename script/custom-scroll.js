(function($){
	$.fn.customScroll = function(options){
		var _default = $.extend({
			position: 'right',
			scrollable: 100
		}, options),
		_scrollThumbHeight, _scrollSteps, _scrollTrackFactor;
		$(this).wrapInner('<div class="wrapInner"></div>');
		$(this).on('mouseenter', function(){
			var childH = $(this).find('.wrapInner').height();
			var parentH = $(this).innerHeight();
			$(this).css('height', $(this).outerHeight()+'px');
			if(childH > parentH){
				_scrollSteps = Math.ceil((childH - parentH)/ _default.scrollable);
				_scrollThumbHeight = Math.ceil(parentH / Math.ceil(childH / parentH));
				_scrollTrackFactor = (parentH - _scrollThumbHeight) / _scrollSteps;
				if($(this).children('.scrollTrack').length == 0){
					var elemScrollTrack = $('<div/>', {class:'scrollTrack', 'data-steps':'0'});
					var elemScrollThumb = $('<div/>', {class:'scrollThumb'});
					elemScrollThumb.css('height', _scrollThumbHeight+'px');
					elemScrollTrack.append(elemScrollThumb);
					$(this).append(elemScrollTrack);
				}
				$(this).children('.scrollTrack').addClass('active');
			}
			return this;
		});
		$(this).on('mouseleave', function(){
			$(this).children('.scrollTrack').removeClass('active');
			return this;
		});
		$(this).on('mousewheel', function(event){
			var _steps = parseInt($(this).find('.scrollTrack').attr('data-steps'));
			if(event.deltaY == 1 && _steps > 0){
				_steps--;
			}else if(event.deltaY == -1 && _steps < _scrollSteps){
				_steps++;
			}
			if($(this).children('.scrollTrack').length != 0){
				$(this).find('.scrollThumb').css('top', (_steps * _scrollTrackFactor)+'px');
				$(this).find('.wrapInner').css('margin-top', '-'+(_steps * _default.scrollable)+'px');
				$(this).find('.scrollTrack').attr('data-steps', _steps);
			}
			return this;
		});
	};
}(jQuery));