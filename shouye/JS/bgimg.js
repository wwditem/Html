/*
作者: imsyy
主页：https://www.imsyy.top/
GitHub：https://github.com/imsyy/home
版权所有，请勿删除
*/

/* 自定义配置 */
/* 尚未完善 */
$(function () {
    let url = "../setting.json"
    $.getJSON(
        url,
        function (data) {
            /* 页头数据 */
            $('title').text(data.title);
            $('#loading-title').html(data.title);
            $("meta[name='description']").attr('content', data.description);
            $("meta[name='keywords']").attr('content', data.keywords);
            $("meta[name='author']").attr('content', data.author);
            /* 基础信息 */
            $("#logo-img").attr("src", data.logo_img);
            $('#logo-text-1').html(data.logo_text_1);
            $('#logo-text-2').html("." + data.logo_text_2);
            $('#logo-title-other').html(data.logo_text_1);
            $('#logo-title-other-small').html("." + data.logo_text_2);
            $('#logo-text-small').html(data.logo_text_1 + "." + data.logo_text_2);
            /* 快捷链接 */
            $('#link-url-1').attr('href', data.link_1[0]);
            $('#link-icon-1').attr('class', data.link_1[1]);
            $('#link-name-1').html(data.link_1[2]);
            $('#link-url-2').attr('href', data.link_2[0]);
            $('#link-icon-2').attr('class', data.link_2[1]);
            $('#link-name-2').html(data.link_2[2]);
            $('#link-url-3').attr('href', data.link_3[0]);
            $('#link-icon-3').attr('class', data.link_3[1]);
            $('#link-name-3').html(data.link_3[2]);
            $('#link-url-4').attr('href', data.link_4[0]);
            $('#link-icon-4').attr('class', data.link_4[1]);
            $('#link-name-4').html(data.link_4[2]);
            $('#link-url-5').attr('href', data.link_5[0]);
            $('#link-icon-5').attr('class', data.link_5[1]);
            $('#link-name-5').html(data.link_5[2]);
            $('#link-url-6').attr('href', data.link_6[0]);
            $('#link-icon-6').attr('class', data.link_6[1]);
            $('#link-name-6').html(data.link_6[2]);
            //页脚版权
            $('#power-text').html(data.Copyright_text);
            $('#beian').html("&amp;&nbsp;" + data.beian);
        }
    )
});

// 背景图片 Cookies 
function setBgImg(bg_img) {
    if (bg_img) {
        Cookies.set('bg_img', bg_img, {
            expires: 36500
        });
        return true;
    }
    return false;
};

// 获取背景图片 Cookies
function getBgImg() {
    let bg_img_local = Cookies.get('bg_img');
    if (bg_img_local && bg_img_local !== "{}") {
        return JSON.parse(bg_img_local);
    } else {
        setBgImg(bg_img_preinstall);
        return bg_img_preinstall;
    }
}

let bg_img_preinstall = {
    "type": "1", // 1:默认背景 2:每日一图 3:随机风景 4:随机动漫
    "2": "https://api.dujin.org/bing/1920.php", // 每日一图
    "3": "https://api.ixiaowai.cn/gqapi/gqapi.php", // 随机风景
    "4": "https://api.ixiaowai.cn/api/api.php" // 随机动漫
};

