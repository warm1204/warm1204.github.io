/*(function($){
    nie.use(['ui.tab'],function(){
        $.tab('#tab .tabs li','#tab .tabSCon');
    });
})(jQuery);
	nie.config.copyRight.setWhite();*/

$(document).ready(function() {
	var $li=$("#tab ul li");
	$li.mouseover(function(){
		$(this).addClass('current')
		.siblings().removeClass('current');
		var index=$li.index(this);
		var $tabCon=$("#tab .tabCon  .tabSCon")
			.eq(index).addClass('current')
			.siblings().removeClass('current');
	});
});