/*
var result_arr=['你最适合支持的是喀麦隆','你最适合支持的是智利','你最适合支持的是厄瓜多尔','你最适合支持的是英格兰','你最适合支持的是荷兰','你最适合支持的是洪都拉斯','你最适合支持的是阿根廷','你最适合支持的是德国','你最适合支持的是尼日利亚','你最适合支持的是伊朗','你最适合支持的是加纳','你最适合支持的是阿尔及利亚','你最适合支持的是哥伦比亚','你最适合支持的是日本','你最适合支持的是希腊','你最适合支持的是乌拉圭','你最适合支持的是墨西哥','你最适合支持的是巴西','你最适合支持的是克罗地亚','你最适合支持的是西班牙','你最适合支持的是比利时','你最适合支持的是韩国','你最适合支持的是瑞士','你最适合支持的是哥斯达黎加','你最适合支持的是比利时','你最适合支持的是美国','你最适合支持的是意大利','你最适合支持的是澳大利亚','你最适合支持的是俄罗斯','你最适合支持的是葡萄牙','你最适合支持的是法国','你最适合支持的是波黑'];
function show_result(){
    var result_text=result_arr[1];
    var username=$('#username').val();
    $('.result-content').html("'"+username+"'"+result_text);
    $('.wrapper-result').show();

  }*/

var index=1,           //当前亮区位置
prevIndex=32,          //前一位置
Speed=300,           //初始速度
Time,            //定义对象
arr_length =32;          //初始化数组
EndIndex=1,           //决定在哪一格变慢
cycle=0,           //转动圈数   
EndCycle=3,           //计算圈数
flag=false,           //结束转动标志
random_num=1,      //中奖数
quick=0;           //加速
var result_arr=['你最适合支持的是喀麦隆','你最适合支持的是智利','你最适合支持的是厄瓜多尔','你最适合支持的是英格兰','你最适合支持的是荷兰','你最适合支持的是洪都拉斯','你最适合支持的是阿根廷','你最适合支持的是德国','你最适合支持的是尼日利亚','你最适合支持的是伊朗','你最适合支持的是加纳','你最适合支持的是阿尔及利亚','你最适合支持的是哥伦比亚','你最适合支持的是日本','你最适合支持的是希腊','你最适合支持的是乌拉圭','你最适合支持的是墨西哥','你最适合支持的是巴西','你最适合支持的是克罗地亚','你最适合支持的是西班牙','你最适合支持的是比利时','你最适合支持的是韩国','你最适合支持的是瑞士','你最适合支持的是哥斯达黎加','你最适合支持的是比利时','你最适合支持的是美国','你最适合支持的是意大利','你最适合支持的是澳大利亚','你最适合支持的是俄罗斯','你最适合支持的是葡萄牙','你最适合支持的是法国','你最适合支持的是波黑'];   
function StartGame(){
	//判断输入框
	name=$('#username').val();
   if(name==""||name.length==0){
      alert("请输入姓名!");
      return false;
   }else{
    clearInterval(Time);
		$("#random_box li").removeClass("random_current"); //取消选中
 		random_num = Math.floor(Math.random()*32)+1; 
  		 index=1; //再来一次,从1开始
  		 cycle=0;
  		 flag=false;
   		if(random_num>20) {
  			EndIndex = random_num - 20; //前20格开始变慢
   		} else {
 			 EndIndex = random_num + 32 -20; //前20格开始变慢
  		 }
   		Time = setInterval(Star,Speed);
  	 }
}
function Star(num){
    //跑马灯变速
    if(flag==false){
      if(quick==8){
         clearInterval(Time);
         Speed=50;
         Time=setInterval(Star,Speed);
      }
      //跑N圈减速
      if(cycle==EndCycle+1 && index-1==EndIndex){
      clearInterval(Time);
         Speed=300;
         flag=true;         //触发结束
         Time=setInterval(Star,Speed);
      }
    }
   
    if(index>arr_length){
        index=1;
        cycle++;
    }
   
   //结束转动并选中号码
   if(flag==true && index==parseInt(random_num)){ 
      quick=0;
      clearInterval(Time);
      //弹出结果
       var result_text=result_arr[index-1];
      var username=$('#username').val();
       $('.result-content').html("'"+username+"'"+result_text);
      $('.wrapper-result').show();
      $(document).click(function(){
          $('.wrapper-result').hide();
     
      });



   }
   $("#random_"+index).addClass('random_current'); //设置当前选中样式
   if(index>1)
       prevIndex=index-1;
   else{
       prevIndex=arr_length;
   }
   $("#random_"+prevIndex).removeClass('random_current'); //取消上次选择样式 
   index++;
   quick++;

}




