window.onload = function () {
 
/*var lunbotu = $(".lunbotu");*/
var lunbotu = document.getElementById("lunbotu");
var img = $(".pic");

var count = 0;//定义一个变量用来记录图片数组下标


function change() {//切换图片的函数

for (var i = 0; i < img.length; i++) {//遍历所有图片
	img[i].style.display = 'none';//先让所有图片隐藏
}
	img[count].style.display = 'block';//让当前下标的图片显示
	count++;//每次加1
if (count == img.length) {
	//当count==图片张数时让count=0；
	count = 0;//使图片数组下标又回到0就形成了一个循环那么就可以让图片循环切换了
}
}
/*var timer = null;*///定义一个变量标识时器
var timer=setInterval(change ,2000);//启动一个定时器2000毫秒调用一次change函数（切换一张图片）

lunbotu.onmouseover = function () {
	clearInterval(timer);//当鼠标移入Div时清除定时器
}
lunbotu.onmouseout = function () {
	timer = setInterval(change ,2000);//当鼠标离开Div时开启定时器
	
}
}

$(function(){

	$(window).scroll(function(){
		slideIn($(".animate-box"),230);
	});


	function slideIn(obj,left){
		var targetHeight = obj.offset().top;   //目标元素到顶部的距离
		var scrollTop = $(window).scrollTop(); //页面滚动的距离

		if(scrollTop>targetHeight-400){
			obj.animate({left:left+'px',opacity:1,filter:'Alpha(opacity=90)'},500);
		}
	};
});

$(function(){
	$(".yuan").click(function(){
		//点击菜单按钮事件
		$(".shiping_pic").toggle();

	});

});