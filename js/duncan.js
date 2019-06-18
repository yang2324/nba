$(function(){
	var spurs = document.getElementById("spursimg");
	var img = document.getElementsByClassName("pic");
	
	var count = 0;
	function change(){
		for(var i=0;i<img.length;i++){
			img[i].style.display ='none';
		}
			img[count].style.display = 'block';
			count++;
			if(count == img.length){
				count = 0;
			}
	}

	//调用方法
	var timer = setInterval(change,2000)
	//鼠标指向的时候 暂停
	spurs.onmouseover=function(){
		clearInterval(timer);
	}	
	//鼠标离开之后 继续滚动
	spurs.onmouseout=function(){
		 timer = setInterval(change,2000)
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