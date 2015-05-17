
var sapp = (function(){
 	var _e = {}, _p = {};
/* handler start */
	_p.move = function(e){
		event.preventDefault();
	},
	_p.start = function(e){
		_p.ox = e.clientX || e.changedTouches[0].clientX;
		_p.oy = e.clientY || e.changedTouches[0].clientY;
	},
	_p.end = function(e){
		_p.nx = e.clientX || e.changedTouches[0].clientX;
		_p.ny = e.clientY || e.changedTouches[0].clientY;
		//
		var dx = _p.nx - _p.ox,
			dy = _p.ny - _p.oy;
		if(dx*dx+dy*dy < 25) return;
		
		if(Math.abs(dx) > Math.abs(dy)){
			sapp.event.call("swipe", {dir:(dx>0 ? "swipeRight" : "swipeLeft")});
		}else{
			sapp.event.call("swipe", {dir:(dy>0 ? "swipeDown" : "swipeUp")});
		}
	};

	document.addEventListener("touchstart", _p.start);
	document.addEventListener( "touchmove", _p.move);
	document.addEventListener(  "touchend", _p.end);

	return _e;
})();


//ua模块
sapp.ua = (function(){
	var _e;
	var _str = navigator.userAgent.toLowerCase();
	var has = function(value){
		return  _str.indexOf(value)!=-1;
	};
	_e = {
		toString : function(){return _str},
		  weixin : has("micromessenger"),
		 	  uc : has("ucbrowser"),
		   ucweb : has("ucweb"),
		 android : has("android"),
		    ipad : has("ipad"),
		  iphone : has("iphone"),
			 ios : has("ipad") || has("iphone") || has("ipod")
	};
	return _e;
})();




//分享模块
sapp.share = function(para){
	var _e = {};
	//初始化参数
	para = $.extend({
		title : document.title,
		 text : document.title,
		  url : document.location.href,
		  img : "http://s2.vipstatic.com/img/te/resource/vip.png"
	},para);
	//
	document.addEventListener("WeixinJSBridgeReady", function() {
		//微信朋友圈
		WeixinJSBridge.on("menu:share:timeline", function(){
			sapp.event.call("share",{type:"weixin_timeline"});
			WeixinJSBridge.invoke("shareTimeline", {
				img_url : para.img,
				   link : para.url,
				   desc : para.text,
				  title : para.text
			});
		});
		//微信朋友
		WeixinJSBridge.on("menu:share:appmessage", function(){
			sapp.event.call("share",{type:"weixin_message"});
			WeixinJSBridge.invoke("sendAppMessage", {
				img_url : para.img,
				   link : para.url,
				   desc : para.text,
				  title : para.title
			});
		});
		//微博
		WeixinJSBridge.on("menu:share:weibo", function(){
			sapp.event.call("share",{type:"weibo"});
			WeixinJSBridge.invoke("shareWeibo", {
				content : para.text,
					url : para.url
			});
		});
	});
	//
	_e.setText = function(value){
		para.text = value;
	};
	return _e;
}
