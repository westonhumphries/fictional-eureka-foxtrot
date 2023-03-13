$(document).ready(function () {
    console.log("let get this puppy started");
  
    //let revName;
  
    $("#btnGetFacts").click(function () {
      $("#coolNameFactsOutput").html();
      // handle it if input is blank
  
      let userName = $("#userName").val();
      console.log("user name = ", userName);
      //let coolFacts = generateCoolNameFacts(userName);
  
      console.log("name length f/n = ", nameLength(userName));
  
      console.log("you clicked the button");
      //console.log("from ln 12", generateCoolNameFacts(userName));
  
      $("#coolNameFactsOutput").html(nameLength(userName));
      $("#coolNameFactsOutputss").html(getSpiritAnimal(userName));
    });
  });
  
  
  
  
  
  function nameLength(userName) {
            return;
  }
  
  
  
  function getSpiritAnimal(userName) {
    //flow control: case switch, loop, if/then
  
    if (userName == 1) {
      //execute some code
      return "I have a scar on my finger that looks like a smiley face.";
    } 
  
    else if (userName == 2) {
      //execute some code
      return "I love the University of Alabama Athletics. Mainly Alabama football!!";
    } 
  
    else if (userName == 3) {
      //execute some code
      return "I can eat an entire pizza bymyself and still be hungry";
    } 
  
    else if (userName == 4) {
      //execute some code
      return "I have 2 Rottweilers that people are scared of, but they are super nice.";
    } 
  
    else if (userName == 5) {
      //execute some code
      return "I once battled a Dragon and won!";
    } 
  
    else if (userName == 6) {
      //execute some code
      return "I am a new Harry Potter fan.";
    } 
  
    else if (userName == 7) {
      //execute some code
      return "I love amusement parks. Mainly Universal Studios!!";
    } 
  
    else if (userName == 8) {
      //execute some code
      return "If i could own a fictional creature I would own a Niffler!";
    } 
  
    else if (userName == 9) {
      //execute some code
      return "My favorite food is chicken wings";
    } 
  
    else if (userName > 9) {
      //execute some code
      return "Woah chill I don't have anymore cool facts for you😅😁";
    } 
  
    else {
      return "Enter correct number or you get no cool facts!!!😡😡😡";
    }
    
  }