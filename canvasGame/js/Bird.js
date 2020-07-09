///动态的小鸟
class Bird {
  constructor() {
    this.width =game.images['bird_0'].width;
    this.height =game.images['bird_0'].height;
    this.birdX = (game.w - this.width)/2;
    this.birdY = game.h * (1-0.618);
    //下降速度, 每一帧移动1px
    this.speed = 0;
    // 加速度转为路程相差值
    this.a = .2;
    //下降旋转角度
    this.rotate = 0;
    //是否下降
    this.down = true;
    //飞的图片
    this.fly = 0;
  }
  //更新
  update() {
    if(this.down) {
      this.speed += this.a;
      this.birdY += this.speed;
      this.rotate +=0.02;
    }else {//--->上升
      //加速度大于 下降
      this.speed -= .5;
      //上升缓冲(结束后下降)
      this.speed < 0 ? this.down = true : null;
      this.birdY -= this.speed;
      this.birdY <= 0 ? this.birdY == 0 : null;
      this.fly = this.fly < 2 ? this.fly+1 : 0;
    }
    // //爆炸
    //(撞地面)
    let toLand = game.h - game.bg.landH - this.height/2;
    // this.birdY >= toLand + 12 ? this.birdY = toLand + 12 : null ;
    // this.birdY <=12 ? this.birdY = 12 : null;
    //碰撞检测
    if(this.birdY >= toLand + 12 || this.birdY <=12) {
      game.Scence.enter(3);
      // console.log(game.Scence)
    }
  }
  run() {
    this.speed = 5;
    this.rotate =-.8;
    this.down = false;
  }
  // 渲染
  render() {
    game.ctx.save();
    game.ctx.translate(this.birdX, this.birdY);
    game.ctx.rotate(this.rotate);
    game.ctx.drawImage(game.images['bird_' + this.fly], -this.width/2, -this.height/2);
    game.ctx.restore();
  }
}