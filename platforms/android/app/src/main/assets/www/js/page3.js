


var clicknum = 0;//点击计数器
window.onload = function () {
    $("#page3body").click(function () {
        var mesgbox = $("#mesgboxid");
        showmesgbox(mesgbox);
    });
    
    $("#page3").click(function () {
        var mesgbox = $("#mesgboxid");
        showmesgbox(mesgbox);
    });
    $("#closebtn").click(function () {
        var mesgbox = $("#mesgboxid");
        closemessgbox(mesgbox);
    });



   
    $("#rigthbtn").click(function () {
        switch (clicknum) {
            case 0:
                rigtclickOne();//第一次点击右边

                break;
            case 1:
                rigtclickTwo();//第二次右边
                break;
            case 2:
                rigtclickThree();//第三次右边
                break;
            case 3:
                rigtclickFour();//第四次右边
                break;
            case 4:
                rigtclickFive();//第五次右边
                break;
            case 5:
                rigthbtnSix();//第六次右边
                break;
                
            default:
                var mesgbox = $("#mesgboxid");
                closemessgbox(mesgbox);//第六次点击  关闭窗口
                break;
        }
        
        clicknum++;
    });

    $("#leftbtn").click(function () {
        switch (clicknum) {
            case 0:
                leftclickOne();//第一次点击左边
                break;
            case 1:
                leftclickTwo();//第二次左边
                break;
            case 2:
                leftclickThree();//第三次左边
                break;
            case 3:
                leftclickFour();//第四次左边
                break;
            case 4:
                leftclickFive();//第五次左边
                break;  
            default: break;
        }
       
        clicknum++;
    });

}

//显示消息框
function showmesgbox(mesgbox) {
    if (mesgbox.css("opacity") == "0") {
        
        mesgbox.css({ "width": "90%", "opacity": "1", "pointer-events": "auto"});
     
    }
}
//关闭消息框 
function closemessgbox(mesgbox) {
    if (mesgbox.css("opacity") != "0") {
        clicknum = 0;
        $("#bodyboxid").html('<p class="textshow">我想告诉你,一件事<img src="img/one.jpg" /></p>');
        $("#leftbtn").text("有屁快放");
        $("#rigthbtn").text("什么呀");
        $("#leftbtn").removeClass("nonebtn");
        $("#rigthbtn").removeClass("nextbtn");
        mesgbox.css({ "opacity": "0", "width": "0", "pointer-events": "none" });
    }
}



//右边第一次点击
function rigtclickOne() {
    $("#bodyboxid").html( '<p class="textshow" >不过我想你先回答我一个问题</br><img src="img/oneR.gif" /></p>');
    $("#leftbtn").text("拒绝回答");
    $("#rigthbtn").text("你问吧");
}
//左边第一次点击
function leftclickOne() {
    $("#bodyboxid").html('<p class="textshow" >好吧,,那我现在就给你一个屁</br><img src="img/oneL.jpg" /></p>');
    $("#leftbtn").text("我特么一拳");
    $("#rigthbtn").text("我特么一锤");
}



//右边第二次点击
function rigtclickTwo() {
    if ($("#rigthbtn").text() == "你问吧") {
        //alert("你问吧");
        $("#bodyboxid").html('<p class="textshow" >我好开心呀</br><img width="150px" src="img/two开心.png" /></p>');
        $("#leftbtn").text("盲目开心");
        $("#rigthbtn").text("我也开心呀");

    } else {
        //alert("我特么一锤");
        $("#bodyboxid").html('<p class="textshow" >哈哈哈</br><img  width="100px" src="img/two打不着.jpg" /></p>');
        $("#leftbtn").text("吐口水");
        $("#rigthbtn").text("行 你快说吧");
    }
} 
//左边第二次点击
function leftclickTwo() {
    if ($("#rigthbtn").text() == "你问吧") {
        //alert("拒绝回答");
        $("#bodyboxid").html('<p class="textshow" >求求你了</br><img width="100px" src="img/two送小花.png" /></p>');
        $("#leftbtn").text("开始你的表演");
        $("#rigthbtn").text("说,我会回答");

    } else {
       // alert("我特么一拳");
        $("#bodyboxid").html('<p class="textshow" >哈哈哈</br><img  width="100px" src="img/two打不着.jpg" /></p>');
        $("#leftbtn").text("吐口水");
        $("#rigthbtn").text("行 你快说吧");
    }
}


//右边第三次点击
function rigtclickThree() {
        $("#bodyboxid").html('<p class="textshow" >你有喜欢的人吗?</br><img width="150px" src="img/two谁.png" /></p>');
        $("#leftbtn").text("不管你事");
        $("#rigthbtn").text("不告诉你");
}
//左边第三次点击
function leftclickThree() {
    if ($("#leftbtn").text() == "吐口水") {
        //alert("吐口水");
        $("#bodyboxid").html('<p class="textshow" >哼,你居然吐我,你要对我负责</br><img  src="img/three呸.jpg" /></p>');
        $("#leftbtn").text("我让你吐我");
        $("#rigthbtn").text("我对你负责");
    } else {
        $("#bodyboxid").html('<p class="textshow" >你有喜欢的人吗?</br><img width="150px" src="img/two谁.png" /></p>');
        $("#leftbtn").text("不管你事");
        $("#rigthbtn").text("不告诉你");
    }
}



