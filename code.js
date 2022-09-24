var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6f1d1427-0d9f-44a2-a4c6-2e74c94cda4c","9ac73ae6-ef98-465c-9920-d433f89a9189","6d7cf7a5-5107-49bc-8403-88ed7f7d29ee","b16b314c-2ceb-4341-a11b-ed6ecf5cad09"],"propsByKey":{"6f1d1427-0d9f-44a2-a4c6-2e74c94cda4c":{"name":"car_black_1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":71,"y":131},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:47:28 UTC","pngLastModified":"2021-01-05 19:46:44 UTC","version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","sourceSize":{"x":71,"y":131},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"9ac73ae6-ef98-465c-9920-d433f89a9189":{"name":"car_blue_1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":71,"y":131},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:46:28 UTC","pngLastModified":"2021-01-05 19:47:32 UTC","version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","sourceSize":{"x":71,"y":131},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"6d7cf7a5-5107-49bc-8403-88ed7f7d29ee":{"name":"car_green_1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":71,"y":131},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:47:05 UTC","pngLastModified":"2021-01-05 19:47:05 UTC","version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","sourceSize":{"x":71,"y":131},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"},"b16b314c-2ceb-4341-a11b-ed6ecf5cad09":{"name":"car_yellow_1","categories":["vehicles"],"frameCount":1,"frameSize":{"x":71,"y":131},"looping":true,"frameDelay":12,"jsonLastModified":"2021-01-05 19:46:49 UTC","pngLastModified":"2021-01-05 19:46:55 UTC","version":"omnOX.x_t1i9Gfeu3xZ2Tlu7QfEOCH5s","sourceUrl":null,"sourceSize":{"x":71,"y":131},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/b16b314c-2ceb-4341-a11b-ed6ecf5cad09.png"}}};
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

 boundary1= createSprite(200,120,400,3)
 boundary2= createSprite(200,260,400,3)
 
 sam= createSprite(20,190,13,13)
 sam.shapeColor= "green"
 
 car1=createSprite(120,130,10,10)
 car1.shapeColor="red"
 car1.setAnimation("car_black_1")
 car1.scale=0.3
 
 car2=createSprite(230,130,10,10)
 car2.shapeColor="red"
 car2.setAnimation("car_blue_1")
 car2.scale=0.3
 
 car3=createSprite(170,250,10,10)
 car3.shapeColor="red"
 car3.setAnimation("car_green_1")
 car3.scale=0.3
 
 car4=createSprite(300,250,10,10)
 car4.shapeColor="red"
 car4.setAnimation("car_yellow_1")
 car4.scale=0.3
 
//add the velocity to make the car move.
  car1.velocityY= 8
  car2.velocityY =8
  car3.velocityY =-8
  car4.velocityY =-8
  

function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries

  car1.bounceOff(boundary1)
  car1.bounceOff(boundary2)
  
  car2.bounceOff(boundary1)
  car2.bounceOff(boundary2)
  
  car3.bounceOff(boundary1)
  car3.bounceOff(boundary2)
  
  car4.bounceOff(boundary1)
  car4.bounceOff(boundary2)


//Add the condition to make the sam move left and right
if (keyDown("right")) {
  sam.x=sam.x+2
    
  }
  
 if(keyDown("left")){
   sam.x=sam.x-2
   
 } 
  
    

//Add the condition to reduce the life of sam if it touches the car.
  
  
  if(sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4)){
    sam.x=20
    sam.y=190
    life=life+1
  }
  
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
