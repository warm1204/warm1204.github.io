
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

	/*window.onload=function(){
     var home=document.getElementById('home');
     var aUl=home.getElementsByTagName('ul')[0];
     var ali=aUl.getElementsByTagName('li');
     var oDiv=home.getElementsByTagName('div');
     var timer=null;
    function show(){

     for(var i=0;i<ali.length;i++){
          ali[i].index=i;
          ali[i].onmouseover=oDiv[i].onmouseover=function(){
               clearTimeout(timer);
               setTimeout(function(){
                    oDiv[i].style.display='block';//错误：无效

               },300);
          };
          ali[i].onmouseout=oDiv[i].onmouseout=function(){
            clearTimeout(timer);
          timer=setTimeout(function(){
          	oDiv[i].style.display='none';
          },300);
   		  };
    };}
    show();
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
      return false;
      };
    };
};

