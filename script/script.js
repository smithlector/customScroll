$(function(){
	var steps = 0, scrollThumbHeight, scrollSteps, scrollable = 100, scrollTrackFactor = 30;
	$('.scrollable').wrapInner('<div class="wrapInner"></div>');
	$('.scrollable').on('mouseenter', function(){
		var childH = $('.wrapInner').height();
		var parentH = $(this).height();
		if(childH > parentH){
			scrollSteps = Math.ceil((childH - parentH)/ scrollable);
			scrollThumbHeight = Math.ceil(parentH / Math.ceil(childH / parentH));
			scrollTrackFactor = Math.ceil((parentH - scrollThumbHeight) / scrollSteps);
			if($(this).children('.scrollTrack').length == 0){
				var elemScrollTrack = $('<div/>', {class:'scrollTrack'});
				var elemScrollThumb = $('<div/>', {class:'scrollThumb'});
				elemScrollThumb.css('height', scrollThumbHeight+'px');
				elemScrollTrack.append(elemScrollThumb).attr({'data-height': childH+'px'});
				$(this).append(elemScrollTrack);
			}
			$(this).children('.scrollTrack').addClass('active');
		}
	});
	$('.scrollable').on('mouseleave', function(){
		$(this).children('.scrollTrack').removeClass('active');
	});
	$('.scrollable').on('mousewheel', function(event){
		if(event.deltaY == 1 && steps > 0){
			steps--;
		}else if(event.deltaY == -1 && steps < scrollSteps){
			steps++;
		}
		if($(this).children('.scrollTrack').length != 0){
			$(this).find('.scrollThumb').css('top', (steps * scrollTrackFactor)+'px');
			$(this).find('.wrapInner').css('margin-top', '-'+(steps * scrollable)+'px');
		}
	});
});