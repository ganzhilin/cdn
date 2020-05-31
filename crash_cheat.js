$(window).load(function () {
//整合页面欺骗特效 window.onload有冲突
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/ganzhilin/ganzhilin.github.io@master/images/avatar.png");
            $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/ganzhilin/ganzhilin.github.io@master/images/avatar.png");
            document.title = '(つェ⊂) 我藏好了哦~ ';
            clearTimeout(titleTime);
        } else {
            $('[rel="icon"]').attr('href', "https://cdn.jsdelivr.net/gh/ganzhilin/ganzhilin.github.io@master/images/avatar.png");
            $('[rel="shortcut icon"]').attr('href', "https://cdn.jsdelivr.net/gh/ganzhilin/ganzhilin.github.io@master/images/avatar.png");
            document.title = 'o(^▽^)o 被你发现啦~ ';
            titleTime = setTimeout(function () {
                document.title = OriginTitile;
            }, 2000);
        }
    });
});