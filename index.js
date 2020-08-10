function playfunction(){
  var n1=prompt("Enter Player 1 name");
  var n3="🚩 "+ n1 +" wins!"
  var n2=prompt("Enter player 2 name");
  var n4="🚩 "+ n2 +" wins!"
  var randomNumber1=(Math.floor(Math.random()*6))+1;
  var randomNumber2=(Math.floor(Math.random()*6))+1;

  var randomImage1="images/dice"+randomNumber1+".png";
  var randomImage2="images/dice"+randomNumber2+".png";

document.querySelector(".img1").src=randomImage1;
document.querySelector(".img2").src=randomImage2;

document.querySelector(".p1").textContent=n1;
document.querySelector(".p2").textContent=n2;
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent=n3;
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").textContent=n4;
}
else{
  document.querySelector("h1").textContent="🚩 It's a draw";
}
}
function refreshPage(){
   window.location.reload();
}
