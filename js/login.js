function focus_username() {
    //获取id=result_username的对象
    var resultObj=document.getElementById("result_username");
}
function blur_username() {
    //获取id=result_username的对象
    var resultObj = document.getElementById("result_username");
    //用户名验证
    if(document.form1.username.value=="") {
        resultObj.innerHTML="* 用户名不能为空";
        resultObj.style.color="red";
        return false;
    } else if(document.form1.username.value.length<4||document.form1.username.value.length>20) {
        resultObj.innerHTML="* 用户名长度必须介于4-20字符之间";
        resultObj.style.color="red";
        return false;
    } else {
        resultObj.innerHTML="";
        return true;
    }
}

function focus_userpwd() {
    //获取id=result_userpwd的对象
    var resultObj=document.getElementById("result_userpwd");
}
 function blur_userpwd() {
    //获取id=result_userpwd的对象
    var resultObj = document.getElementById("result_userpwd");
    //密码验证
    if(document.form1.userpwd.value=="") {
        resultObj.innerHTML="* 密码不能为空";
        resultObj.style.color="red";
        return false;
    } else if(document.form1.userpwd.value.length<6||document.form1.userpwd.value.length>20) {
        resultObj.innerHTML="* 密码长度必须介于6-20字符之间";
        resultObj.style.color="red";
        return false;
    } else {
        resultObj.innerHTML="";
        return true;
    }
}
//点击登录时候验证密码姓名是否正确，
function checkForm() {
    var flag_username = blur_username();
    var flag_userpwd = blur_userpwd();
    if (flag_username==true&&flag_userpwd==true) {
        return true;
    } else {
        return false;
    }
}

//轮播图
window.onload = function () {
 
var div = document.getElementById("left");
var img = $(".pic");

//通过getElementsByTagName 获取的标签是一个数组

var count = 0;//定义一个变量用来记录图片数组下标
var timer = null;//定义一个变量标识时器
timer=setInterval(change ,2000);//启动一个定时器2000毫秒调用一次change函数（切换一张图片）

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
div.onmouseover = function () {
clearInterval(timer);//当鼠标移入Div时清除定时器，作用是当我们鼠标移入图片时
//图片就不再自动切换
}
div.onmouseout = function () {
timer = setInterval(change, 2000);//当鼠标移入Div时开启定时器，作用是当我们鼠标移
//出div时又让图片自动切换
}
}