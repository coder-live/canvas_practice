圆弧绘制 arc 
  -->  补充 状态 save(); restore();释放
        补充  变化 transform(...)

  ctx.arc(x,y,r,初始旋转角度(默认0),旋转角度,false(顺时针)/true)-->角度只识别弧度制
    .rotate(旋转角度)  
      -> 以左上角为圆心顺时针旋转(正数)
        因rotate()旋转原点只由左上角决定
        遂只能通过 translate(x,y) 改变原点坐标
        再通过 fillRect(x,y,w,h)/.. 改变绘制图形的中心(-w/2,-h/2)
    .translate(x,y)   ->  圆心角度的重新设置
    .scale(x,y)      ->  在x/y轴上的缩放

  ==> 状态 (ctx.save();ctx.restore();)
  ------------------------------
    strokeStyle, fillStyle, globalAlpha, lineWidth, lineCap, lineJoin, miterLimit, shadowOffsetX, shadowOffsetY, shadowBlur, shadowColor, globalCompositeOperation 的值
  ----------------------------------
  // 当前的状态就被推送到栈中保存。一个绘画状态包括
  // ctx.save();
  
  // 每一次调用 restore 方法，上一个保存的状态就从栈中弹出，所有设定都恢复(类似数组的 pop()。
  // ctx.restore();

  //ctx.transform(水平缩放, 水平偏移量, 垂直偏移量, 垂直缩放, 水平移动, 垂直移动) 
    -> //先进行重置, 在进行transform操作  --> 主要第二, 三的变量操作x/y的偏移量
    ctx.setTransform(...) 