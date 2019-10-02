
// WHY ARE YOU LOOKING AT THIS SPAGETTI! MIND YOUR OWN BUSINESS, ITS A MESS HERE
//       _i__i__i__i_
//      (____________)
//      |####|>o<|###|
//      (____________)


nlp = window.nlp_compromise;

var messages = [],
    lastUserMessage = "",
    botMessage = "",
    botName = 'Anbot'

// Yes, I know, its not really AI. Fuck it. Yes, I know it can be refactored too!

function newEntry() {
  if (document.getElementById("chatbox").value !== "") {
    lastUserMessage = document.getElementById("chatbox").value;
    document.getElementById("chatbox").value = "";
    messages.push("<b>Yoav: </b>" + lastUserMessage);
    console.log(botMessage);
    if (botMessage === ""){
        botMessage = "Dear Mister Weber, Angela coded (badly) a chatbot for you to talk too since you have no friends.  It is coded really badly so please respond only with 'yes' and 'no'. Mmmkay?"
    }
    else if (botMessage.includes("since you have no friends")){
        if(lastUserMessage.toLowerCase().includes("yes") || lastUserMessage.toLowerCase().includes("mkay") || lastUserMessage.toLowerCase().includes("no")) {
          botMessage = "You see, you got that right, good boy, you deserve a snack. Are you hungry?";
        }else {
          botMessage = "Aw! God-damn it! Nevermind, I like you dumb too. But let’s try again with 'yes' and 'no' answers, what do you think?";
        }
    }
    else if(botMessage.includes("Aw! God-damn it! Nevermind, I like you dumb too.")){
      if(lastUserMessage.toLowerCase().includes("yes") || lastUserMessage.toLowerCase().includes("mkay") || lastUserMessage.toLowerCase().includes("no")) {
        botMessage = "You see, you got that right, good boy, you deserve a snack. Are you hungry?";
      }else {
        botMessage = 'Just type "yes"! Pleaseeeee';
      }
    }
    else if (botMessage.includes("Pleaseeeee")){
      botMessage = "Even though you are not the sharpest tool in the box, you deserve a snack. Are you hungry?";
    }
    else if(botMessage.includes("Are you hungry?")){
      if(lastUserMessage.toLowerCase().includes("yes")) {
        botMessage = "Of course you are, I’m gonna generate a perfect recipe for you! Mmmkay?";
      }else if (lastUserMessage.toLowerCase().includes("no")) {
        botMessage = 'Stop lying, you are always hungry, lets find you an recipe, mmmkay?';
      }else{
        alert("I SAID YES OR NO ANSWERS! NOW I HAVE TO REPEAT MYSELF!");
      }
    }
    else if(botMessage.includes("perfect recipe for you!") || botMessage.includes("lets find you an recipe") ){
      if(lastUserMessage.toLowerCase().includes("yes") || lastUserMessage.toLowerCase().includes("mkay")) {
        botMessage = "Take a chicken, boil it, add hummus! Do you like it?";
      }else if (lastUserMessage.toLowerCase().includes("no")) {
        botMessage = 'You cant tell me how to live! Here is the recipe: Take a chicken, boil it, add hummus. Do you like it?';
      }else{
        alert("I SAID YES OR NO ANSWERS! NOW I HAVE TO REPEAT MYSELF!");
      }
    }
    else if(botMessage.includes("chicken") ){
      if(lastUserMessage.toLowerCase().includes("yes")) {
        botMessage = "Perfect! Now cook it yourself, because Angela doesn’t know how to cook! </br> Meanwhile she is listening to 'Great Gable - Drift.' Do you remember the song? ";
      }else if (lastUserMessage.toLowerCase().includes("no")) {
        botMessage = 'Take 3 eggs, boil them, add hummus! Do you like it?';
      }else{
        alert("I SAID YES OR NO ANSWERS! NOW I HAVE TO REPEAT MYSELF!");
      }
    }
    else if(botMessage.includes("eggs")){
      if(lastUserMessage.toLowerCase().includes("yes")) {
        botMessage = "Perfect! Now cook it yourself, because Angela doesn’t know how to cook! </br> Meanwhile she is listening to 'Great Gable - Drift.' Do you remember the song? ";
      }else if (lastUserMessage.toLowerCase().includes("no")) {
        botMessage = 'I am confused, you used to have only two meal options! Just take some cereal, then.</br> By the way Angela is listening to \'Great Gable - Drift.\' Do you remember the song? ';
      }else{
        alert("I SAID YES OR NO ANSWERS! NOW I HAVE TO REPEAT MYSELF!");
      }
    }
    else if(botMessage.includes("Great Gable - Drift")){
      if(lastUserMessage.toLowerCase().includes("yes")) {
        botMessage = "Ewww, Angela got cheesy and said it reminds her of Mavrovo. Get a room you guys. </br> Anyways she asked if you wanted nudes for your birthday? ";
      }else if (lastUserMessage.toLowerCase().includes("no")) {
        botMessage = 'YOU BASTARD! Angela says it reminds her of Mavrovo at the beach, but don’t worry I won’t tell her, you dont remember. </br> Anyways she asked if you wanted nudes for your birthday?';
      }else{
        alert("I SAID YES OR NO ANSWERS! NOW I HAVE TO REPEAT MYSELF!");
      }
    }
    else if(botMessage.includes("Anyways she asked if you wanted nudes for your birthday?")){
      if(lastUserMessage.toLowerCase().includes("yes")) {
        botMessage = "Of course you do.Here you go </br></br> /(.) (.)\\</br>\\ ) . ( /</br>~(  v  )~ </br></br>Anyways until Angela learns machine learning, I have to sign off. Till then she wanted to share something with you. Okay? </br>"
      }else if (lastUserMessage.toLowerCase().includes("no")) {
        botMessage = '( -̩̩̩͡˛ -̩̩̩͡ )</br></br> Anyways until Angela learns machine learning, I have to sign off. Till then she wanted to share something with you. Okay?</br> ';
      }else{
        alert("I SAID YES OR NO ANSWERS! NOW I HAVE TO REPEAT MYSELF!");
      }
    }
    else if(botMessage.includes("Angela learns machine learning")){
      if(lastUserMessage.toLowerCase().includes("yes")) {
        botMessage = "She says and I quote: </br> <h1>Happy birthday, may your code always compile. I love you. </h1>"
      }else{
        alert("There is only a yes answer here Yoav! NOW I HAVE TO REPEAT MYSELF!");
      }
    }
    else{
      botMessage = "Get a job. I'm offline."
    }

    messages.push("<b>" + botName + ":</b> " + botMessage);

    for (var i = 1; i < 50; i++) {
      if (messages[messages.length - i])
        document.getElementById("chatlog" + i).innerHTML = messages[messages.length - i];
        if(!document.getElementsByClassName("chatlog")[i].hasChildNodes()){
          document.getElementsByClassName("chatlog")[i].classList.add('hide');
        }else{
          document.getElementsByClassName("chatlog")[i].classList.remove('hide');
        }
    }


  }
}

document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    newEntry();
  }
  if (key == 38) {
    console.log('hi')
  }
}
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}
