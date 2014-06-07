/**
 * 
 * @authors Anchen (you@example.org)
 * @date    2014-06-06 14:11:33
 * @version $Id$
 */

$(document).ready(function(){
	var $div_li=$("ul.tab_menu li");
	$div_li.click(function(){
		$(this).addClass("selected");
		$(this).siblings().removeClass("selected")
		var index=$div_li.index(this);
		$("div.tab_box > div")
			.eq(index).show()
			.siblings().hide();
	})

})

