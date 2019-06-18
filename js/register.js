 function focus_username() {
    //获取id=result_username的对象
    var resultObj=document.getElementById("reuslt_username");
}
function blur_username() {
    //获取id=result_username的对象
    var resultObj = document.getElementById("reuslt_username");
    //账号名验证
    if(document.form1.username.value=="") {
        resultObj.innerHTML="* 账号名不能为空";
        resultObj.style.color="red";
        return false;
    } else if(document.form1.username.value.length<4||document.form1.username.value.length>20) {
        resultObj.innerHTML="* 账号名长度必须介于4-20字符之间";
        resultObj.style.color="red";
        return false;
    } else {
        resultObj.innerHTML="";
        return true;
    }
}

function focus_userpwd1() {
    //获取id=reuslt_password1的对象
    var resultObj=document.getElementById("reuslt_password1");
}
 function blur_userpwd1() {
    //获取id=reuslt_password1的对象
    var resultObj = document.getElementById("reuslt_password1");
    //密码验证
    if(document.form1.userpwd1.value=="") {
        resultObj.innerHTML="* 密码不能为空";
        resultObj.style.color="red";
        return false;
    } else if(document.form1.userpwd1.value.length<6||document.form1.userpwd1.value.length>20) {
        resultObj.innerHTML="* 密码长度必须介于6-20字符之间";
        resultObj.style.color="red";
        return false;
    } else {
        resultObj.innerHTML="";
        return true;
    }
}
 
function focus_userpwd2() {
    //获取id=reuslt_password2的对象
    var resultObj=document.getElementById("reuslt_password2");
}
 function blur_userpwd2() {
    //获取id=reuslt_password2的对象
    var resultObj = document.getElementById("reuslt_password2");
    var userpassword1 = document.form1.userpwd1.value;
    var userpassword2 = document.form1.userpwd2.value;
    //验证两次密码是否一致
    if(userpassword1 != userpassword2) {
        resultObj.innerHTML="* 两次密码输入不一致！";
        resultObj.style.color="red";
        return false;
    } else {
        resultObj.innerHTML="";
        return true;
    }
}
 
function focus_code() {
    //获取id=reuslt_code的对象
    var resultObj=document.getElementById("reuslt_code");
}
 function blur_code() {
    //获取id=reuslt_code的对象
    var resultObj = document.getElementById("reuslt_code");
    //获取显示区生成的验证码
    var checkCode = document.getElementById("checkCode").innerHTML;
    //获取输入的验证码
    var inputCode = document.getElementById("inputCode").value;
    console.log(checkCode);
    console.log(inputCode);
    
    //验证码验证是否一致
    if (inputCode.length <= 0)
        {
            resultObj.innerHTML="* 验证码不能为空！";
        	resultObj.style.color="red";
        }
        else if (inputCode.toUpperCase() != checkCode.toUpperCase())
        {
            resultObj.innerHTML="* 请输入正确的验证码！";
        	resultObj.style.color="red";
            createCode(4);
        }
        else
        {
           resultObj.innerHTML="";
        }       
} 
 
 
//点击注册时候验证各项信息是否正确，
function checkForm() {
    var flag_username = blur_username();
    var flag_userpwd1 = blur_userpwd1();
    var flag_userpwd2 = blur_userpwd2();
    var flag_code = blur_code();
    if (flag_username==true&&flag_userpwd1==true&&flag_userpwd2==true&&flag_code==true) {
        return true;
    } else {
        return false;
    }
}
 
 //验证码
 //页面加载时，生成随机验证码
	$(function(){
		createCode(4);
	})
    //生成验证码的方法
    function createCode(length) {
        var code = "";
        var codeLength = parseInt(length); //验证码的长度
        var checkCode = document.getElementById("checkCode");
        ////所有候选组成验证码的字符，当然也可以用中文的
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); 
        //循环组成验证码的字符串
        for (var i = 0; i < codeLength; i++)
        {
            //获取随机验证码下标
            var charNum = Math.floor(Math.random() * 62);
            //组合成指定字符验证码
            code += codeChars[charNum];
        }
        if (checkCode)
        {
            //为验证码区域添加样式名
            checkCode.className = "code";
            //将生成验证码赋值到显示区
            checkCode.innerHTML = code;
        }
    }
    
//检查验证码是否正确
/*
    function validateCode()
    {
    	var resultObj = document.getElementById("reuslt_code");
        //获取显示区生成的验证码
        var checkCode = document.getElementById("checkCode").innerHTML;
        //获取输入的验证码
        var inputCode = document.getElementById("inputCode").value;
        console.log(checkCode);
        console.log(inputCode);
        if (inputCode.length <= 0)
        {
            resultObj.innerHTML="* 请输入正确的验证码！";
        	resultObj.style.color="red";
        }
        else if (inputCode.toUpperCase() != checkCode.toUpperCase())
        {
            resultObj.innerHTML="* 请输入正确的验证码！";
        	resultObj.style.color="red";
            createCode(4);
        }
        else
        {
            alert("验证码正确！");
        }       
    }  */
   
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