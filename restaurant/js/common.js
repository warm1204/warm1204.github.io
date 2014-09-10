/**
 *
 * @authors Anchen
 * @date    2014-09-08 13:10:52
 * @version $Id$
 */
(function($) {
	var CommonJS = function() {
		var commonJS = {
			lunbo: function() {
				var bn_id = 0;
				var bn_id2 = 1;
				var speed33 = 5000;
				var qhjg = 1;
				var MyMar33;
				//index.html的轮播图文字切换
				//var intr_arr=['第一个菜式这里是菜式介绍这里是菜式介绍这里是菜式介绍这里是菜式介绍','龙虾刺身','第三个菜式这里是菜式介绍这里是菜式介绍这里是菜式介绍这里是菜式介绍'];
				//product.html的轮播图文字切换
				//var pro_arr=['xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx','ssssssssssssssssssssssssss','fffffffffffffffffffff']
				$("#banner .d1").hide();
				$("#banner .d1").eq(0).fadeIn("slow");
				if ($("#banner .d1").length > 1) {
					$("#banner_id li").eq(0).addClass("nuw");
					//$(".foodintr").html(intr_arr[0]);
					//$(".prointr").html( pro_arr[0]);
					function Marquee33() {
						bn_id2 = bn_id + 1;
						if (bn_id2 > $("#banner .d1").length - 1) {
							bn_id2 = 0;
						}
						$("#banner .d1").eq(bn_id).css("z-index", "2");
						$("#banner .d1").eq(bn_id2).css("z-index", "1");
						$("#banner .d1").eq(bn_id2).show();
						$("#banner .d1").eq(bn_id).fadeOut("slow");
						$("#banner_id li").removeClass("nuw");
						$("#banner_id li").eq(bn_id2).addClass("nuw");
						//$(".foodintr").html(intr_arr[bn_id2]);
						//$(".prointr").html( pro_arr[bn_id2]);
						bn_id = bn_id2;
					};
					timer = setInterval(Marquee33, speed33);
					$("#banner_id li").click(function() {
						var bn_id3 = $("#banner_id li").index(this);
						if (bn_id3 != bn_id && qhjg == 1) {
							qhjg = 0;
							$("#banner .d1").eq(bn_id).css("z-index", "2");
							$("#banner .d1").eq(bn_id3).css("z-index", "1");
							$("#banner .d1").eq(bn_id3).show();
							$("#banner .d1").eq(bn_id).fadeOut("slow", function() {
								qhjg = 1;
							});
							$("#banner_id li").removeClass("nuw");
							$("#banner_id li").eq(bn_id3).addClass("nuw");
							$(".foodintr").html(intr_arr[bn_id3]);
							$(".prointr").html(pro_arr[bn_id2]);
							bn_id = bn_id3;
						}
					})
					$("#banner_id").hover(
						function() {
							clearInterval(timer);
						},
						function() {
							timer = setInterval(Marquee33, speed33);
						}
					)
				} else {
					$("#banner_id").fadeIn("slow");
				}
			},
			showDialog:function(){
				$(".tanchupic").click(function() {
					$('#wrapper-result').show();
					var srcs = $(this).attr('src');
					$('#dialog_img').attr("src", srcs);
				})

				$(".dialog_title").click(function() {
					$('#wrapper-result').hide();
				})
			},
			tab:function(){
				var $div_li = $("ul.tab_menu li");
				$div_li.mouseover(function() {
					$(this).addClass("selected");
					$(this).siblings().removeClass("selected")
					var index = $div_li.index(this);
					$("div.tab_box > div")
						.eq(index).show()
						.siblings().hide();
				})
			}
		};
		return commonJS;
	}();
	window.CommonJS = CommonJS;
})(jQuery)
/*调用*/
CommonJS.lunbo();
CommonJS.showDialog();
CommonJS.tab();