// 更改背景图片
function setBgImgInit() {
    var bg_img = getBgImg();
    $("input[name='wallpaper-type'][value=" + bg_img["type"] + "]").click();

    switch (bg_img["type"]) {
        case "1":
            var pictures = new Array();
            pictures[0] = 'https://cdn2.pandaimg.com/2022/09/10/631c488b299a0.webp';
            pictures[1] = 'https://cdn2.pandaimg.com/2022/09/10/631c488b22a8b.webp';
            pictures[2] = 'https://cdn2.pandaimg.com/2022/09/10/631c488cc66cd.webp';
            pictures[3] = 'https://cdn2.pandaimg.com/2022/09/10/631c488e8d1ab.webp';
            pictures[4] = 'https://cdn2.pandaimg.com/2022/09/10/631c4891c5721.webp';
            pictures[5] = 'https://cdn2.pandaimg.com/2022/10/09/634235bf51edd.webp';
            pictures[6] = 'https://cdn2.pandaimg.com/2022/10/09/634236b96d4bc.webp';
            pictures[7] = 'https://cdn2.pandaimg.com/2022/10/09/634236b46b82c.webp';
            pictures[8] = 'https://cdn2.pandaimg.com/2022/10/09/634236ae407a4.webp';
            pictures[9] = 'https://cdn2.pandaimg.com/2022/10/09/634236adaa853.webp';
            pictures[10] = 'https://cdn2.pandaimg.com/2022/09/10/631c7ecea326c.webp';
            pictures[11] = 'https://cdn2.pandaimg.com/2022/09/10/631c7ecc8ad8d.webp';
            pictures[12] = 'https://cdn2.pandaimg.com/2022/09/10/631c7ed29ebe4.webp';
            pictures[13] = 'https://cdn2.pandaimg.com/2022/09/10/631c7ed060ae4.webp';
            pictures[14] = 'https://cdn2.pandaimg.com/2022/09/10/631c7ecb04e93.webp';
            pictures[15] = 'https://cdn2.pandaimg.com/2022/09/10/631c7ee31b166.webp';
            pictures[16] = 'https://cdn2.pandaimg.com/2022/09/10/631c7f527ed34.webp';
            pictures[17] = 'https://cdn2.pandaimg.com/2022/09/10/631c7ed8585b4.webp';
            pictures[18] = 'https://cdn2.pandaimg.com/2022/09/10/631c7ecaf251d.webp';
            pictures[19] = 'https://cdn2.pandaimg.com/2022/09/10/631c7ed520a2c.webp';
            pictures[20] = 'https://cdn2.pandaimg.com/2022/09/10/631c7ed520a2c.webp';
            pictures[21] = 'https://cdn2.pandaimg.com/2022/10/09/634237326681c.webp';
            pictures[22] = 'https://cdn2.pandaimg.com/2022/10/09/6342373bbad54.webp';
            pictures[23] = 'https://cdn2.pandaimg.com/2022/10/09/6342373769e5d.webp';
            pictures[24] = 'https://cdn2.pandaimg.com/2022/10/09/6342374098424.webp';
            pictures[25] = 'https://cdn2.pandaimg.com/2022/10/09/63423764c7732.webp';
            pictures[26] = 'https://cdn2.pandaimg.com/2022/10/09/6342374692395.webp';
            pictures[27] = 'https://cdn2.pandaimg.com/2022/10/09/6342375a767c9.webp';
            pictures[28] = 'https://cdn2.pandaimg.com/2022/10/09/63423751a09b3.webp';
            pictures[29] = 'https://cdn2.pandaimg.com/2022/10/09/6342374c10558.webp';
            var rd = Math.floor(Math.random() * 30);
            $('#bg').attr('src', pictures[rd]) //随机默认壁纸
            break;
        case "2":
            $('#bg').attr('src', bg_img_preinstall[2]); //必应每日
            break;
        case "3":
            $('#bg').attr('src', bg_img_preinstall[3]); //随机风景
            break;
        case "4":
            $('#bg').attr('src', bg_img_preinstall[4]); //随机动漫
            break;
    }
};

$(document).ready(function () {
    // 壁纸数据加载
    setBgImgInit();
    // 设置背景图片
    $("#wallpaper").on("click", ".set-wallpaper", function () {
        let type = $(this).val();
        let bg_img = getBgImg();
        bg_img["type"] = type;
        iziToast.show({
            icon: "fa-solid fa-image",
            timeout: 2500,
            message: '壁纸设置成功，刷新后生效',
        });
        setBgImg(bg_img);
    });
});