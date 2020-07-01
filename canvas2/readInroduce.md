区别   ctx.rect(x,y,w,h) + ctx.fill()  同   ctx.fillRect(x,y,w,h);

  起初ctx.fillRect 确实便捷方便, 但是实践表明不能对其边框的颜色及粗细进行设置

  而ctx.rect + .fill() 可以进行ctx.fillStyle = xx 及ctx.lineWidth = x 的设置

  q且 在每次绘制完 图后都要进行 ctx.stroke(); 再之后可进行接下来的绘制

所以 ===>
  ctx.rect(x,y,w,h) + ctx.fill() === 
  
  ctx.fillRect(10,10,50,80) + ctx.strokeRect(10,10,50,80);