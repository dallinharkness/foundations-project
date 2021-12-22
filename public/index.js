var myGamePiece;
var myObstacles = []
var myScore


function startGame() { 
    myGamePiece = new component(40, 40, "/ufo-gif.gif", 200, 200,"image")
    myScore = new component('30px', 'Gugi', 'white', 800, 28, 'text')
    myGameArea.start()
}
const myGameArea = {
    canvas : document.createElement('canvas'),
    start : function() {
        this.canvas.width = 1000
        this.canvas.height = 400
        this.context = this.canvas.getContext('2d')
        document.body.insertBefore(this.canvas, document.body.childNodes[5])
        this.frameNo = 0
        this.interval = setInterval(updateGameArea, 20)
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    stop : function() {
        clearInterval(this.interval)
    }
}

function component(width, height, color, x, y, type) {
    this.type = type
    if(type == "image") {
        this.image = new Image(40, 40)
        this.image.src = '/ufo-gif.gif'
        
    }
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0
    this.speedY = 0
    this.gravity = .08
    this.gravitySpeed = 0

    this.update = function(){
    ctx = myGameArea.context;
    if(type == 'image'){
        ctx.drawImage(this.image,
            this.x,
            this.y,
            this.width, this.height)
    }else{
        ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    if(this.type == 'text') {
        ctx.font = this.width + ' ' + this.height
        ctx.fillStyle = color
        ctx.fillText(this.text, this.x, this.y)
    }else{
        ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
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

    this.hitBottom = function() {
        var rockbottom = myGameArea.canvas.height - this.height
        if (this.y > rockbottom){
            this.y = rockbottom
        }
    }

    this.hitTop = function() {
        var rockTop = myGameArea.canvas.height + this.height
        if(this.y > rockTop){
            this.y = rockTop
        }
    }
}    
    
function updateGameArea() { 
    
    var x, height, gap, minHeight, maxHeight, minGap, maxGap
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
        minHeight = 20
        maxHeight = 200
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight)
        minGap = 50
        maxGap = 200
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap)
        myObstacles.push(new component(35, height, 'blue', x, 0))
        myObstacles.push(new component(35, x - height - gap, 'blue', x, height + gap))
    }
    for(i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].x += -4.5
        // myObstacles[i].newPos()
        myObstacles[i].update()
    }
    myScore.text='SCORE: ' + myGameArea.frameNo
    myScore.update()
    myGamePiece.update()
    
    
    myGamePiece.speedX = 0
    myGamePiece.speedY = 0
    myGamePiece.newPos()

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























