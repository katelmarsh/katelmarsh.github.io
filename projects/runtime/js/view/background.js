var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        //var tree;
        var circle;
        var rect;
        
        // Add any variables that will be used by render AND update here:
        var building;
        var buildings = [];
        var buildingDistant =[];
        var circles = [];
        var moon;
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;

            background.removeAllChildren();

            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'black');
            background.addChild(backgroundFill);
            
            moon = draw.bitmap('img/moon.png');
                moon.x=canvasWidth;
                moon.y=groundY-430;
                moon.scaleX=.25;
                moon.scaleY=.25;
                background.addChild(moon);
                
            var stadium = draw.bitmap('img/stadium seats.png');
            stadium.x = 0;
            stadium.y = groundY-221*2;
            stadium.scaleX = canvasWidth/300;
            stadium.scaleY = 2;
            background.addChild(stadium);
            
            // TODO: 3 - Add a moon and starfield
            var colors = ['Bisque','BurlyWood','Peru','SaddleBrown','#3c1e11'];
            
            for(var i=0; i<100; i++){
                // chooses random color from the array for skintone
                var color = colors[Math.floor(Math.random()*colors.length)]
                circle = draw.circle(10,color,color, 2);
                circle.x = (canvasWidth-50)*Math.random()+50;
                circle.y = (groundY-350)*Math.random()-15+200;
                background.addChild(circle);
                circles.push(circle);
            }     
            
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            //var buildings = [];
            for(var i=1;i<3;i++){
                building = draw.bitmap('img/down marker.png');
                building.x=1000*i;
                building.y=groundY-230;
                background.addChild(building);
                buildingDistant.push(building);
            }
            
            for(var i=1;i<8;i++){
                var buildingHeight = 130;
                building = draw.rect(8,buildingHeight,'White','White',1);
                building.x=canvasWidth/6.25*i;
                building.y=groundY-buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
            
            // TODO 4: Part 1 - Add as tree
            /*
            tree = draw.bitmap('img/tree.png');
            tree.x = 200;
            tree.y = groundY -225;
            background.addChild(tree);
            */
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // move people up and down in crowd... find out how to do this
            
            // TODO 4: Part 2 - Move the tree!
            moon.x = moon.x-.1;
            if(moon.x < -200){
                moon.x = canvasWidth;
            }
            
            // distant buildings
            for(var i=0;i<buildingDistant.length;i++){
                buildingDistant[i].x = buildingDistant[i].x-.5;
                if(buildingDistant[i].x < -200){
                    buildingDistant[i].x = canvasWidth;
                }
            }
            // TODO 5: Part 2 - Parallax
            for(var i=0;i<buildings.length;i++){
                buildings[i].x = buildings[i].x-2;
                if(buildings[i].x < -200){
                    buildings[i].x = canvasWidth;
                }
            }

        }
        

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
