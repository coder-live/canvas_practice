绘制文本

** fillText(text, x, y [, maxWidth]) 
    ** strokeText(text, x, y [, maxWidth])
    ** textAlign  文本对齐
    ** textBaseline  基线对齐
    ** direction   文本方向

ctx.font = "100px sans-serif";(默认)
ctx.fillText("天若有情", 10, 100);   (text, x, y, maxwidth(可选))
ctx.strokeText("天若有情", 10, 200); (text, x, y, maxwidth(可选))