$(function(){
	var lunbotu = document.getElementById("lunbotu");
	var img = document.getElementsByClassName("pic");
	/*var lunbotu = $("#lunbotu");
	var img = $(".pic");*/
	
	var count = 0;		//定义一个变量来记录图片数组的下标
	
	//切换图片的函数
	function change(){
		
		//遍历所有的图片
		for(var i = 0;i<img.length;i++){
			img[i].style.display='none';
		}
		//让当前图片下标显示
		img[count].style.display = 'block';
		count++;
		if(count == img.length){
			count = 0;
		}
	}
	//定义一个变量标识器，启动一个定时器调用change函数，一次两秒
	var timer = setInterval(change,2000);
	
	//当鼠标移动到div时候
	lunbotu.onmouseover = function(){
		//清除定时器
		clearInterval(timer);
	}
	//当鼠标离开div时候
	lunbotu.onmouseout = function(){
		//重新设置定时器
		timer = setInterval(change,2000);
	}
})
window.onload=function(){
	var oDiv  =  document.getElementById('PhotosView');
	var oUl = document.getElementById('images_ul');
	var Li = oUl.getElementsByTagName('li');//获取ul下的所有li
	oUl.innerHTML = oUl.innerHTML+oUl.innerHTML;//li下的内容进行相加
	oUl.style.width = Li[0].offsetWidth*Li.length+'px';//ul的宽度等于每个li的宽度乘以所有li的长度
	var speed = 2
	//主方法
	function move(){

		//如果左边横向滚动了长度一半之后,回到初始位置
		if(oUl.offsetLeft<-oUl.offsetWidth/speed){
			oUl.style.left = '0'
		}
		//如果右边横向滚动的距离大于0 就让他的位置回到一半
		if(oUl.offsetLeft>0){
			oUl.style.left = -oUl.offsetWidth/speed+'px';
		}
		//oUl.style.left = oUl.offsetLeft-2+'px';//进行左横向滚动
		oUl.style.left = oUl.offsetLeft+speed+'px';//进行右横向滚动

	}

	//调用方法
	var timer = setInterval(move,30)
	//鼠标指向的时候 暂停
	oDiv.onmouseover=function(){
		clearInterval(timer);
	}	
	//鼠标离开之后 继续滚动
	oDiv.onmouseout=function(){
		 timer = setInterval(move,30)
	}
}
$(function(){
	var text = document.getElementById("lunbo_text");
	var lunbo = document.getElementsByClassName("lunbo");
	/*var lunbotu = $("#lunbotu");
	var img = $(".pic");*/
	
	var count = 0;		//定义一个变量来记录图片数组的下标
	
	//切换图片的函数
	function change(){
		
		//遍历所有的图片
		for(var i = 0;i<lunbo.length;i++){
			lunbo[i].style.display='none';
		}
		//让当前图片下标显示
		lunbo[count].style.display = 'block';
		count++;
		if(count == lunbo.length){
			count = 0;
		}
	}
	//定义一个变量标识器，启动一个定时器调用change函数，一次两秒
	var timer = setInterval(change,5000);
	
	//当鼠标移动到div时候
	text.onmouseover = function(){
		//清除定时器
		clearInterval(timer);
	}
	//当鼠标离开div时候
	text.onmouseout = function(){
		//重新设置定时器
		timer = setInterval(change,5000);
	}
})