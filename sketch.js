let canvasSize = 900;

//Part 1
let img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13;

let size = canvasSize/15;

function preload() {
      img1 = loadImage('https://upload.wikimedia.org/wikipedia/commons/9/90/AUGUST_RODIN_O_pensador_%28vista_frontal%29.png');
      img2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Microscope_icon.svg/256px-Microscope_icon.svg.png');
    img3 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Breathe-applications-internet.svg/128px-Breathe-applications-internet.svg.png');
    img4 = loadImage('https://upload.wikimedia.org/wikipedia/commons/3/3e/Unesco_Cultural_Heritage_logo.svg');
    img5 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Creative-Tail-virus.svg/128px-Creative-Tail-virus.svg.png');
    img6 = loadImage('https://upload.wikimedia.org/wikipedia/commons/1/17/Creative-Tail-Animal-dolphin.svg');
    img7 = loadImage('https://upload.wikimedia.org/wikipedia/commons/3/3e/Tree-256x256.png');
    img8 = loadImage('https://upload.wikimedia.org/wikipedia/commons/d/da/Sciences_exactes_NB.png');
    img9 = loadImage('https://upload.wikimedia.org/wikipedia/commons/4/49/Gnujuggler_icon.png');
    img10 = loadImage('https://upload.wikimedia.org/wikipedia/commons/4/41/Crystal_Clear_action_run_v2.svg');
} 
 //Part 2 
let ground = canvasSize - canvasSize/12;
let ballShift = 3;
let diameter = canvasSize/40
let ballY = canvasSize * 0.5 + canvasSize/24 + canvasSize/24;


//clouds
let cloudDiameter = canvasSize * 0.1;
let cloud1X = canvasSize * 0.1;
let cloud1Y = canvasSize * 0.06;
let cloud2X = canvasSize * 0.15;
let cloud2Y = canvasSize * 0.08;
let cloud3X = canvasSize * 0.2;
let cloud3Y = canvasSize * 0.06;
let shift = 0.5;



  //Part3
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

