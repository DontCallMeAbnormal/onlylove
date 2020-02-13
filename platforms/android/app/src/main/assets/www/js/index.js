
var height;
var width;
function initpage() {

    
    
    
    height = $(window).height();
    width = $(window).width();

    $("body").parent().css("overflow", "hidden");//设置隐藏溢出部分
    $("body").innerHeight(height);//设置高度//设置隐藏溢出部分

    $(".app").innerWidth("0px");//设置宽度
    $(".app").innerHeight(height);//设置高度

    $("#page1").innerWidth(width);//设置宽度

    $("#page1").load("page1.html");//加载页面
    $("#page2").load("page2.html");//加载页面

    $("#page3").load("page3.html");//加载页面
    $("#page4").load("page4.html");//加载页面

    $(".musicbtn").css("top", height - 50 + "px");//设置悬浮的音乐按钮



    document.addEventListener("deviceReady", function () {

        
        playIndexAudio(0);//播放音乐
        $("#page1").click(nextAudio);//单击page1会播放下一首歌



        document.addEventListener("backbutton", exitApp, false);//单击返回键退出app 

        function exitApp() {
            
            media.release();//释放音频资源
            navigator.app.exitApp();

         }


        var app = {
            sendSms: function (number, message) {
                //CONFIGURATION
                var options = {
                    replaceLineBreaks: false, // true to replace \n by a new line, false by default
                    android: {
                        intent: 'INTENT'  // send SMS with the native android SMS messaging
                        //intent: '' // send SMS without opening any other app
                    }
                };

                var success = function () { alert("小狼狗爱小可爱");};
                var error = function (e) { alert('Message Failed:' + e); };
                sms.send(number, message, options, success, error);
            }
        };



        $("#msgbtn").click(function () {
            //app.sendSms("15708547401", "呼叫狗子");
            cordova.plugins.phonedialer.dial(
                "15708547401",
                function (err) {
                    if (err == "empty") alert("Unknown phone number");
                    else alert("Dialer Error:" + err);
                },
                function (success) { alert('小可爱我爱你'); }
            );
        });


    }, false);

    

}


    initpage();










var playMusicState = false;//播放状态
$(".musicbtn").click(function () {

	var music_icon = $("#music_icon");//显示图标的容器

	if (playMusicState) {
		//如果正在播放,点击后就切换播放状态为fasle
		playMusicState = false;
		music_icon.attr("xlink:href", "#icon-jingyin");//切换图标为静音
		pauseAudio();//暂停播放
	} else {
		//如果是暂停播放,点击就开始播放,并切换图片
		playMusicState = true;
		music_icon.attr("xlink:href", "#icon-yinle");//切换为播放
		playAudio();//恢复播放
	}

});




//播放音乐模块
var nowAudioIndex = 0;//当前播放的音乐索引标识
var audiolist = new Array();//音频资源
audiolist[0] = '/android_asset/www/static/music/xiaoyu.mp3';
audiolist[1] = '/android_asset/www/static/music/womendouyiyang.mp3';
audiolist[2] = '/android_asset/www/static/music/woshizhendeaini.mp3';
audiolist[3] = '/android_asset/www/static/music/xiangnixiangfengle.mp3';
audiolist[4] = '/android_asset/www/static/music/xiexienirangwozhemeaini.mp3';


audiolist = randomarray(audiolist);//将有序数组顺序随机打乱(生成音乐随机列表)


function randomarray(strtext) {
    var randomArray = new Array();
    for (; strtext.length > 0;) {

        //生成随机数
        var num = Math.random() * strtext.length;
        num = Math.round(num);

        while (!strtext[num]) {
            num = Math.random() * strtext.length;
            num = Math.round(num);
        }

        
        randomArray.push(strtext[num]);//添加到随机队列
        strtext.splice(num, 1);//从默认队列移除

    }

    return randomArray;//返回随机队列
}

var media = null;
function playIndexAudio(AudioIndex) {

    if (media != null) {
        media.stop();//停止播放
        media = null;
        //alert("下一首")
    } else {
        alert("点击屏幕播放下一首\n左下角可以暂停音乐\n有五首歌\n老婆,我真的好喜欢你呀")
    }
    
    media = new Media(audiolist[nowAudioIndex], onSuccess, onError, onStatus);

    function onSuccess() {
        console.log("playAudio Success");
    }

    function onError(error) {
        console.log("playAudio Error: " + error.code);

    }

    function onStatus(status) {
        media.getCurrentPosition(
            // success callback
            function (position) {
                if (position > -1) {
                    //alert((position) + " sec");
                    if (position < 0 && status == Media.MEDIA_STOPPED && media.getDuration() != -1) {
                        nextAudio();//下一首
                        //alert("总时间" + media.getDuration());

                    }

                }
            },
            // error callback
            function (e) {
                console.log("Error getting pos=" + e);
            });
        
    }

    media.play();

    }








//暂停播放
function pauseAudio() {
    if (media) {
        media.pause();
	}
}
//继续播放
function playAudio() {
    if (media) {
        media.play();
    }
}

//下一首
function nextAudio() {

    if (nowAudioIndex < audiolist.length - 1) {
        nowAudioIndex++;
    } else {
        nowAudioIndex = 0;
    }


    playIndexAudio(nowAudioIndex);
}







//手指动作监听
	//--左滑
$("body").on("swipeleft", nextpage);
	//--右滑
$("body").on("swiperight", beforepage);

//下一张
function nextpage() {
	var pages = getShowPageBox();
	if (!pages.last) {
		pages.thepage.css({ width: '0px' });
		pages.next.css({ width: width + 'px' });
	}
}
//上一张
function beforepage() {
	var pages = getShowPageBox();
	if (pages.before) {
		pages.before.css({ width: width + 'px' });
		pages.thepage.css({ width: '0px' });
	}
}


function getShowPageBox() {
	var a = $(".app");
	
	for (var i = 0; i < a.length; i++) {
		if ($(a[i]).css("width") != "0px") {
			var next = $(a[i+1]);//下一个页面
			var before = null;
			if (i > 0) {
				before = $(a[i-1]);//上一个页面
			}
			var last = false;
			if (i == a.length - 1) {
				last = true;
			} else {
				last = false;
			}
			
			return {
				"thepage": $(a[i]),
				"next": next,
				"before": before,
				"last":last
			}

		}

	}
}



