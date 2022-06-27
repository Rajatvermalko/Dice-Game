
var n1=Math.floor((Math.random() * 6) + 1);
var num1="images/dice"+n1+".png";
document.querySelectorAll("img")[0].setAttribute("src",num1);

var randomNumber1=Math.floor(Math.random()*6)+1;        // 1-6
var randomDiceImage="dice"+randomNumber1+".png";         //dice1.png dice6.png
var randomImageSource="images/"+randomDiceImage;        //images/dicel.png images/did
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource);


 