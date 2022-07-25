var sketch = function(p){
    var frame;
    p.preload = function(){
    };
    p.setup = function(){
        p.soundFormats('mp3', 'ogg','wav');
        p.createCanvas(1920 ,1080)
        p.background(0x33)
    };
    p.draw = function(){
        frame++;
        
    }
}

new p5(sketch,"container");
