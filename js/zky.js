window.onload = function (){
		// 幻灯片放映
		var slidesIndex = 1;   //初始化变量为1，为了让第一张图片先显示

		 showSlides(slidesIndex); //外部调用函数

		 function showSlides(n){

		 	var slides = document.querySelectorAll('.welcome');  //找到对象
		 	var map = document.querySelectorAll('.current')
		 		// 循环 把所有幻灯片隐藏
	 			for( var i=0; i<slides.length ; i++){
		 			slides[i].style.display = 'none';
				 }
				 //循环  把所有的下方小图片隐藏
				 for(var i=0;i<map.length;i++){
			 		map[i].style.display = 'none';
		 		}

			 		slidesIndex++;  
			 		//如果图片跳到最后一张，则让其显示第一张图片
			 	if (slidesIndex > slides.length || slidesIndex > map.length) {
			 		slidesIndex = 1;
			 	}
                                                                                  
				 slides[slidesIndex-1].style.display = 'block';  //把对应的图片显示出来
					 map[slidesIndex-1].style.display = 'block'
				 setTimeout(showSlides,3000);  //定时器调用
		 	}

		 		//中部导航栏选项卡的切换
		 		var  card = document.getElementById('electCard');   //通过id找到父元素
		 		var  cards = card.querySelectorAll('a');    //找到父元素下的子元素a元素
		 		var  slide = document.getElementById('slideContent');  //通过id找到父元素
		 			 //找到父元素下的子元素li元素
		 		var  slidely = slide.querySelectorAll('.chooseCard-content  .content');  //找到父元素下的子元素li元素

		 			for(var i=0; i<cards.length; i++){
		 				 cards[i].index = i;  //自定义属性  增加索引值，方便后续找到对应元素
		 				cards[i].onmouseenter = function (){
		 					//循环  让对应内容隐藏
		 					for(var i=0;i<slidely.length;i++){
		 						 slidely[i].style.display = "none";  // 
		 						 cards[i].style.borderBottom = 'none';  //把上一个对象的下边框隐藏
		 						 cards[i].style.color = '#065397';   //恢复为原来的颜色
		 					}
		 						//让其当前内容显示
		 						this.style.borderBottom = '3px solid #065397'; //当前点击内容显示下边框
		 						this.style.color = ' #c15708';  //当前点击对象显示的颜色
		 					slidely[this.index].style.display = 'block';  //把当前点击的对象所对应的内容显示
		 				}

		 			}
 
}
