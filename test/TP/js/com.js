
$(function() {
	if (TEXT_SCORE === "SCORE") {
		var shareText = 'Come on!Let us TP GAME!';
	} else {
		var shareText = TEXT_SCORE;
	}
	//分享
	var share = sapp.share({

		text:shareText ,
	});
});
