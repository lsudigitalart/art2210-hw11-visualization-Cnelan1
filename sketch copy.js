
let warrants;

function preload(){
  warrants = loadTable("Warrants.csv")
}

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < warrants.getRowCount(); i++)
  {
    print(warrants.get(i,5));
    if(warrants.get(i,5)== "M")
    {
    
     
      fill(135,206,250,100)
      rect(width/2, height/2, 10)

      
    }

    //if(warrants.get(i,5)== "F")
    //{
      //fill(255,192,203,100)
      //ellipse(width/2, height/2, 10)
    //}

     //print(warrants.get(i,9));
     
    // if(warrants.get(i,9)== "A")
    //{
    //  fill(0,255,0,100)
    //  ellipse(width/2, height/2, 30)
    //}

    //if(warrants.get(i,9)== "B")
    //{
      //fill(255,0,0,100)
      //ellipse(width/2, height/2, 40)
    //}
      
    //if(warrants.get(i,9)== "C")
    //{
      //fill(0,255,0,100)
      //ellipse(width/2, height/2, 50)
    //}

       
    //if(warrants.get(i,9)== "D")
    //{
      //fill(0,255,0,100)
      //ellipse(width/2, height/2, 60)
    //}

  }
}

function draw() {
  //background(220);
}
