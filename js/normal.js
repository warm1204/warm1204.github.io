
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