//右边第四次点击
function rigtclickFour() {
    if ($("#rigthbtn").text() == "不告诉你") {
        //alert("不告诉你")
        $("#bodyboxid").html('<p class="textshow" >不告诉我也没关系,我知道是谁</br><img  width="100px" src="img/four死鬼.jpg" /></p>');
        $("#leftbtn").text("不要脸");
        $("#rigthbtn").text("就是你啦");
    } else {
        //alert("我对你负责")
        $("#bodyboxid").html('<p class="textshow" >我也会对你负责的,我爱你</br><img  width="100px" src="img/four呐.jpg" /></p>');
        $("#leftbtn").text("我也是");
        $("#rigthbtn").text("我也爱你");
    }


}

//左边第四次点击
function leftclickFour() {
    if ($("#rigthbtn").text() == "不告诉你") {
        //alert("不关你事")
        $("#bodyboxid").html('<p class="textshow" >是吗? 这事和我关系可大了</br><img  width="100px" src="img/four叼花.gif" /></p>');
        $("#leftbtn").text("我呸");
        $("#rigthbtn").text("讨厌啦");
    } else {
        //alert("我让你吐我")
        $("#bodyboxid").html('<p class="textshow" >傻瓜,我怎么会.我要亲你</br><img  width="150px" src="img/four亲一口.gif" /></p>');
        $("#leftbtn").text("哈哈哈");
        $("#rigthbtn").text("我好喜欢你");
    }
}



//右边第五次点击
function rigtclickFive() {
    if ($("#rigthbtn").text() == "就是你啦") {
        //alert("就是你啦")
        $("#bodyboxid").html('<p class="textshow" ><b>用爱这个词来形容我的感受太苍白了,所以</br>我稀罕你</br>我爱爱爱你</br>我属于你</br>我的意义在于你</b></br><img  width="150px" src="img/five我爱你01.png" /></p>');

    } else if ($("#rigthbtn").text() == "讨厌啦") {
        //alert("讨厌啦")
        $("#bodyboxid").html('<p class="textshow" ><b>你拥有我梦寐以求的,所有的美好品质</br>我爱你</b></br><img  width="150px" src="img/five我爱你02.jpg" /></p>');

    } else if ($("#rigthbtn").text() == "我也爱你") {
        //alert("我也爱你")
        $("#bodyboxid").html('<p class="textshow" ><b>我不想在每个清晨醒来的时候,没有你在身边</br>所以,你会一直和我在一起的对吧</br>我爱你</b></br><img  width="150px" src="img/five我爱你03.png" /></p>');

    } else {
        //alert("我好喜欢你")
        $("#bodyboxid").html('<p class="textshow" ><b>我应该从遇见你的那一天起,就每天对你说一遍</br>我爱你</br><img  width="150px" src="img/five我爱你04.jpg" /></p>');



    } 


    $("#leftbtn").addClass("nonebtn");
    $("#rigthbtn").addClass("nextbtn");
    $("#rigthbtn").text("下一步");

}

//左边第五次点击
function leftclickFive() {
    if ($("#rigthbtn").text() == "就是你啦") {
        //alert("不要脸")
        $("#bodyboxid").html('<p class="textshow" ><b>你是我人生中唯一确信不疑的事</br>你是我想要的女人</br>我爱你</br><img  width="150px" src="img/five我爱你05.gif" /></p>');
         
    } else if ($("#rigthbtn").text() == "讨厌啦") {
        //alert("我呸")
        $("#bodyboxid").html('<p class="textshow" ><b>我爱你</br>胜过蝴蝶爱花香</br>胜过小草爱阳光</br>胜过任何一个我曾经爱过的人</br><img  width="150px" src="img/five我爱你06.jpg" /></p>');


    } else if ($("#rigthbtn").text() == "我也爱你") {
        //alert("我也是")
        $("#bodyboxid").html('<p class="textshow" ><b>我会一直爱你</br>直到心脏不在跳动</br>直到星辰不在发光</br>永远</b></br><img  width="150px" src="img/five我爱你07.gif" /></p>');

    } else {
        //alert("哈哈哈")
        $("#bodyboxid").html('<p class="textshow" ><b>我爱你</br>不敢相信我竟然会说那么多遍</br>这是我从未有过的感觉</br>遇见你,你让我又活过来了</b></br><img  width="150px" src="img/five我爱你08.jpg" /></p>');

    }   
    $("#leftbtn").addClass("nonebtn");
    $("#rigthbtn").addClass("nextbtn");
    $("#rigthbtn").text("下一步");

}



//右边按钮第六次点击
function rigthbtnSix() {
    $("#bodyboxid").html('<p class="textshow" > 在下一个页面,点击桃心</br>就可以告诉我,你想我了</br>我会来找你的</br><img  width="150px" src="img/six桃心.png" /></p>');

    $("#rigthbtn").text("关闭窗口");


}





