class Form {
  constructor() {
    this.title=createElement('h1')
this.input = createInput("Name");
this.button = createButton('Play');
this.reset = createButton('reset');
this.greeting = createElement('h3');
  }
hide(){
this.title.hide();
  this.input.hide();
  this.button.hide();
  this.greeting.hide();
}
  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2-50, 0)
    
    
    
    this.input.position(displayWidth/2-40,displayHeight/2- 80);
    this.button.position(displayWidth/2+25,displayHeight/2+25);
this.reset.position(displayWidth/2+80,displayHeight/2+25);
   this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update()
      player.updateCount(playerCount);
      
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-60, displayHeight/4);
    });
    this.reset.mousePressed(()=>
    
    
    {


      player.updateCount(0)
    game.update(0)
    })

  }
}
