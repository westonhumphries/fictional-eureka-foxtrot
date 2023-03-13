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
    //named, not anonymous. Name = nameLength
    //parameters, one = j
    //void if it has no return value
  
    return "Your name is " + userName.length + " letters long!";
  }
  
  
  
  function getSpiritAnimal(userName) {
    //flow control: case switch, loop, if/then
  
    if (userName == 1) {
      //execute some code
      return "your spirit animal is a Snake";
    } 
  
    else if (userName == 2) {
      //execute some code
      return "your spirit animal is a Fox";
    } 
  
    else if (userName.length == 3) {
      //execute some code
      return "your spirit animal is a Liger";
    } 
  
    else if (userName.length == 4) {
      //execute some code
      return "your spirit animal is a Dragon";
    } 
  
    else if (userName.length == 5) {
      //execute some code
      return "your spirit animal is a Lion";
    } 
  
    else if (userName.length == 6) {
      //execute some code
      return "your spirit animal is a Niffler";
    } 
  
    else if (userName.length == 7) {
      //execute some code
      return "your spirit animal is a Owl";
    } 
  
    else if (userName.length == 8) {
      //execute some code
      return "your spirit animal is a Otter";
    } 
  
    else if (userName.length == 9) {
      //execute some code
      return "your spirit animal is a Shark";
    } 
  
    else if (userName.length > 9) {
      //execute some code
      return "yo first name is kinda long, your spirit animal is a Giraffe!!!!";
    } 
  
    else {
      return "You don't play my game, you get no name!!!!!";
    }
    
  }