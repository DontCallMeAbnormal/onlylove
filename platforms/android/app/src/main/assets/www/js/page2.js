


var strtext = new Array()
strtext[0] = '没你的夜里<br/>只有我的影子<br/>愿意和我在一起<br/>我吸烟的时候&nbsp;它也吸<br/>说到底<br/>我的影子也在想你';
strtext[1] = '正常心跳:_/\\___/\\____/\\____<br/>看见你时的心跳_/\\_/\\_/\\_/\\_<br/>和你聊天时的心跳/\\/\\/\\/\\/\\/\\/\\/\\/\\<br/>你不理我时的心跳——————<br/>';
strtext[2] = '祝你今天愉快</br>你明天的愉快</br>留着我明天再祝';
strtext[3] = '我想变成你</br>见你所见</br>爱你所爱';
strtext[4] = '你是我想用</br>美好和可爱来形容的人</br>你的出现就是</br>我翘首以盼的幸运';
strtext[5] = '我这一生都是</br>坚定不移的唯物主义者</br>唯有你我希望有来生';
strtext[6] = 'while(life < end)</br>{</br>&nbsp;&nbsp;love++</br>}';
strtext[7] = '我是预言家</br>昨天晚上我</br>查验了你的身份</br>你是我喜欢的人';
strtext[8] = '我怎么就遇上你了呢?</br>我这辈子</br>一不拜佛,二不敬神</br>怎么就能遇上</br>这么好的你';
strtext[9] = '为了寻找你</br>我要</br>搬进鸟的眼睛</br>盯着路边的风';
strtext[10] = '我把我整个的</br>灵魂都给你</br>连同它的</br>一千八百种坏毛病</br>它真讨厌</br>只有一点好</br>那就是,爱你这点';
strtext[11] = '我想和你在一起</br>已经想很久了</br>故事很长</br>长话短说</br>我喜欢你';
strtext[12] = '你出现的那一刻起</br>你就是我全部的风景';
strtext[13] = '我想要在茅亭里看雨</br>假山边看蚂蚁</br>看蝴蝶恋爱,看蜘蛛结网</br>看水,看船,看云,看瀑布</br>看陆希甜甜地睡觉';
strtext[14] = '我遇见你 我记得你</br>这座城市天生适合恋爱</br>你天生适合我的灵魂';
strtext[15] = '你最可爱</br>说时来不及思索</br>但思索之后</br>还是这样说';
strtext[16] = '我想和你拍照片</br>那种宽53mm</br>高35mm的</br>红底双人彩照';
strtext[17] = '我攒了好多年的</br>温柔和浪漫</br>想要快点都给你';
strtext[18] = '我没爱过别人</br>你是第一个</br>我怕我做的不好</br>让你觉得</br>爱情也不过如此';
strtext[19] = '这个世界乱糟糟的</br>而你干干净净</br>可以悬在我心上</br>做太阳和月亮';
strtext[20] = '遇见你之前</br>我没想过结婚</br>遇见你之后</br>结婚我没想过别人';
strtext[21] = '我想你</br>看看这段话的</br>前三个字';
strtext[22] = '在所有的告别里</br>最喜欢的是</br>明天见';
strtext[23] = '我是负五</br>你是负二</br>我们加在一起</br>就是夫妻啦！';
strtext[24] = '你的一举一动</br>决定了我所有的</br>悲欢喜忧';
strtext[25] = '我这个人</br>什么都不是</br>没脑子，没钱</br>也没未来</br>可是我喜欢一个人</br>我想要给她</br>最好的结局';
strtext[26] = '我这个人</br>不算太好</br>不算太坏</br>你姑且试试';
strtext[27] = '想跟你过威宁的冬天</br>不是冬天也行</br>不是威宁也行</br>不是你不行';
strtext[28] = '"我想要两个西柚"</br>——</br>I want to see you';
strtext[29] = '我并没有喜欢</br>哪一种类型的人</br>如果我喜欢你</br>我喜欢的</br>就只是你';
strtext[30] = '白茶清欢无别事</br>我在等风也等你';
strtext[31] = '今夜我不关心人类</br>我只想你</br>我爱你小希';
strtext[32] = '遇到了可爱的人</br>就觉得生活</br>一下子不艰难了</br>晚风也好,凉风也罢</br>都想笑。';
strtext[33] = '这世间最烈的酒</br>是</br>你低头噙笑的温柔';
strtext[34] = '第一次看到宇宙</br>是和你</br>四目相对的时候';
strtext[35] = '我喜欢你</br>觉得你的一举一动</br>都亲切</br>不高兴你比喜欢我</br>更喜欢别人</br>你要是喜欢别人</br>我会哭</br>但还是喜欢你';


strtext = randomarray(strtext);//将有序数组顺序随机打乱
$("#page2text").html(strtext[0]);
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

        console.log(strtext[num]);
        randomArray.push(strtext[num]);//添加到随机队列
        strtext.splice(num, 1);//从默认队列移除

    }

    return randomArray;//返回随机队列
}

var coumt = 1;
$("#page2text").click(function () {

    $("#page2text").html(strtext[coumt]);
    if (coumt < strtext.length-1) {
        coumt++;
    } else {
        coumt = 0;
    }

});



