
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

	$("#page4").load("page4.html");//加载页面

	$(".musicbtn").css("top", height - 50 + "px");//设置悬浮的音乐按钮

	document.addEventListener("deviceReady", function () {
		playAudio();//播放音乐

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
var mediaPlay = null;

function playAudio() {
	var src = "/android_asset/www/static/music/xiaoyu.mp3";

	if (mediaPlay === null) {
		mediaPlay = new Media(src, onSuccess, onError);

		function onSuccess() {
			//当播放成功
			playMusicState = true;//切换状态为true 播放中
			music_icon.attr("xlink:href", "#icon-yinle");//切换为播放
			alert("开始播放");
			
		}

		function onError(error) {
			console.log("playAudio Error: " + error.code);
			alert("playAudio Error: " + error.code);
		}

	}

	mediaPlay.play();//开始播放音乐
}

//暂停播放
function pauseAudio() {
	if (mediaPlay) {
		mediaPlay.pause();
	}
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



