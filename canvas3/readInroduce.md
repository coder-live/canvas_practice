clearRect(清除) lineCap(线的两端) lineJoin(线交接处) setLineDash(设置虚线)

x指所写变量  
实际写一定加引号 因为它是个属性, 不是变量 只要是字符串就是加引号 否则会被认为变量

=====> 线条属性补充

********

  ctx.clearRect(x,y,w,h) --> 可以意为所在内容形成一个遮罩层 此区域内填充为透明无色
  ctx.lineJoin = x
    在闭合线条中出现, 指线条连接节点的形状  圆round 或 方bevel 或 尖miter(默认)
  ctx.lineCap = x 
    在为闭合的线条中产生, 指在线条的两端的形状  圆圆round 或 方square 或 方尖butt(默认)

  --> 补充
    在ctx.stroke(); 绘制完线条 后可以对其形成的区域内进行填充颜色
    ctx.fill(); ---->  新的属性设置 可以重新设置 在ctx.beginPath() 后设置
      //在绘制线条后  且形成了闭合区域后就可以设置区域内的填充
      //若未闭合区域则会自动闭合所填充区域
      //且填充区域会  索取边框的一半内容

  ctx.setLineDash([x1,x2]);//['实现长度', '虚线长度']
  ctx.strokeRect(x,y,w,h);// -------> w / (x1+x2) -> 分为几段
  console.log(ctx.getLineDash()); //=> 获取