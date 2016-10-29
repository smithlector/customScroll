$(function(){
	var counter = 0, scrollRatio, scrollFactor = 200;
	$('.scrollable').wrapInner('<div class="wrapInner"></div>');
	$('.scrollable').on('mouseenter', function(){
		var childH = $('.wrapInner').height();
		var parentH = $(this).height();
		if(childH > parentH){
			scrollRatio = Math.ceil(childH / scrollFactor);
			var scrollThumb = Math.ceil(parentH / scrollRatio);
			if($(this).children('.scrollTrack').length == 0){
				var elemScrollTrack = $('<div/>', {class:'scrollTrack'});
				var elemScrollThumb = $('<div/>', {class:'scrollThumb'});
				elemScrollThumb.css('height', scrollThumb+'px');
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
		if(event.deltaY == 1 && counter > 0){
			counter--;
		}else if(event.deltaY == -1 && counter < scrollRatio){
			counter++;
		}
		if($(this).children('.scrollTrack').length != 0){
			if(){
				$(this).children('.scrollTrack')
			}
		}
	});
});