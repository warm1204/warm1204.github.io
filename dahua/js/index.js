

$(function(){ 
$(".but").click(function(){ 
$("#faqbg").css({display:"block",height:$(document).height()}); 
var yscroll =document.documentElement.scrollTop; 
$("#faqdiv").css("top","100px"); 
$("#faqdiv").css("display","block"); 
document.documentElement.scrollTop=0; 
}); 
$(".close").click(function(){ 
$("#faqbg").css("display","none"); 
$("#faqdiv").css("display","none"); 
}); 
}) 
$(function(){
	nie.use(["util.share","util.fixPNG"],function(){
		$.share.appendTo("#rShare",{title:""});	
		var share2=nie.util.share({
　			fat:".rWShare",
　			type:2,
　			title:"《大话西游2》资料片灵宝降魔开测发大礼啦！答题有奖，iPad mini、鼠标垫，精美陶瓷杯等你来拿。",
			img:"/images/fenxiang.jpg"
		});
	});
});
nie.config.copyRight.setWhite();