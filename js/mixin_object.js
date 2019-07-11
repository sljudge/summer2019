let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let boat = {
    name: "Warrior",
    type: "race-boat"
  };
  
  // Add your code below this line
  
  let glideMixin = function(obj){
      obj.glide = () => console.log('Gliding giddily through the ether.');
  }
  
  glideMixin(bird);
  glideMixin(boat);
  
  bird.glide();  