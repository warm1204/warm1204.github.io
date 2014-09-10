/**
 * 
 * @authors Anchen (you@example.org)
 * @date    2014-06-16 14:21:01
 * @version $Id$
 */


$(".tanchupic").click(function(){
	$('#wrapper-result').show();
 	var srcs=$(this).attr('src');
 	$('#dialog_img').attr("src",srcs);
 })

$(".dialog_title").click(function(){
	$('#wrapper-result').hide();
})
