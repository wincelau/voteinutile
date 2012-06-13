$(document).ready(function() {
	$('#bouton_vote').click(function() {
		$('#tampon').fadeIn();
		return false;
	});
	setTimeout('showNext()', 4000);
	$('#bouton_pasvote').click(function() {
		$.scrollTo($('a[name="partage"]'), 800);
		return false;
	});
	$('#lien_tampon_annuler').click(function() {
		$('#tampon').fadeOut();
		return false;
	});
	$("#photos_qrcodes").carouFredSel({
		width: "auto",
		height: "auto",
		items: {
			visible: 1,
			width: "auto",
			height: "auto"
		},
		scroll: {
			mousewheel: true,
			wipe: true,
			pauseOnHover: true
		},
		prev	: {
			button	: "#foo2_prev",
			key		: "left"
		},
		next	: {
			button	: "#foo2_next",
			key		: "right"
		},
		auto: 3000/*,
		onAfter: function( oldItems, newItems, newSizes ) {
			$(this).find('li').css('visibility', 'visible');
		}*/
	});
});

var showNext = function () {
	if($(document).scrollTop() == 0) {
		$.scrollTo('+='+$('#main > header').height()+'px', 800);
	}
}
