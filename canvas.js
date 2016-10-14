// getContext - try different string values
//

function drawLine(a){
        var canvas = document.getElementById("can1");
        var ctx = canvas.getContext("2d");      // works without this line in chrome
        
        // Nasty Path - incorrect string value
        //var ctx = canvas.getContext("");
        // Results: ctx.shadowBlur fails
    
        if (a == 1){
           ctx.clearRect(0,0,300,200); 
        }
        else {
            // add style
            ctx.shadowBlur = 20;
            
            // Nasty Path: if int, null, bool, undefined, or string that is not a color = no shadow
            ctx.shadowColor = "red"; 
            ctx.strokeStyle = "blue";
            ctx.shadowOffsetX = -100;
            ctx.shadowOffsetY = 100;
            
            ctx.moveTo(0,0);       // jumps to
            ctx.lineTo(300,200);   // draw to
        
            // create multiple lines
            // endpoints can be off the canvas
            ctx.moveTo(300,0);
            ctx.lineTo(0,200);
        
            // NASTY PATH - LINE TO NULL
            ctx.moveTo(150,100);
            ctx.lineTo(null,null);
            // RESULTS - NO LINE IS DRAWN
            
            // NASTY PATH - LINE TO NEGATIVE COORDAINATES
            ctx.moveTo(150,100);  // if not included, line starts at 0,0
            ctx.lineTo(150,-300);
            // RESULTS - IT WORKS
        
            ctx.closePath();
            // draw lines listed above
            ctx.stroke();
            
            
            // save canvas
            var dataURL = canvas.toDataURL();
            document.getElementById("savedImg").src = dataURL;
        }
    }
    function drawRct(){
        var c = document.getElementById("can7");
        var ctx = c.getContext("2d");
        
        ctx.strokeRect(20,20,150,100);
        
        ctx.strokeStyle = "blue";
        ctx.scale(2,2);
        
        // NASTY PATH - SCALE TO -200%
        //ctx.scale(-2,-2);
        // RESULTS - BOX IS INVISBLE OR NON-EXISTANT
        
        ctx.strokeRect(20,20,150,100);  
    }
    function drawCircle(){
        var c = document.getElementById("can2");
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(150,100,40,0,2*Math.PI);
        // x, y, radius, start angle, end angle, [bool] clockwise
        ctx.stroke();
    }
    function drawText(){
        var message = "Hello World";
        // NASTY PATH - MESSAGE = NUMBER
        // var message = 14;
        // RESULTS - 14 IS WRITTEN
        
        //NASTY PATH - MESSAGE = BOOL
        // var message = false;
        // RESULTS - FALSE IS WRITTEN
        
        //NASTY PATH - MESSAGE = NULL
        //var message = null;
        // RESULTS - NULL IS WRITTEN
        
        // NASTY PATH - MESSAGE IS UNDEFINED
        //var message = undefined;
        // RESULTS - UNDEFINED IS DISPLAYED
        
        // Message cannot be a kewword such as function or if
        
        var c = document.getElementById("can3");
        var ctx = c.getContext("2d");
        ctx.font = "bold 30px timesNewRomans";    // default is sans-serif 10px
        ctx.fillText(message, 100, 50);     // 3 arguements required
        // OR
        // ctx.strokeText("Hello World", 10, 50);
    }
    function drawGradient(){
        var c = document.getElementById("can4");
        var ctx = c.getContext("2d");
        
        // create gradient
        var grd = ctx.createLinearGradient(50,0,250,0);
        // x0, y0, x1, y1
        grd.addColorStop(0, "blue");
        grd.addColorStop(1, "black");
        
        // fill gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0,0,300,200);
        // x, y, w, h
    }   
    function drawCGradient(){
        var c = document.getElementById("can5");
        var ctx = c.getContext("2d");
        
        // create gradient
        var grd = ctx.createRadialGradient(75,50,5,90,60,100);
        // intern circle x, intern circle y, intern radius,extern x,extern circle y, extern radius
        
        // NASTY PATH - color  stop is a number
        //grd.addColorStop(0, 5);
        // RESULT - SYNTAX ERROR
        
        grd.addColorStop(0, "blue");
        grd.addColorStop(1, "black");
        
        // fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0,0,300,200);
    }
    function drawImg(){
        var c = document.getElementById("can6");
        var ctx = c.getContext("2d");
        var img = document.getElementById("img1");
        
        // NASTY PATH - img source is a video file
        // var img = document.getElementById("vid1");
        // RESULTS - onclick the canvas becomes all black
        
        ctx.drawImage(img,0,0);
    }