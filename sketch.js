/* 
403 Forbidden interactive animation by Candide Uyanze
Lettering by Neo Nuo Chen
https://eulacollective5.wixsite.com/mysite
*/

let pic1, pic2, pic3, pic4, pic5;


function preload() {
  pic1 = loadImage('pic 1.png');
  pic2 = loadImage('pic 2.png');
  pic3 = loadImage('pic 3.png');
  pic4 = loadImage('pic 4.png');
  pic5 = loadImage('pic 5.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(247, 246, 249);

}

function draw() {

  clear();

  let scaleFactor = windowWidth/1500;


  //if mouse is on the left or right side

  if ((mouseX <= width / 5) && (mouseX >= 0)) {
    imageMode(CENTER);
    image(pic1, windowWidth / 2, windowHeight / 2, pic1.width * scaleFactor, pic1.height * scaleFactor);
  } 
  
  else if ((mouseX > width / 5) && (mouseX < 2 * width / 5)) {
    imageMode(CENTER);
    image(pic2, windowWidth / 2, windowHeight / 2, pic2.width * scaleFactor, pic2.height * scaleFactor);
  } 
  
  else if ((mouseX > 2 * width / 5) && (mouseX < 3 * width / 5)) {
    imageMode(CENTER);
    image(pic3, windowWidth / 2, windowHeight / 2, pic3.width * scaleFactor, pic3.height * scaleFactor);
  } 
  
  else if ((mouseX > 3 * width / 5) && (mouseX < 4 * width / 5)) {
    imageMode(CENTER);
    image(pic4, windowWidth / 2, windowHeight / 2, pic4.width * scaleFactor, pic4.height * scaleFactor);
  } 
  
  else if ((mouseX > 4 * width / 5) && (mouseX < width)) {
    imageMode(CENTER);
    image(pic5, windowWidth / 2, windowHeight / 2, pic5.width * scaleFactor, pic5.height * scaleFactor);
  }

}
