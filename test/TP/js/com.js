$(window).on("load", function(){
	//页面入口
	sapp.page.go(location.hash.substr(1));

	//loading
	$("#loading").removeClass("in");
});

$(function(){
	//初始化
	sapp.init({
		page:".page",
		preload:3
	});

	//页面滑动逻辑
	sapp.event.on("swipe", function(e){
		switch(e.dir){
			case "swipeUp" : sapp.page.next(); break;
			case "swipeDown" : sapp.page.prev(); break;
		}
	});

	//自适应
	/*
	sapp.fill({
		target : ".main",
		 width : 640,
		height : 960,
		  mode : "contain"
	});
	*/

	//音乐
	sapp.sound.add("resources/audio/readygo.mp3");
	sapp.sound.bgmusic("resources/audio/bgmusic.mp3");
	/*
	sapp.audio({
		  target : "#music",
		     src : "resources/audio/bgmusic.mp3",
		 preload : "auto",
		    loop : true,
		autoplay : false
	});
*/

	//分享
	var share = sapp.share({
		  text : $("meta[name='shareText']").attr("content"),
		   img : $("meta[name='shareImg']").attr("content")
	});
	sapp.event.on("share", function(e){
		Mar.Seed.request("sapp","click","share"); //分享统计
	});
	
	//分享弹层
	var popShare = $("#popShare");
	var showPopShare = function(e){
		if(e.notEdge) return;
		popShare.addClass("showShare");
		sapp.page.lock();
	}
	var hidePopShare = function(e){
		popShare.removeClass("showShare");
		sapp.page.unlock();
	}
	sapp.event.on("pageNext", showPopShare);
	$("#btnShare").on("click", showPopShare);
	popShare.on("click", hidePopShare);
	sapp.event.on("swipe", function(e){
		if(e.dir=="swipeDown" && popShare.hasClass("showShare")){
			hidePopShare();
		}
	});

	//页面到达统计
	(function(){
		var reach = 1;
		sapp.event.on("pageNext",function(e){
			if(e.page <= reach) return;
			reach = e.page;
			Mar.Seed.request("sapp","swipe",("page"+reach));
		});
	})();


});

