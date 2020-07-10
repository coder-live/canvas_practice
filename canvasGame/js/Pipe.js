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
    //允许当前这轮分数累加
    this.permitAdd = true;
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
    //---> 此时birdX, birdY 为小鸟中心位置
    // console.log(game.bird.birdX >= this.x && game.bird.birdY <= this.upHeight && game.bird.birdX <= this.x + this.width)
    if(game.bird.birdX >= this.x && game.bird.birdY <= this.upHeight+game.bird.height/2 && game.bird.birdX <= this.x + this.width
    || game.bird.birdX >= this.x && game.bird.birdY >= this.upHeight + this.space-game.bird.height/2 && game.bird.birdX <= this.x + this.width) {
      // game.SM.enter(3);
      game.Scence.enter(3);
    }
    //分数与累加--> 在此管道渲染时值允许分数加一, 在下次new Pipe()后才允许开启下一次累加
    //-->且要超过管道长度
    if(this.permitAdd && game.bird.birdX > this.x + this.width) {
      game.score ++;
      this.permitAdd = false;
    }
  }
  // 渲染
  render() {
    //切图
    game.ctx.drawImage(game.images['pipe_down'],0,this.height-this.upHeight,this.width,this.upHeight, this.x,0,this.width,this.upHeight);
    game.ctx.drawImage(game.images['pipe_up'],0,0,this.width,this.downHeight, this.x,this.upHeight+this.space,this.width,this.downHeight);
  }
}