class Form{
    constructor(){
    this.title = createElement("h2");

    this.input = createInput("name");
    this.button = createButton("play");

    this.greeting = createElement("h3");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }

 display(){

  this.title.html("CAR RACING GAME");
  this.title.position(130,0);

  this.input.position(130,160);
  this.button.position(150,200);

 this.button.mousePressed(()=>{
  this.input.hide();
  this.button.hide();
   player.name = this.input.value();

 //playerCount = playerCount+1
 playerCount += 1; 
 player.updateCount(playerCount);

 this.greeting.html("HELLO "+player.name);
 this.greeting.position(130,160);
})


   

}
}