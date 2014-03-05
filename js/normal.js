
/*window.onload = function() {
	var left1=document.getElementById('left1');
	var show1=document.getElementById('show1');
	var timer=null;
	left1.onmouseover=show1.onmouseover=function(){
		clearTimeout(timer);
		setTimeout(function(){
			show1.style.display='block';
		},300);
	};
	left1.onmouseout=show1.onmouseout=function(){
		clearTimeout(timer);
		timer=setTimeout(function(){
			show1.style.display='none';
		},300);

	};
};*/



function showNow(whichone){
  var sourse=whichone.getAttribute("href");
  var show=document.getElementById('show');
  show.setAttribute("src",sourse);
};

window.onload=function(){
    var navleft=document.getElementById('navleft');
    var links=navleft.getElementsByTagName('a');
    for(var i=0;i<3;i++){
      links[i].onmouseover=function(){
      showNow(this);
      show.style.display="block";
      return false;
      };
    };
    show.onmouseover=function() {
      show.style.display="none";
    };
  
};

