///动态的背景
class Background {
  constructor() {
    this.width = game.images['bg'].width;
    this.height = game.images['bg'].height;
    this.landW = game.images['land'].width;
    this.landH = game.images['land'].height;
    this.x = 0;
    //速度, 每一帧移动1px
    this.speed = 1;
  }
  //更新
  update() {
    // console.log(this.x)
    this.x -= this.speed;
    this.x = this.x <= -this.width ? 0 : this.x;
  }
  // 渲染
  render() {
    //无缝连接至少3个  ->主要背景
    game.ctx.drawImage(game.images['bg'], this.x, game.h - this.height);
    game.ctx.drawImage(game.images['bg'], this.width+this.x, game.h - this.height);
    game.ctx.drawImage(game.images['bg'], this.width*2+this.x, game.h - this.height);
    //陆地
    game.ctx.drawImage(game.images['land'], this.x, game.h - this.landH);
    game.ctx.drawImage(game.images['land'], this.landW+this.x, game.h - this.landH);
    game.ctx.drawImage(game.images['land'], this.landW*2+this.x, game.h - this.landH);
    
    //空白处补齐
    game.ctx.fillStyle = '#4EC0CA';
    game.ctx.fillRect(0,0,game.w,game.h - game.images['bg'].height);
  }
}