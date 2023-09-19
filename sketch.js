/* 
403 Forbidden interactive animation by Candide Uyanze
Lettering by Neo Nuo Chen
https://eulacollective5.wixsite.com/mysite
*/

let pic1, pic2, pic3, pic4, pic5;


function preload() {
  pic1 = loadImage('https://assets.editor.p5js.org/5f6037057e3ef10024921307/e4897d8b-ad92-479a-82ac-697ca3befc1b.png');
  pic2 = loadImage('https://assets.editor.p5js.org/5f6037057e3ef10024921307/8719df6d-c1ae-440a-ae0c-adfe2cdaddab.png');
  pic3 = loadImage('https://assets.editor.p5js.org/5f6037057e3ef10024921307/b2ca9832-a459-4960-b86a-eefcb96ea575.png');
  pic4 = loadImage('https://assets.editor.p5js.org/5f6037057e3ef10024921307/37b69cce-0a27-4272-b3df-e5cb49ec0ae7.png');
  pic5 = loadImage('https://assets.editor.p5js.org/5f6037057e3ef10024921307/640db512-8dba-4f63-a93b-2aa6d2dcf369.png');
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
