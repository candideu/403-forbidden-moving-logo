/* 
403 Forbidden interactive animation by Candide Uyanze
Lettering by Neo Nuo Chen
https://eulacollective5.wixsite.com/mysite
*/

let pic1, pic2, pic3, pic4, pic5;


function preload() {
  pic1 = loadImage('https://raw.githubusercontent.com/candideu/403-forbidden-moving-logo/main/pic%201.png');
  pic2 = loadImage('https://github.com/candideu/403-forbidden-moving-logo/blob/main/pic%202.png');
  pic3 = loadImage('https://github.com/candideu/403-forbidden-moving-logo/blob/main/pic%203.png?raw=true');
  pic4 = loadImage('https://github.com/candideu/403-forbidden-moving-logo/blob/main/pic%204.png');
  pic5 = loadImage('https://github.com/candideu/403-forbidden-moving-logo/blob/main/pic%205.png?raw=true');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(247, 246, 249);

}

function draw() {

  clear();

  let scaleFactor = width/2000;


  //if mouse is on the left or right side

  if ((mouseX <= width / 5) && (mouseX >= 0)) {
    imageMode(CENTER);
    image(pic1, width / 2, height / 5, pic1.width * scaleFactor, pic1.height * scaleFactor);
  } 
  
  else if ((mouseX > width / 5) && (mouseX < 2 * width / 5)) {
    imageMode(CENTER);
    image(pic2, width / 2, height / 5, pic2.width * scaleFactor, pic2.height * scaleFactor);
  } 
  
  else if ((mouseX > 2 * width / 5) && (mouseX < 3 * width / 5)) {
    imageMode(CENTER);
    image(pic3, width / 2, height / 5, pic3.width * scaleFactor, pic3.height * scaleFactor);
  } 
  
  else if ((mouseX > 3 * width / 5) && (mouseX < 4 * width / 5)) {
    imageMode(CENTER);
    image(pic4, width / 2, height / 5, pic4.width * scaleFactor, pic4.height * scaleFactor);
  } 
  
  else if ((mouseX > 4 * width / 5) && (mouseX < width)) {
    imageMode(CENTER);
    image(pic5, width / 2, height / 5, pic5.width * scaleFactor, pic5.height * scaleFactor);
  }

}
