/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-04-25 10:53:26
 * @version $Id$
 */



//轮播的核心思想就是数字的索引对应图片的索引顺序
	var picTotal=$(".LunBo ul li").length;//获取轮播图片的长度
	var currentIndex;
	var displayPicNumber=0;
	var indexSpan=$('.LunBo .LunBoNum span');
	var Pic=$(".LunBo ul")

	$(indexSpan).click(displayPic);
	function displayPic(){//这个函数可以完成点击索引切换图片的功能
		currentIndex=$(this).index();//测试是父亲的第几个孩子;
		$(this).siblings().removeClass('CurrentNum');//删除所有同级兄弟的类属性
		$(this).addClass('CurrentNum');//为当前元素添加类

		$(Pic).children().hide();//隐藏全部图片
		$(Pic).children('li').eq(currentIndex).show();
	}

	function PicNumClick(){//自动轮播

		$(indexSpan).eq(displayPicNumber).trigger('click');
		displayPicNumber=(displayPicNumber+1)%picTotal;
		setTimeout('PicNumClick()',3000);
	}
	var timer=setTimeout('PicNumClick()',3000);


window.onload=function(){
	var oDiv=document.getElementById('div1');
	oDiv.onmouseover=function(){
		startMove(0);
	}
	oDiv.onmouseout=function(){
		startMove(-160);
	}
}
var timer=null;
 function startMove(iTarget){
 	var oDiv=document.getElementById('div1');
 	clearInterval(timer);
 	timer=setInterval(function(){
 		var iSpeed=0;
 		if(oDiv.offsetLeft>iTarget){
 			iSpeed=-10;
 		}else{
 			iSpeed=10;
 		}
 		if(oDiv.offsetLeft==iTarget){
 			clearInterval(timer);
 		}else{
 			oDiv.style.left=oDiv.offsetLeft+iSpeed+'px';
 		}
 	},30)
 }
