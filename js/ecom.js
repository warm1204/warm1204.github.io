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


 
            function intval(v){
                v = parseInt(v);
                return isNaN(v) ? 0 : v;
            } // ?取元素信息    
            function getPos(e){
                var l = 0;
                var t = 0;
                var w = intval(e.style.width);
                var h = intval(e.style.height);
                var wb = e.offsetWidth;
                var hb = e.offsetHeight;
                while (e.offsetParent) {
                    l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
                    t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
                    e = e.offsetParent;
                }
                l += e.offsetLeft + (e.currentStyle ? intval(e.currentStyle.borderLeftWidth) : 0);
                t += e.offsetTop + (e.currentStyle ? intval(e.currentStyle.borderTopWidth) : 0);
                return {
                    x: l,
                    y: t,
                    w: w,
                    h: h,
                    wb: wb,
                    hb: hb
                };
            } // ?取??条信息    
            function getScroll(){
                var t, l, w, h;
                if (document.documentElement && document.documentElement.scrollTop) {
                    t = document.documentElement.scrollTop;
                    l = document.documentElement.scrollLeft;
                    w = document.documentElement.scrollWidth;
                    h = document.documentElement.scrollHeight;
                }
                else 
                    if (document.body) {
                        t = document.body.scrollTop;
                        l = document.body.scrollLeft;
                        w = document.body.scrollWidth;
                        h = document.body.scrollHeight;
                    }
                return {
                    t: t,
                    l: l,
                    w: w,
                    h: h
                };
            } // ?点(Anchor)?平滑跳?    
            function scroller(el, duration){
                if (typeof el != 'object') {
                    el = document.getElementById(el);
                }
                if (!el) 
                    return;
                var z = this;
                z.el = el;
                z.p = getPos(el);
                z.s = getScroll();
                z.clear = function(){
                    window.clearInterval(z.timer);
                    z.timer = null
                };
                z.t = (new Date).getTime();
                z.step = function(){
                    var t = (new Date).getTime();
                    var p = (t - z.t) / duration;
                    if (t >= duration + z.t) {
                        z.clear();
                        window.setTimeout(function(){
                            z.scroll(z.p.y, z.p.x)
                        }, 13);
                    }
                    else {
                        st = ((-Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.y - z.s.t) + z.s.t;
                        sl = ((-Math.cos(p * Math.PI) / 2) + 0.5) * (z.p.x - z.s.l) + z.s.l;
                        z.scroll(st, sl);
                    }
                };
                z.scroll = function(t, l){
                    window.scrollTo(l, t)
                };
                z.timer = window.setInterval(function(){
                    z.step();
                }, 13);
            }
            window.onload= scroller();