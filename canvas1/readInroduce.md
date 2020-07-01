canvas的初步学习
属性: 
  fillRect  fillStyle   
  beginPath(moveTo, lineTo) closePath
  lineWidth  strokeStyle   stroke
    ctx.fillRect(绘制矩形) ----.fillStyle = 'color'(背景色)
    ctx.beginPath()--->开始画线
      .moveTo(x,y) ---起始坐标
      .lineTo(x,y) ---第二坐标
      .lineTo(x,y) ....
    ctx.closePath(); ---闭合画线 -->与第一起始坐标形成连接;

    ==>做最后的修饰
    ctx.lineWidth = 2.0//可以是矩形边框粗细, 也可以是画线的线条粗细
    .strokeStyle = '#000' =>线条的颜色修饰, 或矩形边框颜色

    //最后一步 -->完成绘制 (stroke-黑实线)
    ctx.stroke();
  