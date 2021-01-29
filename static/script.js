dragonkey = 0;
ghostkey = 0;
shoekey = 0;
doorDone = 0;
chestLevel = 0;
function dragon(){
  if(document.getElementById('dragonbox1').value.toLowerCase() == "music" && document.getElementById('dragonbox2').value.toLowerCase() == "ghost" && document.getElementById('dragonbox3').value.toLowerCase() == "slaves"){
    document.getElementById("dragonsound").play();
    dragonkey = 1;
  }
  else{
    document.getElementById('dragonbox1').value = ""
    document.getElementById('dragonbox2').value = ""
    document.getElementById('dragonbox3').value = ""
    alert("Try again, you know this!")
    dragonkey = 0;
  }
  
}
function ghost(){
  if(document.getElementById('ghostbox1').value.toLowerCase() == "mary johnson"){
    document.getElementById("ghostsound").play();
    ghostkey = 1;
  }
  else{
    document.getElementById('ghostbox1').value = ""
    alert("Try again, you know this!")
    ghostkey = 0;
  }
}
function shoes(){
  if(document.getElementById('shoebox1').value.toLowerCase() == "shoes" && document.getElementById('shoebox2').value.toLowerCase() == "disease"){
    document.getElementById("shoesound").play();
    shoekey = 1;
  }
  else{
    document.getElementById('shoebox1').value = ""
    document.getElementById('shoebox2').value = ""
    alert("Try again, you know this!")
    shoekey = 0;
  }
}
function doorClick(){
  if ((dragonkey + ghostkey + shoekey) == 3  &&doorDone == 0){
    doorDone = 1;
    document.getElementById("door").src = "static/dooropen.png";
    document.getElementById("doorMessage").innerText = "Woah it opened!";
  }
  else if(doorDone == 1){
     location.replace("/secret")
  }
  else{
    document.getElementById("doorMessage").innerText = "It won't budge...";
  }
}

function chestClick(){
  chestLevel++;

  switch(chestLevel){
    case 1:
    document.getElementById("chests").src = "static/openchests.png";
    document.getElementById("chestMessage").innerText = "Wrong one! Okay that was just a test, click the chests to reset and try again.";
    break;
    case 2:
    document.getElementById("chests").src = "static/closechests.png";
    document.getElementById("chestMessage").innerText = "I mixed them up again.  Try and focus this time.";
    break;
    case 3:
    document.getElementById("chests").src = "static/openchests.png";
    document.getElementById("chestMessage").innerText = "Wrong one again?! Are you sure you want the surprise? Okay we'll say your finger slipped, click the chests to reset and try again.";
    break;
    case 4:
    document.getElementById("chests").src = "static/closechests.png";
    document.getElementById("chestMessage").innerText = "I mixed them up again.  Try one of the corner chests...";
    break;
    case 5:
    document.getElementById("chests").src = "static/openchests.png";
    document.getElementById("chestMessage").innerText = "...wrong... it wasn't supposed to take this long. Click the chests to reset and try again.";
    break;
    case 6:
    document.getElementById("chests").src = "static/closechests.png";
    document.getElementById("chestMessage").innerText = "Okay I stopped mixing them so don't click any of the ones you already did.  That should narrow it down.";
    break;
    case 7:
    document.getElementById("chests").src = "static/openchests.png";
    document.getElementById("chestMessage").innerText = "This is just unbelievable, I'm not even mad at you, I'm mad at myself for making such a shit puzzle.  Reset it while I take a breather.";
    break;
    case 8:
    document.getElementById("chests").src = "static/closechests.png";
    document.getElementById("chestMessage").innerText = "Here is a hint, the prize chest is square.";
    break;
    case 9:
    document.getElementById("chests").src = "static/openchests.png";
    document.getElementById("chestMessage").innerText = "Oh shit I forgot to actually put it in the chest that time... rlbrlblrblrlb!  Reset again and I'll do my best.";
    break;
    case 10:
    document.getElementById("chests").src = "static/closechests.png";
    document.getElementById("chestMessage").innerText = "I'm proud of you for making it this far, wouldn't it suck if this website was the gift? (oh shit why did I say that?!)  Okay this time I made it so only one of the chests is clickable, ";
    break;
    case 11:
    document.getElementById("chests").src = "static/closechests.png";
    document.getElementById("chests").classList.add("chestspin");
    document.getElementById("chestMessage").innerText = "What the fuck did you click!? Why are they spinning?! It's not easy setting all this up, I wish you would take this seriously.";
    break;
    case 12:
    document.getElementById("chests").src = "static/closechests.png";
    document.getElementById("chests").classList.remove("chestspin");
    document.getElementById("chests").classList.add("chestspindeluxe");
    document.getElementById("chestMessage").innerText = "Well, I hope you're happy there's no way the gift is going to survive, THAT!";
    break;
    case 13:
    document.getElementById("chests").src = "static/closechests.png";
    document.getElementById("chests").classList.remove("chestspindeluxe");
    document.getElementById("chestMessage").innerText = "Okay, okay, just please don't make it spin again.  This time I dare you to try to find a chest that DOESN'T have a prize!";
    break;
    case 14:
    document.getElementById("chests").src = "static/openchests.png";
    document.getElementById("chestMessage").innerText = "Oh my god you did it!  I never lost faith.  You persisted through this ordeal and you can finally claim your prize.  Get rid of these chests, and I'll get the prize.";
    break;
    case 15:
    document.getElementById("chests").src = "static/openchests.png";
    document.getElementById("chests").classList.add("chestspindeluxe");
    document.getElementById("chestMessage").innerText = "I leave for one second and... Never mind, it's your birthday so zap those chests and take a look at your surprise.";
    break;
    case 16:
    document.getElementById("chests").classList.remove("chestspindeluxe");
    document.getElementById("chests").classList.add("hide");
    document.getElementById("chestMessage").innerHTML = "~Happy Birthday to you!~<br>~Happy Birthday to you!~<br>~Happy Birthday dear Hannah my sister!~<br>~Happy Birthday to you!~<br> -From your loving brother JP(uncle pp)!<br> SCROLL DOWN";
    document.getElementById("rewardBox").classList.remove("hide");
    break;
    default:
    break;
    
  }
    
  
}