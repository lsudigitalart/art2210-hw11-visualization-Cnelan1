let warrants;
let angle1 = 0;
let angle2 = 0;


function preload() {
  warrants = loadTable("Warrants.csv");
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  
  angle1 += 0.5;
  angle2 += 0.8;


  for (let i = 0; i < warrants.getRowCount(); i++) {
    let gender = warrants.get(i, 5);

    if (gender == "M") {
      fill(135, 206, 250,255);
      noStroke();

      push();
      translate(width / 2, height / 2); 
      rotate(-angle1);                    
      rect(0, 0, 70,70);               
      pop();
    }

    if(warrants.get(i,5)== "F")
    {
      fill(255,192,203,100)
      noStroke();

      push();
      translate(width / 2, height / 2); 
      rotate(angle2);                    
      triangle(-60,45,0,-60,60,45);            
      pop();
    }

    if(warrants.get(i,9)== "A")
    {
      push();
      translate(width / 2, height / 2);
      rotate(-angle1);
      fill(0, 255, 150, 120);
      ellipse(0, 0, 200,200);
      pop();
    }
   
    if(warrants.get(i,9)== "B")
    {
      push();
      translate(width / 2, height / 2);
      rotate(-angle2);
      fill(180, 100, 255, 160);
      triangle(-80,60,0,-80,80,60); 
      pop();

    }
    
     if(warrants.get(i,9)== "C")
    {
      fill(0,20,0,100)
      ellipse(width/2, height/2, 300)
    }

    if(warrants.get(i,9)== "D")
    {
      fill(100, 150, 250,255);
      noStroke();

      push();
      translate(width / 2, height / 2); 
      rotate(-angle1);                    
      rect(0, 0, 190,190);               
      pop();
      }
  }
 
}