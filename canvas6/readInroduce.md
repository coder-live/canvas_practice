贝塞尔曲线

    **二次贝塞尔曲线
      ***----> 绘制原理  ----> 初始点开始,  控制点1  控制点2
        依次连接,  两条线的形成 --> 在同一时间完成从 *起始点* 到 *第二个点* 的平均移速移动
        而曲线的形成则在以上两点连接形成的 *线上* 也在同一时间从第一点到第二点完成这段变速路程

    ctx.beginPath();
    //ctx.strokeStyle = 'blue';
    //初始点
    ctx.moveTo(50, 150);
    第一控制点
    let cpx1 = 150,
        cpy1 = 50;
    //最后控制点
    let x = 200, y = 150;

//两次 quadraticCurveTo(cpx1,cpy1,x,y) / 三次 bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x,y)

    ctx.quadraticCurveTo(cpx1,cpy1,x,y);//bezierCurveTo(cpx1,cpy1,cpx2,cpy2,x,y)
    ctx.stroke();