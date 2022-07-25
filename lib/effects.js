let Effects = {
    colSlide : function(p,power=1,slide=1,d=0,col1=p.color(255*power,0,0),col2=p.color(0,0,255*power)){
        let img = p.get()

        p.blendMode(p.ADD)
        p.image(img,0,0)

        p.tint(col1)
        p.image(img,slide*Math.sin(d),slide*Math.cos(d))

        p.tint(col2)
        p.image(img,-slide*Math.sin(d),-slide*Math.cos(d))

        return p.get()
    } ,
    randomStretch : function(p){
        let img = p.get()

        p.blendMode(p.ADD)
        p.tint(0xFF)
        for(let i=0;i<100;i++){
            let sx = p.random(img.width*0.5);
            let sy = p.random(img.height*0.05);
            let x = p.random(img.width - sx*0.5);
            let y = p.random(img.height - sy*0.5);
            let ix = x + p.random(-1, 1)*10;
            let iy = y ;
        
            p.image(img, ix, iy, sx, sy, x, y, sx, sy);
          }
        return p.get();
    }
}