var randomVaribale1 = Math.floor(Math.random()*6)+1;
var randomImage = "dice" +randomVaribale1+ ".png";
var randomImageSource =  randomImage;
var x =document.querySelectorAll("img")[0];
x.setAttribute('src',randomImageSource);

var randomVaribale2 = Math.floor(Math.random()*6)+1;
var randomImage2 = "dice" +randomVaribale2+ ".png";
var randomImageSource2 =  randomImage2;
var y = document.querySelectorAll("img")[1];
y.setAttribute('src', randomImageSource2 );


if(randomVaribale1 > randomVaribale2)
{
  document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if( randomVaribale2 > randomVaribale1)
{
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else
{
    document.querySelector("h1").innerHTML = "Draw";
}
