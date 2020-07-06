动画
  setInterval()
  setTimeout()
  requestAnimationFrame()

  ---> 结合**旋转rotate, translate(改变旋转原点), save, restore(重置旋转原点)**完成简单星系的轨道运作
  --> 图片加载完成后开始 执行绘制函数draws中的 window.requestAnimationFrame(draws);
  -> 实现自动效果

  -->补充
      关于绘制图片的坐标, 给与负自身长度, 宽度的坐标
      ctx.drawImage(moon,-6,-6);  //图片长宽为12
