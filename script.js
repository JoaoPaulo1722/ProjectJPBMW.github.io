var redBtn = document.getElementById("red");
var blueBtn = document.getElementById("blue");
var blackBtn = document.getElementById("black");
var bike = document.getElementById("bike");

redBtn.onclick = function () {
  bike.style.backgroundImage = "url(Images/BMW1.png)";
};

blueBtn.onclick = function () {
  bike.style.backgroundImage = "url(Images/BMW2.png)";
};
blackBtn.onclick = function () {
  bike.style.backgroundImage = "url(Images/BMW3.png)";
};