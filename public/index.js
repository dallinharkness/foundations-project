var myGamePiece;
var myObstacles = []
// var canvasHtml = document.querySelector('#append')

function startGame() { 
    myGamePiece = new component(30, 30, 'red', 200, 200,)
    myGameArea.start()
}
const myGameArea = {
    canvas : document.createElement('canvas'),
    start : function() {
        this.canvas.width = 1000
        this.canvas.height = 450
        this.context = this.canvas.getContext('2d')
        document.body.insertBefore(this.canvas, document.body.childNodes[0])
        this.frameNo = 0
        this.interval = setInterval(updateGameArea, 20)
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    stop : function() {
        clearInterval(this.interval)
    }
    
    // asdf.appendChild(canvas)
}

// document.addEventListener('', () => {
//     var newCanvas = document.createElement('canvas')
//     var container = canvasHtml
//     container.appendChild(newCanvas)
// })

function component(width, height, color, x, y, type) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0
    this.speedY = 0
    this.gravity = .04
    this.gravitySpeed = 0
    this.update = function(){
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    } 
    this.newPos = function() {
        this.gravitySpeed += this.gravity
        this.x += this.speedX
        this.y += this.speedY + this.gravitySpeed
        this.hitBottom()
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x
        var myright = this.x + (this.width)
        var mytop = this.y
        var mybottom = this.y + (this.height)
        var otherleft = otherobj.x
        var otherright = otherobj.x + (otherobj.width)
        var othertop = otherobj.y
        var otherbottom = otherobj.y + (otherobj.height)
        var crash = true
        if((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false
        }
        return crash
    }   
}    
    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height
        if (this.y > rockbottom){
            this.y = rockbottom
        }
    }




function updateGameArea() { 
    
    var x,y
    for(i = 0; i < myObstacles.length; i += 1) {
        if(myGamePiece.crashWith(myObstacles[i])){
            myGameArea.stop()
            
            
            return
        }
        
    }
    
    myGameArea.clear()
    
    myGameArea.frameNo += 1
    if(myGameArea.frameNo == 1 || everyinterval(90)){
        x = myGameArea.canvas.width
        y = myGameArea.canvas.height - 200
        myObstacles.push(new component(35, 200, 'blue', x, y))
        
    }
    for(i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -3
        myObstacles[i].update()
    }
    // myGamePiece.newPos()
    myGamePiece.update()
    myGamePiece.speedX = 0
    myGamePiece.speedY = 0
    myGamePiece.newPos()
    // myGamePiece.update()

}

function moveup() {
    myGamePiece.gravitySpeed -= 2
}

function everyinterval(n){
    if((myGameArea.frameNo / n) % 1 == 0) {return true}
    return false
}

function accelerate(n) {
    myGamePiece.gravity = n
}

function stopMove() {
    myGamePiece.speedX = 0
    myGamePiece.speedY = 0
}























// this.type = type
//     if(type =='image') {
//         this.image = new Image()
//         this.image.src = color
//     }
//     this.width = width
//     this.height = height
//     this.x = x
//     this.y = y
//     this.update = function() {
//         ctx = myGameArea.context
//         if(type == 'image') {
//             ctx.drawImage(this.image,
//                 this.x,
//                 this.y,
//                 this.width, this.height)
//         }else {
//             ctx.fillStyle = color
//             ctx.fillRect(this.x, this.y, this.width, this.height)
//         }
//     }

//     this.newPos = function() {
//         this.x += this.speedXthis.y += this.speedY
//     }