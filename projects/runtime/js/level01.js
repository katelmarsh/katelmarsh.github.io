var level01 = function(window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'helmet',x:1000,y:groundY},
                {type: 'helmet',x:3000,y:groundY},
                {type: 'helmet',x:5000,y:groundY},
                {type: 'player',x:500,y:(groundY-90)},
                {type: 'player',x:2500,y:(groundY-90)},
                {type: 'player',x:4500,y:(groundY-90)},
                {type: 'enemy1',x:1750,y:(groundY-80)},
                {type: 'enemy1',x:2750,y:(groundY-80)},
                {type: 'enemy2',x:5750,y:(groundY-80)},
                {type: 'enemy2',x:3750,y:(groundY-80)},
                {type: 'point',x:250,y:(groundY-150)},
                {type: 'point',x:1250,y:(groundY-150)},
                {type: 'point',x:2250,y:(groundY-150)},
                {type: 'point',x:3250,y:(groundY-150)},
                {type: 'helmet',x:5000,y:groundY},
                {type: 'helmet',x:8000,y:groundY},
                {type: 'helmet',x:7000,y:groundY},
                {type: 'player',x:4500,y:(groundY-90)},
                {type: 'player',x:7500,y:(groundY-90)},
                {type: 'player',x:10500,y:(groundY-90)},
                {type: 'enemy1',x:4750,y:(groundY-80)},
                {type: 'enemy1',x:2750,y:(groundY-80)},
                {type: 'enemy2',x:5750,y:(groundY-80)},
                {type: 'enemy2',x:8750,y:(groundY-80)},
                {type: 'point',x:5250,y:(groundY-150)},
                {type: 'point',x:6250,y:(groundY-150)},
                {type: 'point',x:8250,y:(groundY-150)},
                {type: 'point',x:9250,y:(groundY-150)}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
      
        var createfootball = function(x,y){ 
            var hitZoneSize = 20;
            var damageFromObstacle = -50;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y-10;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/cowboys--helmet.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -40;
            obstacleImage.y = -50;
            myObstacle.onPlayerCollision = function() {
                game.changeIntegrity(-20);
            };
        }
        
        var createfootballPlayer = function(x,y){
            var hitZoneSize = 20;
            var damageFromObstacle = -50;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y-10;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/goalpost.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -60;
            obstacleImage.y = -150;
            myObstacle.onPlayerCollision = function() {
                game.changeIntegrity(-20);
            };
        }
        
        function createEnemy(x,y) {
            var enemy = game.createGameItem('enemy',15)
            var enemyImage = draw.bitmap('img/football.png');
            enemyImage.x = -40;
            enemyImage.y = -50;
            enemy.addChild(enemyImage);
            enemy.x = x;
            enemy.y=y+40;
            enemy.velocityX =-1;
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-50);
            };
            enemy.onProjectileCollision = function() {
                game.increaseScore(100);
                enemy.shrink();
            }
            game.addGameItem(enemy);
        }
        
        function createEnemy2(x,y) {
            var enemy2 = game.createGameItem('enemy2',15)
            var enemyImage = draw.bitmap('img/diving.png');
            enemyImage.x = -25;
            enemyImage.y = -50;
            enemy2.addChild(enemyImage);
            enemy2.x = x;
            enemy2.y=y+50;
            enemy2.velocityX =-1;
            enemy2.onPlayerCollision = function() {
                game.changeIntegrity(-50);
            };
            enemy2.onProjectileCollision = function() {
                game.increaseScore(100);
                enemy2.shrink();
            }
            game.addGameItem(enemy2);
        }
        
        function createPoint(x,y) {
            var point = game.createGameItem('point',25);
            var ball = draw.bitmap('img/ball.png');
            ball.x = -25;
            ball.y = -35;
            point.addChild(ball);
            point.x = x;
            point.y=y;
            point.velocityX =-1;
            point.rotationalVelocity =10;
            point.onPlayerCollision = function() {
                game.changeIntegrity(50);
                point.shrink();
            };
            game.addGameItem(point);
        }
                
        for(var key in levelData.gameItems){
            if (levelData.gameItems[key].type === 'helmet'){
                createfootball(levelData.gameItems[key].x,levelData.gameItems[key].y);
            }
            else if (levelData.gameItems[key].type === 'player') {
                createfootballPlayer(levelData.gameItems[key].x,levelData.gameItems[key].y)
            }
            else if (levelData.gameItems[key].type === 'enemy1') {
                createEnemy(levelData.gameItems[key].x,levelData.gameItems[key].y)
            }
            else if (levelData.gameItems[key].type === 'enemy2') {
                createEnemy2(levelData.gameItems[key].x,levelData.gameItems[key].y)
            }
            else if (levelData.gameItems[key].type === 'point') {
                createPoint(levelData.gameItems[key].x,levelData.gameItems[key].y)
            }
        }
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
    }   
}