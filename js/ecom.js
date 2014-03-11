$(function() {
	var home=$("#home").offset().top;
	var art=$("#articles").offset().top;
	var word=$("#words").offset().top;
	//alert(tops);
	$(window).scroll(function(){
		var scroH=$(this).scrollTop();
		if (scroH>=word) {
			set_cur(".words");
		}else if(scroH>=art){
			set_cur(".articles");
		}else if(scroH>=home){
			set_cur(".home");
		}
	});
	$(".nav li a").click(function() {
		var el=$(this).attr('class');
		$('html,body').animate({
			scrollTop: $("#"+el).offset().top
		},{
			easing:'easeOutSine',
			duration:300,
			complete:function(){

			}
		});
		
	});
});
function set_cur(n){
	if($(".nav a").hasClass('cur')){
		$(".nav a").removeClass('cur');
	}
	$(".nav a"+n).addClass('cur');
}




/*切换右侧内容*/
var tab_con = $('.tab_con');

(function(){
    var nowindex=0;
    for(var index=0;index<tab_con.length;index++)
    {
        document.getElementById("mynav"+index).onclick=function(){
            var i=this.id.replace("mynav","");
            if(i!=nowindex.toString()){
                this.className="nav_on";
                document.getElementById("qh_con"+i).style.display="block";
                document.getElementById("mynav"+nowindex).className="nav_off";
                document.getElementById("qh_con"+nowindex).style.display="none";
                nowindex=i;
            }
        }
    }
})();


 
           