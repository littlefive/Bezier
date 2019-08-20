$(function () {
    $(document).on('click', '.start', function () {
        moving($('.ball'), $('.taget3'));
        $('.rotate').addClass('active');
    })
    $(document).on('click', '.start2', function () {
        moving($('.ball'), $('.taget2'));
        $('.rotate').addClass('active');
    })
    $(document).on('click', '.clear', function () {
        $('.ball').removeClass('run_top_right');
        ball.setAttribute('style', '')
        $('.rotate').removeClass('active');
    })
    var o = document.getElementById("ball");
    // 动画结束时事件
    o.addEventListener("webkitAnimationEnd", function () {
        if ($('.ball').offset().top == $('.taget3').offset().top) {
            $('.rotate').removeClass('active');
        }
    })
    
    function moving($from, $to) {
        // 起点
        let fromX = $from.offset().left;
        let fromY = $from.offset().top;
        // 终点坐标
        let toX = $to.offset().left;
        let toY = $to.offset().top;
        sport(fromX, fromY, toX, toY);
    }
    const style = document.createElement('style');
    const ball = document.getElementById('ball');

    // 运动
    function sport(fromX, fromY, toX, toY) {
        const runkeyframes =`@keyframes run-left-bottom {
            0% {
                top: ${fromY}px;
                left: ${fromX}px;
            }

            100% {
                top: ${toY}px;
                left: ${toX}px;
            }
        }`
        // 创建style标签
        // 设置style属性
        style.type = 'text/css';
        // 将 keyframes样式写入style内
        style.innerHTML = runkeyframes;
        // 将style样式存放到head标签
        document.getElementsByTagName('head')[0].appendChild(style);
        // 随便给一个animation的名称
        // ball.setAttribute('style','animaition: ball-run1 10s infinite;');
        setTimeout(_=>{
        // 1ms后纠正animation的名称
        ball.setAttribute('style','animation: run-left-bottom 1s cubic-bezier(0, 0, .58, 1);animation-fill-mode: forwards;');
        },0)
    }
})