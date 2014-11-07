/**
 * 
 * @authors Anchen
 * @version $v2$
 */

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
var result_arr=['你是德罗巴：不会唱歌的魔兽不是好德华','你是埃尔南德斯：必须有强烈的抢点意识才有资格卖萌','你是C罗:上场前抹发胶能进更多球哦~','你是阿什利科尔：看世界杯时不宜怀念前任','你是埃托奥：趁门将不备可出其不意放大招','你是巴洛特利：无论场内场外都不要让别人明白你在想什么','你是贝克汉姆：今年继续负责迷倒万千群众','你是贝利：不知大神今年看好谁夺冠？','你是厄齐尔：大眼哥哥放个电瞧瞧呗','你是菲尔琼斯：身体壮不如表情丰富更让观众铭记','你是瓜迪奥拉：教大家如何集齐七大中场召唤神龙','你是卡卡：优雅范上不了场照样招妹子惦记','你是卡西利亚斯：扑救超群+够man=国门','你是勒夫：人太帅吃鼻屎都不会影响形象','你是鲁尼：有史莱克般的雄心，头发就是浮云','你是梅西：取个“球王”的外号，队友会传球给你的','你是托雷斯：必要时可打开”人生赢家“光环','你是苏亚雷斯：进攻受阻时可亮出生吃绝招','你是皮克：中场休息时让女朋友给你唱个小曲儿，但首先。。','你是佩佩：练好中国功夫必能响彻球坛','你是诺伊尔：好的门将，要勇于兼职中场','你是内马尔: 用速度把对手累趴','你是纳尼：需重点提防日本队','你是穆里尼奥：去看球一定要选择乘坐大巴出行','你是罗伊斯：小清新式的杀伤力不可小觑','你是里贝里：面带刀疤能有效震慑对方防守队员 ','你是克洛泽：庆祝时要空翻才牛逼  ','你是卡佩罗：记清夫人们的名字有利于团结作战','你是杰拉德：不可滑倒且回传要留心','你是费莱尼：烫个蓬蓬头能加强争顶优势','你是范佩西：横刀立马，唯范大将军','你是迪亚曼蒂：天热看球要喝冰泉才能解暑'];   



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
       $('.pic').html('<img src="images/'+index+'.jpg">');
      $('.wrapper-result').show();
      $(document).click(function(){
          $('.wrapper-result').hide();//点其他区域取消结果重新开始
     
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




