///动态的管子
class Pipe {
  constructor() {
    this.width = game.images['pipe_down'].width;
    this.height = game.images['pipe_down'].height;
    this.upHeight = Math.round(Math.random()*200 + 100);
    this.space = 120;
    this.downHeight = game.h-game.bg.landH-this.upHeight-this.space;
    //速度, 每一帧移动1px
    this.x = game.w;
    this.speed = 1;
    //在每次new实例 -> 保存至game对象中, 分别渲染
      //-> 保证 随着帧数, 渲染不同管道的 移动
    game.pipeArr.push(this);
    // console.log(game.pipeArr);
  }
  //更新(变值)
  update() {
    for (let i = 0; i < game.pipeArr.length; i++) {
      if(game.pipeArr[i].x < -this.width) {
        game.pipeArr.splice(i, 1);
        i --;
      }
    }
    // console.log(this.x)
    this.x -= this.speed;
    // console.log(this.x)

    //碰撞检测
    // console.log(game.bird,this)
    // console.log(game.bird.birdX >= this.x && game.bird.birdY <= this.upHeight && game.bird.birdX <= this.x + this.width)
    if(game.bird.birdX >= this.x && game.bird.birdY <= this.upHeight && game.bird.birdX <= this.x + this.width
    || game.bird.birdX >= this.x && game.bird.birdY >= this.upHeight + this.space && game.bird.birdX <= this.x + this.width) {
      // game.SM.enter(3);
      game.Scence.enter(3);
    }
  }
  // 渲染
  render() {
    //切图
    game.ctx.drawImage(game.images['pipe_down'],0,this.height-this.upHeight,this.width,this.upHeight, this.x,0,this.width,this.upHeight);
    game.ctx.drawImage(game.images['pipe_up'],0,0,this.width,this.downHeight, this.x,this.upHeight+this.space,this.width,this.downHeight);
  }
}