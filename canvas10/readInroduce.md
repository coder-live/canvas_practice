合成
    说明------> 在两个绘制图形重叠部分  ---> 进行合成操作(默认后者覆盖前者图形)

    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 200, 200);

    *****ctx.globalCompositeOperation = 'source-over';*****  ->默认

    ctx.fillStyle = "red";
    ctx.fillRect(100, 100, 200, 200);
    
        // ctx.globalCompositeOperation = "source-over"; //全局合成操作--默认(后者位于上)
        // ctx.globalCompositeOperation = "source-in"; //--出现重叠部分(默认后者颜色)
        // ctx.globalCompositeOperation = "source-out"; //--剪去前者包括重叠部分
        // ctx.globalCompositeOperation = "source-atop"; //--只展示前者包括重叠部分(默认后者颜色)

        // ctx.globalCompositeOperation = "destination-over"; //全局合成操作--相反(前者位于上)
        // ctx.globalCompositeOperation = "destination-in"; //--出现重叠部分(默认前者颜色)
        // ctx.globalCompositeOperation = "destination-out"; //--剪去后者包括重叠部分
        // ctx.globalCompositeOperation = "destination-atop"; //--只展示后者包括重叠部分(默认前者颜色)

        // ctx.globalCompositeOperation = "lighter"; //--重叠部分做颜色共处
        // ctx.globalCompositeOperation = "lighten"; //--重叠部分做颜色(#ff00ff) -> 六进制相加 blue: #0000ff + red: #ff0000
        // ctx.globalCompositeOperation = "darken"; //--重叠部分做颜色黑色
        // ctx.globalCompositeOperation = "xor"; //--重叠部分做颜色透明
        ctx.globalCompositeOperation = "copy"; //--仅留下新者包括重叠(默认后者颜色)

        //----------合成样式只存在一个, 后者会覆盖前者属性