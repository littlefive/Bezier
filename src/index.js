import bezier from './bezier';

let $event = $(".moving");

$(function() {
    const p1 = [1, 2];
    // const p2 = [1000, 600];
    const p2 = [300, 654]
    const c1 = [1000, 0];
    const c2 = [0, 600];

    // // 一阶贝塞尔
    const dotNumber = 55;
    let shtml = '';
    // bezier.getBezierPoints(dotNumber, p1, p2).forEach(d => {
    //     d = d.map(e => parseInt(e, 10));
    //     shtml += `<span style="left: ${d[0]}px; top: ${d[1]}px;" class="dot"></span>`;
    // });
    // $('#oneBezier').html(shtml);

    // shtml = '';
    // bezier.getBezierPoints(dotNumber, p1, c1, p2).forEach(d => {
    //     d = d.map(e => parseInt(e, 10));
    //     shtml += `<span style="left: ${d[0]}px; top: ${d[1]}px;" class="dot"></span>`;
    // });
    // $('#twoBezier').html(shtml);

    shtml = '';
    let s = bezier.getBezierPoints(dotNumber, p1, c1, c2, p2).forEach(d => {
        d = d.map(e => parseInt(e, 10));
        shtml += `<span style="left: ${d[0]}px; top: ${d[1]}px;" class="dot"></span>`;
    });
    console.log(bezier.getBezierPoints(dotNumber, p1, c1, c2, p2))
    // $('#threeBezier').html(shtml);



    /** =======================================================  */

        let x = $event.offset().top;
        let y = $event.offset().left;
        let arr = bezier.getBezierPoints(dotNumber, p1, c1, c2, p2);
        console.log(arr)
        let i = 0;
        let interval = setInterval(()=>{
            if(i >= (arr.length)) {
                clearInterval(interval)
            }
            gotoTaget((arr[i] && (arr[i][0])), (arr[i] && (arr[i][1])));
            i++
            
        }, 200)
});
function gotoTaget(x, y) {
    // if(!x || !y) return
    let time = 0.2
    console.log(x, y)
    $event.css({
        transform: "translate(" + x + 'px,' + y +"px)",
        transition: 'all linear '+ time +'s' 
    })
}