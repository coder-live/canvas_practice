圆弧绘制补充 ----arcTo(x1,y1,x2,y2,r)

  ctx.beginPath();
  ctx.moveTo(x0,y0);
  ctx.arcTo(x1,y1,x2,y2,r);
  ctx.stroke();

------>  以上三个坐标依顺序组成的角度做平均分割线
                判断半径与 分割线垂直两边的距离