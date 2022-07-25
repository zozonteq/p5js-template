

var sketch = function(p){
    var frame=0;
    let avgFPS=60;
    const height = 1080/4;
    const width = 1920/4;
    p.preload = function(){
    };

    
    p.setup = function(){
        p.soundFormats('mp3', 'ogg','wav');
        p.createCanvas(width,height)
        p.background(0)
    };


    p.draw = function(){
        p.blendMode(p.BLEND)
        p.background(0)
        p.fill(0xFF)
        for(let i = 0 ;  i < 10 ; i ++){
            p.ellipse(i*width/10+(width/20),height/2,height*0.1)
        }

        p.image(Effects.colSlide(p,0.4,3,frame*0.1+p.random(1)),0,0)
        p.image(Effects.randomStretch(p))
        frame++;
        if(frame%60==0) avgFPS = p.frameRate()
        p.text(Math.round(avgFPS),10,10)
    }
}

new p5(sketch,"container");
