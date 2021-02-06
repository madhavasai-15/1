const loading = [];
var loading_image = 1;
var state = 'loading';

var backGround;

var database;

var homeImg1, homeImg2;
var gamesImg1, gamesImg2;
var contactImg1, contactImg2;
const headingImg = [];

function preload() {
  Font = loadFont('Font.ttf');

  for(var i = 1; i < 18; i++){
    if(i < 10){
      loading[i] = loadImage('Images/loading/0' + i + '.png');
    }else {
      loading[i] = loadImage('Images/loading/' + i + '.png');
    }    
  }

  logo1 = loadImage('Images/logo1.png');
  logo2 = loadImage('Images/logo2.png');
  name_ = loadImage('Images/name.png');
  learn_more = loadImage('Images/learn_more.png');
  backGround = loadImage('Images/background.png');

  homeImg1 = loadImage('Images/heading/home1.png');
  homeImg2 = loadImage('Images/heading/home2.png');
  gamesImg1 = loadImage('Images/heading/games1.png');
  gamesImg2 = loadImage('Images/heading/games2.png');
  contactImg1 = loadImage('Images/heading/contact1.png');
  contactImg2 = loadImage('Images/heading/contact2.png');

  headingImg[0] = loadImage('Images/heading/1.png');
  headingImg[1] = loadImage('Images/heading/2.png');
  headingImg[2] = loadImage('Images/heading/3.png');
  headingImg[3] = loadImage('Images/heading/4.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
};

function draw() {
  background(255);  
  rectMode(CENTER);
  imageMode(CENTER);
  noStroke();
  textFont(Font);

  if(state === 'loading'){
    if(frameCount % 3 === 0 && loading_image < 17){
      loading_image++;
    }
    if(frameCount % 60 === 0 && loading_image > 16){
      state = 'home';
    }

    image(loading[loading_image], width/2, height/2);

  }else if(state === 'home'){
    image(backGround, width/2, height/2, width, height);

    fill(255);
    textSize(24);
    
    //logo
    if(mouseX > 0+width/15-width/15/2 && mouseX < 0+width/15+width/15/2 && mouseY > 0+height/8-width/15/2 && mouseY < 0+height/8+width/15/2){
      cursor(HAND);
      image(logo2, 0+width/15, 0+height/8, width/13, width/13);
    }else {
      cursor();
      image(logo1, 0+width/15, 0+height/8, width/15, width/15);
    }

    //heading properties
    heading();
    //rotating squares
    Rotating_Square();
    //name
    Name();

    //animation on learn more button
    if(mouseX > width/2-width/15/2 && mouseX < width/2+width/15/2 && mouseY > height/1.65-height/15/2 && mouseY < height/1.65+height/15/2){
      cursor(HAND);
    }

    //clicks animation
    for(var i = 0; i < clicks.length; i++){
      clicks[i].show();
      clicks[i].update();
    }

    //learn more button
    image(learn_more, width/2, height/1.65, width/15, height/15);
  }
};

function mouseReleased(){
  if(state === 'home'){
    //click animation creation
    clicks.push(new Click());

    //lag prevent
    if(clicks.length > 10){
      clicks = [];
    }

    //clicking on icon
    if(mouseX > 0+width/15-width/15/2 && mouseX < 0+width/15+width/15/2 && mouseY > 0+height/8-width/15/2 && mouseY < 0+height/8+width/15/2){
      window.location.href = 'https://madhavasai-15.github.io/index';
    } 
    
    //clicking on home
    if(mouseX > width/1.21-width/20/2 && mouseX < width/1.21+width/20/2 && mouseY > height/12-height/16/2 && mouseY < height/12+height/16/2){
      window.location.href = 'https://madhavasai-15.github.io/index';
    }

    //clicking on games
    if(mouseX > width/1.13-width/20/2 && mouseX < width/1.13+width/20/2 && mouseY > height/12-height/16/2 && mouseY < height/12+height/16/2){
      window.location.href = 'https://madhavasai-15.github.io/My-Games/';
    } 

    //clicking on contact
    if(mouseX > width/1.06-width/20/2 && mouseX < width/1.06+width/20/2 && mouseY > height/12-height/16/2 && mouseY <  height/12+height/16/2){
      window.location.href = 'https://madhavasai-15.github.io/contact/';
    }

    //clicking on learn more
    if(mouseX > width/2-width/15/2 && mouseX < width/2+width/15/2 && mouseY > height/1.65-height/15/2 && mouseY < height/1.65+height/15/2){
      window.location.href = 'https://madhavasai-15.github.io/about-me';
    }

    //name rotation
    if(mouseX > width/2-width/3/8 && mouseX < width/2+width/3/8 && mouseY > height/2-height/5/2 && mouseY < height/2+height/5/2){
      if(name_rotation === false){
        name_rotation = true;
      }
    }  
  }
};