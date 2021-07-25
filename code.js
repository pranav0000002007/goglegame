var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4199dd92-579b-4841-8645-af76428382da","3c8e6910-df7d-401c-a006-352679438a38","a3754399-8d81-4ccf-8ca7-02d007aa8943","d83ca6a2-a0b3-4392-959e-8645edce67fd"],"propsByKey":{"4199dd92-579b-4841-8645-af76428382da":{"name":"blue_shirt2_1","sourceUrl":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png","frameSize":{"x":136,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZU9n84i5bHGhnk4Ft2idQyV9REOHhz0I/category_people/blue_shirt2.png"},"3c8e6910-df7d-401c-a006-352679438a38":{"name":"brown_sweater_book_1","sourceUrl":"assets/api/v1/animation-library/gamelab/dhYrFy30alA7u3ZeJyfU1bxX2UnvwpmW/category_people/brown_sweater_book.png","frameSize":{"x":117,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"dhYrFy30alA7u3ZeJyfU1bxX2UnvwpmW","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":117,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dhYrFy30alA7u3ZeJyfU1bxX2UnvwpmW/category_people/brown_sweater_book.png"},"a3754399-8d81-4ccf-8ca7-02d007aa8943":{"name":"sticker_27_1","sourceUrl":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png","frameSize":{"x":400,"y":242},"frameCount":1,"looping":true,"frameDelay":2,"version":"wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":242},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wBEKDcgL5b8g5A6wxZLQFwn3w4yafsXs/category_stickers/sticker_27.png"},"d83ca6a2-a0b3-4392-959e-8645edce67fd":{"name":"cars_1","sourceUrl":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png","frameSize":{"x":73,"y":133},"frameCount":5,"looping":true,"frameDelay":2,"version":"a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":365,"y":133},"rootRelativePath":"assets/api/v1/animation-library/gamelab/a5_FgEhp7359xUv.ANs.RSjNaZJ7HJUh/category_vehicles/cars.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  var opticalstore= createSprite(370,190,52,140);
 opticalstore.shapeColor="yellow"
//add the velocity to make the car move.
car1.velocityY=6
  car2.velocityY=6
   car3.velocityY=-6
   car4.velocityY=-6
function draw() {
   background("white");
  text("DETHCOUNT: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  

    
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
  
 
car1.bounceOff(boundary1) 
car2.bounceOff(boundary1) 
car3.bounceOff(boundary1) 
car4.bounceOff(boundary1)  
 car1.bounceOff(boundary2) 
car2.bounceOff(boundary2) 
car3.bounceOff(boundary2) 
car4.bounceOff(boundary2)

if (keyDown("right")) {
  sam.x=sam.x+6;
}
if (keyDown("left")) {
  sam.x=sam.x-6;
}

if (sam.isTouching(car1)||sam.isTouching(car2)
||sam.isTouching(car3)||sam.isTouching(car4)) {
 sam.x=20;
sam.y=190;
  life=life+1
}
if (sam.isTouching(opticalstore)) {
  fill("red");
  textSize(30);
  text("YOU WON",120,150);

  
}
playSound("assets/default.mp3", false);

sam.setAnimation("brown_sweater_book_1")
sam.scale=0.1

car1.setAnimation("cars_1");
car2.setAnimation("cars_1");
car3.setAnimation("cars_1");
car4.setAnimation("cars_1")
 car1.scale=0.18
 car2.scale=0.18
 car3.scale=0.18
 car4.scale=0.18
 

  
 
 
 
 
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
