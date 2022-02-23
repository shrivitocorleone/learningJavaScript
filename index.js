var randomNumber1 = Math.floor((Math.random() * 6)) + 1; //generate dice number 1-6
var randomImageSource = "images/dice" + randomNumber1 + ".png"; //image source
var Image1 = document.querySelectorAll("img")[0]; //find the first img
Image1.setAttribute("src", randomImageSource); //change it

//2nd img
var randomNumber2 = Math.floor((Math.random() * 6)) + 1; //generate dice number 1-6
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //image source
var Image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2)
{
  document.querySelectorAll("h1")[1].textContent = "Player 2, you suck 🥱";
}
else if (randomNumber1 == randomNumber2) {
  document.querySelectorAll("h1")[1].textContent = "Wow what are the odds! (like 1/36)";
}

else {
    document.querySelectorAll("h1")[1].textContent = "Player 1, you suck 🥱";
}
