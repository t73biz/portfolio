$( document ).ready(function() {
	var invisCount = 0;
	$('#invis').mouseenter(function(){
		invisCount++;
		var text = '';
		switch (invisCount) {
			case 2:
				text = 'Really. There. Is. Nothing. Here.';
				break;
			case 3:
				text = 'ok. You asked for it. You got it.';
				break;
			case 4:
				text = 'Puppy kitty ipsum dolor sit good dog furry aquarium wet nose drool twine sit wagging water vitamins litter box park lick.';
				$('#invis').off('mouseenter');
				$('#invis').off('mouseleave');
				break;
			default:
				text = 'Nothing to see here. Move along.';
		}
		$('#invis-text').html(text);
		$('#invis-text').fadeIn('slow');
	});

	$('#invis').mouseleave(function(){
		$('#invis-text').fadeOut('slow');
	});

	$('#revealer').one("click", function(){
		var swap = $('#hidden-swap').clone();
		swap.css('display', 'inline');
		$('#swap-message').css('display', 'none').delay(1000).fadeIn(500).html(swap);
		$('.first-child').css({'color': 'blue', 'position': 'relative'}).animate({
			left: '-1em'
		}, {
			duration: 3000,
			step: function( now, fx ) {
				var data = fx.elem.id + " " + fx.prop + ": " + now;
			}
		});
	});
});