let arrABC = Array.from(str);
function setup(){  
   createCanvas(canvasSize, canvasSize);      
   
   imageMode(CENTER);
   textAlign(CENTER);
   angleMode(DEGREES);
   textFont("Curier")
   
}
   function draw() {
     background(227,242,253);
     var time1 = 7000;
     var time2 = 22000; 
     var time3 = 32000;
     var currentTime = millis();
     
   if (currentTime < time1) {
     frameRate(1);
     image(img1,width/2,height * 0.67, size * 4, size * 4 * 1.45);//thinker
     
    
      image(img2,random(canvasSize * 0.33, canvasSize * 0.66), random(canvasSize * 0.33, canvasSize * 0.66), size, size);
     image(img3,random(canvasSize * 0.33, canvasSize * 0.66), random(canvasSize * 0.33, canvasSize * 0.66), size, size);
     image(img4,random(canvasSize * 0.33, canvasSize * 0.66), random(canvasSize * 0.33, canvasSize * 0.66), size, size);
     image(img5,random(canvasSize * 0.33, canvasSize * 0.66), random(canvasSize * 0.33, canvasSize * 0.66), size, size);
     image(img6,random(canvasSize * 0.33, canvasSize * 0.66), random(canvasSize * 0.33, canvasSize * 0.66), size, size);
     image(img7,random(canvasSize * 0.33, canvasSize * 0.66), random(canvasSize * 0.33, canvasSize * 0.66), size, size);
     image(img8,random(canvasSize * 0.33, canvasSize * 0.66), random(canvasSize * 0.33, canvasSize * 0.66), size, size);
     image(img9,random(canvasSize * 0.33, canvasSize * 0.66), random(canvasSize * 0.33, canvasSize * 0.66), size, size);
     image(img10,random(canvasSize * 0.33, canvasSize * 0.66), random(canvasSize * 0.33, canvasSize * 0.66), size, size);
     
     //rays
      fill(255, 0, 0);
      stroke(255,0,0, 5);
      for (var y = 0; y <= height; y += 10) {
      for (var x = 0; x <= width; x += 10) {
      point(x, y);
      line(x, y, width * 0.5, height * 0.5);
      }
      }

     //text
     fill(140, 20, 150);
     textSize(canvasSize/30);
     text('Find time for thought, this is the source of strength.', width/2, height * 0.92);
   } 
   
    
 //----------------------part 2 --------------------------------    
   else if (currentTime >= time1 && currentTime < time2) {
   frameRate(50);

  //playing guy
  let centerX = canvasSize * 0.5;
  let centerY = canvasSize * 0.5;
  let bodyTop = centerY + height/24;
  let bodyBottom = centerY * 1.5;
  let leftFootX = centerX - width/12;
  let feetY = bodyBottom + height * 0.2;
  let rightFootX = centerX + width/12;
  let shoulders = bodyTop + height/24;
  let leftHandX = centerX - width * 0.25;
  let rightHandX = centerX + width * 0.25;
  
  //ground
  fill(0, 250, 0);
  rect(0, height - height/12, width, height/12); 
  
  //face
  noStroke();
  fill(255, 255, 100);
  ellipse(centerX, centerY, width/12, height/12);//face outline
  
  //eyes
  fill(0, 0, 250);
  ellipse(centerX - centerX * 0.02, centerY - centerY * 0.02, centerX/60, centerY/60);
  ellipse(centerX + centerX * 0.02, centerY - centerY * 0.02, centerX/60, centerY/60);
  stroke(1);
  line(centerX, centerY, centerX, centerY + centerY * 0.02);//nose
  
  fill(255, 0, 0);//mouth
  strokeWeight(canvasSize/900)
  stroke(255, 0, 0);
  arc(centerX, centerY + centerY * 0.04, width/40, height/120, 1, 180);


  strokeWeight(canvasSize/100);  //neck
  stroke(255, 255, 100);
  line(centerX, bodyTop, centerX, shoulders );
  
  strokeWeight(canvasSize/45);//hands
  stroke(255,138,101);
  line(centerX, shoulders,leftHandX, shoulders);
  line(centerX, shoulders,rightHandX, shoulders);
  
  strokeWeight(canvasSize/15);//body
  line(centerX, shoulders, centerX, bodyBottom );
  
  strokeWeight(canvasSize/35);//legs
  stroke(25,118,210);
  line(centerX, bodyBottom,leftFootX, feetY  );
  line(centerX, bodyBottom,rightFootX, feetY  );
  
  //ball

  strokeWeight(canvasSize/900)
  fill(250,0,0);
  ellipse(leftHandX, ballY, diameter, diameter);  

  ballY += ballShift;//bounce
  
  if (ballY < (canvasSize * 0.5 + canvasSize/24 + canvasSize/24) - 0.5 * diameter || 
  ballY > ground - 0.5 * diameter) {
  ballShift = - ballShift;
}
  
  //text
  fill(140, 20, 150);
  textSize(canvasSize/30);
  text('Find time for the game, this is the secret of eternal youth.', width/2, height * 0.3);
  
  
  // the cloud
    let aArray = [0.2, 0.2, 0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1.0];
  
  //darkening of the cloud: I used remainder operator to do recurrent count through indeces of the array, which includes alpha coefficients of opacity
  let currentAlpha = (frameCount/20 % aArray.length) * 10;
  fill(26,35,126, currentAlpha)
  noStroke();
  ellipse(cloud1X, cloud1Y, cloudDiameter);
  ellipse(cloud2X, cloud2Y, cloudDiameter);
  ellipse(cloud3X, cloud3Y, cloudDiameter);
  cloud1X += shift;
  cloud2X += shift;
  cloud3X += shift;
  
  
  if (cloud3X > canvasSize - 0.5 * cloudDiameter) {//cloud movement
     shift -= 0.5; 
  }  
  if (cloud1X < 0.5 * cloudDiameter) {
    shift += 0.5; 
  
  }
  
  //rain
  let rainFunction = (surface, AlphaThreshold)  => {
  let xPositions = random(cloud1X - 0.5 * cloudDiameter, cloud2X + 0.5 * cloudDiameter);
  let yPositions = random(cloud1Y, cloud3Y);

  //condition for the rain start:
  while (yPositions < surface && currentAlpha > AlphaThreshold) {
         
        noStroke();
        fill(121,134,203);
        ellipse(xPositions, yPositions, canvasSize/160, canvasSize/160);
        yPositions += 1;
             
    }   
};
rainFunction(ground, 80);  
    }
      
     
//--------------------Part 3------------------------ 

    else if (currentTime >= time2 && currentTime <= time3) {  
     frameRate(50);
//background(128,203,196);
let letterWidth = canvasSize/45;
let letterHeight = canvasSize/45;
  
  
 for (let xCoord = 0; xCoord < canvasSize/letterWidth; xCoord = xCoord + 1) {
for (let yCoord = 0; yCoord < canvasSize/letterHeight; yCoord = yCoord + 1) {
      stroke(255);
      strokeWeight(3);
      fill(random(50, 200), random(50,200), random(50,200));
      textSize(canvasSize/45);
      text(random(arrABC),  xCoord * letterWidth,
yCoord * letterHeight, letterWidth, letterWidth );
     }
 }
textSize(canvasSize/30);
stroke(100, 170, 200);
fill(252, 3, 198);
text("Find time for reading, this is the Foundation of knowledge.", canvasSize/6, canvasSize/3, 600, 300);
  
  //bottom book
  strokeWeight(3);
  stroke(64, 24, 8);
  noFill();
  arc(canvasSize * 0.33, canvasSize - 30, 15, 30, 90, 270);
  fill(255);
  rect(canvasSize * 0.33, canvasSize - 45, 150, 30);
  fill(128,203,196);
  arc(canvasSize * 0.5, canvasSize - 30, 15, 30, 90, 270);
  
  //2nd book
  
    strokeWeight(3);
  stroke(64, 24, 8);
  noFill();
  arc(canvasSize * 0.33, canvasSize - 60, 15, 30, 90, 270);
  fill(247, 227, 126);
  rect(canvasSize * 0.33, canvasSize - 75, 150, 30);
  fill(128,203,196);
  arc(canvasSize * 0.5, canvasSize - 60, 15, 30, 90, 270);
  
  //vertical books
  fill(126, 184, 247);
  rect(canvasSize * 0.33, canvasSize * 0.75, 30, 150);
  fill(34, 245, 118);
  rect(canvasSize * 0.33 + 30, canvasSize * 0.75 + 15, 20, 135);
  fill(242, 173, 75);
  rect(canvasSize * 0.33 + 50, canvasSize * 0.75 - 20, 40, 170);
  fill(191, 129, 227);
  rect(canvasSize * 0.33 + 90, canvasSize * 0.75 + 30, 20, 120);
  
     }
     
//-----------------Part 4-----------------------------     
else {
  
  
    
  let arrQuote = ["Find time for thought, this is the source of strength.", "Find time for the game, this is the secret of eternal youth.", "Find time for reading, this is the Foundation of knowledge.", "Find time to be friendly, this is the road to happiness.", "Find time for dreams, they will pull your vehicle at the stars.", "Find time to love and be loved in return, this is the privilege of the gods.", "Find time to look around you, it's too short a day to be selfish.", "Find time to laugh this is the music of the soul.", "Yannis Ritsos."];  
  
 let fromMe = "Initially, I was planning to illustrate all the lines of this quote but the task took more time than I supposed."    

   fill(mouseX, mouseY, mouseX);
   stroke(mouseY, mouseX, mouseX - mouseY, 50);
   ellipse(mouseX, mouseY, mouseX - mouseY, mouseX%mouseY);
     
  
  

   for (let i = 0; i < arrQuote.length; i++) {
  
   fill(123,31,162);
   textSize(canvasSize/40); 
   text(arrQuote[i], canvasSize * 0.5 , canvasSize/3 + i * 40);
 } 
   textSize(canvasSize/60);
   text(fromMe, canvasSize * 0.5, canvasSize * 0.75);

}
}  