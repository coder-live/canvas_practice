class Game {
  constructor() {
    //公有属性
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.w = document.documentElement.clientWidth > 400 ? 400 : document.documentElement.clientWidth;
    this.h = document.documentElement.clientHeight > 750 ? 750 : document.documentElement.clientHeight;
    this.time = null;
    //场景编号默认场景0
    this.scenceIndex = 0;
    // 记录帧数
    this.frame = 0;
    //赋值
    this.canvas.width = this.w;
    this.canvas.height = this.h;
    
    //需要判断图片全部加载完成
    this.imageLoad();
  }
  //私有属性
  clear() {
    //清楚canvas
    this.ctx.clearRect(0,0,this.w,this.h);
  }
  start() {
    //执行管理
    this.Scence = new ScenceControl();
    // 将背景保存在game属性中
    this.bg = new Background();
    //进入场景(因为每次都是通过start开始动画);
    this.Scence.enter(this.scenceIndex);
    this.time = setInterval(() => {
      //计算帧数
      //首先是逐帧播放, 清楚前面留下的景
      this.frame ++;
      // console.log(this.frame)
      this.clear();
      this.Scence.updateAndRender();
      //定时器
      // this.frame > 1000 ? clearTimeout(this.time) : null;
    },1000/60);
  }
  imageLoad() {
    // console.log(this)
    this.images = {
      'bg': 'images/bg_day.png',
      'land': 'images/land.png',
      'button': 'images/button_play.png',
      //开始标题
      'title': 'images/title.png',
      'bird_0': 'images/bird0_0.png',
      //鸟扇动翅膀
      'bird_1': 'images/bird0_1.png',
      'bird_2': 'images/bird0_2.png',
      'blingBird': 'images/tutorial.png',
      'pipe_up' : 'images/pipe_up.png',
      'pipe_down' : 'images/pipe_down.png',
      //鸟爆炸
      'boom_0' : 'images/1.png',
      'boom_1' : 'images/2.png',
      'boom_2' : 'images/3.png',
      'boom_3' : 'images/4.png',
      'boom_4' : 'images/5.png',
      'boom_5' : 'images/6.png',
      'boom_6' : 'images/7.png',
      'boom_7' : 'images/8.png',
      'boom_8' : 'images/9.png',
      //结束阶段
      'game_over' : 'images/text_game_over.png',
      'score_panel' : 'images/score_panel.png'
    };

    let index = 0;
    let total = Object.keys(this.images).length;
    for (const key in this.images) {
      let img = new Image();
      img.src = this.images[key];
      //将原来的内存地址图片转为 真实标签
      img.onload = () => {
        index ++
        this.images[key] = img;
        //当最后一张图片加载完成->开始游戏
        index === total ? this.start() : null;
      }
    }
  }
}

