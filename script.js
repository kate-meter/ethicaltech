/* .js files add interaction to your website */

var factList = [
  "Over 1/4 of adults report being online almost constantly. ", 
  "Teenagers ages 10-18 spend an average of more than 11 hours per day consuming electronic media. ",
  "One study found a 70% increase in self-reported depressive symptoms linked to social media use. ",
  "90% of American teens use or have used social media. "
];

var fact = document.getElementById("fact");
var button = document.getElementById("button");
var count = 0;

/*var displayName = document.getElementById("timeStatement");
var confessionButton = document.getElementById("getConfession");*/

//confessionButton.addEventListener("click", displayConfession);

button.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}

/*function displayConfession(){
  var text = document.getElementById("myText").value;
  displayName.innerHTML = text + " hours a day.";
}*/

