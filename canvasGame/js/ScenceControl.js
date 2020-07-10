class ScenceControl {
  constructor() {
    //场景是-> 应用于 多个页面在同一张画布渲染所进行的操作,
    this.bindEvent();
  }
  //进入场景(动词)
  // ->定义属性
  enter(index) {
    switch (index) {
      case 0://第一场景 (标题, 小鸟, 开始按键, 背景)
        // console.log(this)
        game.scenceIndex = 0;
        game.score = 0;
        // game = new Game();//初始所有数据
        this.titleW = game.images['title'].width;
        this.titleH = game.images['title'].height;
        this.titleY = 0;
        this.buttonW = game.images['button'].width;
        this.buttonH = game.images['button'].height;
        this.birdX =  game.w/2-game.images['bird_0'].width/2;
        this.birdY = 200;
        this.birdSpeed = 3;
        //相对于浏览器的坐标(x坐标不同)--->点击事件的确保
        this.buttonX = (document.documentElement.clientWidth - this.buttonW) / 2;
        this.buttonY = game.h;
        break;
        case 1://第二场景 (小鸟, 坏小鸟(透明闪))
          //场景序号改变
          game.scenceIndex = 1;
          // console.log(this)
          this.blingBirdX = (game.w - game.images['blingBird'].width) / 2;
          this.blingBirdY = 250;
          //透明度值及变化
          this.alpha = 1;
          this.alphaSpeed = 0.05;
        break;
        case 2://第三场景 -->开始游戏(鸟, 管子, 分数)
          //场景序号改变
          game.scenceIndex = 2;
          game.bird = new Bird();
          game.bg = new Background();
          //将管道放在数组中保存
          game.pipeArr = [];
          //-----------------------------------------------------
          // 分数控制属性-------> 单独分封装在函数里
          //  this.num = game.score.toString().length;
          // this.numW = game.images['num_0'].width;
          // this.scoreNums = 1;
          // this.scoreX = (game.w - this.numW) / 2;
          // this.scoreY = 150;
          //----------------------------------------------------------
        break;
        case 3://第三场景 -->开始游戏(鸟, 管子, 分数)
        // --------------------------------------------
                //场景跳转下一场景 不要重新绘制图形 
                // game.bird = new Bird();
                // game.bg = new Background();
        // ---------------------------------------------------
          //场景序号改变
          game.scenceIndex = 3;
          //是否达到爆炸标准
          this.index = 0;//记录爆炸图片
          this.boom = false;
        break;
        case 4://第三场景 -->开始游戏(鸟, 管子, 分数)
          //场景序号改变
          game.scenceIndex = 4;
          // console.log(game)
          // game.bird = new Bird();
          // game.bg = new Background();
          //游戏届时将标题即奖章
          // console.log(game.w,game.images['game_over'].width)
          this.gameOverX = (game.w-game.images['game_over'].width)/2;
          this.gameOverY = 0;
          this.tutX = (game.w-game.images['score_panel'].width)/2;
          this.tutY = game.h;
          //奖牌属性  -> 将属性计算好
          this.panelRender();

        break;
    }
  }
  //在场景中实际发生的事
  // -> 更新 渲染
  updateAndRender() {
    let index = game.scenceIndex;
    switch (index) {
      //首个场景
      case 0://--------开始界面
        // console.log(this.titleY,this.buttonY)
        this.titleY <= 150 ? this.titleY+=7 : null;
        this.buttonY >= 400 ? this.buttonY-=7 : null;
        //渲染背景
        this.bgRender();
        //小鸟 及相应动画;
        if(this.birdY > 350 || this.birdY < 200) this.birdSpeed *= -1;
        this.birdY += this.birdSpeed;

        game.ctx.drawImage(game.images['bird_0'], this.birdX, this.birdY);
        //标题与开始按钮
        game.ctx.drawImage(game.images['title'], game.w/2-this.titleW/2, this.titleY);
        //画布上的坐标--> 画布上位置(相对于画布)
        game.ctx.drawImage(game.images['button'], game.w/2-this.buttonW/2, this.buttonY);
        break;
      case 1://-------------介绍部分
        //渲染背景
        this.bgRender();
        if(this.alpha < 0 || this.alpha > 1) this.alphaSpeed *= -1;
        this.alpha -= this.alphaSpeed;
        //只修改当前内容透明度
        game.ctx.save();
        game.ctx.globalAlpha=this.alpha;
        game.ctx.drawImage(game.images['blingBird'], this.blingBirdX, this.blingBirdY);
        game.ctx.restore();
        game.ctx.drawImage(game.images['bird_0'], this.birdX, 150);
        break;
      case 2://-------------游戏开始界面
        //渲染背景
        game.bg.update();
        game.bg.render();
        game.bird.update();
        game.bird.render();
        //渲染管道
        game.frame%200 == 0 ? game.pipe = new Pipe() : null;
        game.pipeArr.forEach(item => {
          item.update();
          item.render();
        });
        this.scoreRender();
        break;
      case 3://------------ 小鸟碰撞, 爆炸界面
        //渲染背景
        game.bg.render();
        //渲染管道
        game.pipeArr.forEach(item => {
          item.render();
        });
        //小鸟运动(掉落以及爆炸)
        if(this.boom) {//爆炸
          //重新渲染
          game.ctx.drawImage(game.images['boom_' + this.index],game.bird.birdX,game.h-game.bg.landH,100,100);
          this.index++;
          // console.log(game);
          this.index === 9 ? this.enter(4) : null;
        }else {//坠落
          let toLand = game.h - game.bg.landH - game.bird.height/2;
          game.bird.speed += 1;
          game.bird.birdY += game.bird.speed;
          // //当小鸟落地, 即渲染爆炸场景
          game.bird.birdY >= toLand + 12 ? this.boom = true : null ;
          game.bird.render();
        }
        break;
      case 4://------------ game over 界面
        //渲染背景
        // console.log('defealt')
        game.bg.render();
        // //渲染管道
        // game.pipeArr.forEach(item => {
        //   item.render();
        // });
        this.gameOverY <= 150 ? this.gameOverY+=7 : null;
        this.tutY >= 300 ? this.tutY-=12 : null;
        // this.gameOverY >= 150 && this.tutY <= 300 ? clearTimeout(game.time) : null;
        game.ctx.drawImage(game.images['game_over'],this.gameOverX,this.gameOverY);
        game.ctx.drawImage(game.images['score_panel'],this.tutX,this.tutY);
        
        game.ctx.font = "15px sans-serif";
        game.ctx.fillText('任意位置重新开始',game.w/2-60,650);
        
        //奖牌及 分数渲染
        // return
        // console.log(this.panel)
        game.ctx.drawImage(game.images[this.panel],this.tutX+33,this.tutY+43);
        //书写 分数以及 最高分数
        game.ctx.save();
        game.ctx.fillStyle = '#000';
        game.ctx.font = '20px normal';
        game.ctx.fillText(game.score,this.tutX+180,this.tutY+55);
        game.ctx.fillText(this.best,this.tutX+180,this.tutY+100);
        game.ctx.restore();
        break;
    }
  }
  //不同场景的事件
  bindEvent() {
    game.canvas.onclick = (e) => {
      switch (game.scenceIndex) {
        case 0://点击进入按钮
          if(e.clientX > this.buttonX 
          && e.clientY > this.buttonY
          && e.clientX < this.buttonX + this.buttonW 
          && e.clientY < this.buttonY + this.buttonH) {
            this.enter(game.scenceIndex+1);
          }
          break;
        case 1:
          this.enter(game.scenceIndex+1);
          break;
        case 2:
          // console.log(game.bird)
          game.bird.run();
          break;
        case 4:
          // console.log('点击')
          this.enter(0);
          break;
      }
    }
  }
  bgRender() {
    //背景
    game.ctx.drawImage(game.images['bg'], 0, game.h - game.images['bg'].height);
    game.ctx.drawImage(game.images['bg'], game.images['bg'].width, game.h - game.images['bg'].height);
    //陆地
    game.ctx.drawImage(game.images['land'], 0, game.h - game.images['land'].height);
    game.ctx.drawImage(game.images['land'], game.images['land'].width, game.h - game.images['land'].height);
    //空白处补齐
    game.ctx.fillStyle = '#4EC0CA';
    game.ctx.fillRect(0,0,game.w,game.h - game.images['bg'].height);
    
  }
  scoreRender() {
    let str = game.score.toString();
    let numW = game.images['num_0'].width;
    for (let i = 0,len=str.length; i < len; i++) {
      let x = (game.w - str.length*numW) / 2 + numW*i;
      game.ctx.drawImage(game.images['num_' + str[i]],x,100);
    }
  }
  panelRender() {
    //从浏览器中获取 分数排名数组
    let arr = JSON.parse(window.localStorage.getItem('rank')) || [];
    // console.log(arr)
    if(arr[0] === undefined ? arr.push(game.score) : game.score >= arr[0]) {//第一名
      //--> 首先判断数组第一位存不存在, 存在则比较分数, 大于它就代替, 不满足则下一判断
      arr[0] = game.score;
      // console.log(111)
      //奖牌设置
      this.panel = 'gold';
    }else if(arr[1] === undefined ? arr.push(game.score) : game.score >= arr[1]){//第二名
      // --> 同理: 判断第二位存不存在,不存在,这说明 不比先前数大, 就push 在其后
      arr[1] = game.score;
      this.panel = 'silver';
    }else if(arr[2] === undefined ? arr.push(game.score) : game.score >= arr[2]){//第三名
      arr[2] = game.score;
      this.panel = 'bronze';
    }
    this.best = arr[0];
    let str = JSON.stringify(arr);
    window.localStorage.setItem('rank',str);
  }
}