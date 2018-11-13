var yVel = [1, 1, 1];
var dVel = [-1, -1, 1];
var jVel = [-1, 1, -1];
var aVel = [1, -1, -1];

function onLoad() {
  changeColors();
}

function changeColors() {  
  changeColor("youtube");
  changeColor("discord");
  changeColor("josh-youtube");
  changeColor("about");
  setTimeout(changeColors, 23);
}

function changeColor(id) {
  var youtube = document.getElementById(id);
  var bc = youtube.style.backgroundColor;
  bc = bc.replace("(", "");
  bc = bc.replace(")", "");
  bc = bc.replace("rgb", "");
  var n = bc.split(", ");
  var t = [parseInt(n[0]), parseInt(n[1]), parseInt(n[2])];
  if (id == "youtube") {
    rVel = yVel[0];
    gVel = yVel[1];
    bVel = yVel[2];
  }
  
  if (id == "discord") {
    rVel = dVel[0];
    gVel = dVel[1];
    bVel = dVel[2];
  }
  
  if (id == "josh-youtube") {
    rVel = jVel[0];
    gVel = jVel[1];
    bVel = jVel[2];
  }

  if (Math.random() > 0.5) {
    if (t[0] < 255 && t[0] > 0) {
      t[0] += rVel;
    } else if (t[0] >= 255) {
      rVel = -1;
      t[0] += rVel;
    } else {
      rVel = 1;
      t[0] += rVel;
    }
  }

  if (Math.random() > 0.37) {
    if (t[1] < 255 && t[1] > 0) {
      t[1] += gVel;
    } else if (t[1] >= 255) {
      gVel = -1;
      t[1] += gVel;
    } else {
      gVel = 1;
      t[1] += gVel;
    }
  }

  if (Math.random() > 0.4) {
    if (t[2] != 255 && t[2] > 0) {
      t[2] += bVel;
    } else if (t[2] >= 255) {
      bVel = -1;
      t[2] += bVel;
    } else {
      bVel = 1;
      t[2] += bVel;
    }
  }

  youtube.style.backgroundColor =
    "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")";
  
  if (id == "youtube") {
    yVel[0] = rVel;
    yVel[1] = gVel;
    yVel[2] = bVel;
  }
  
  if (id == "discord") {
    dVel[0] = rVel;
    dVel[1] = gVel;
    dVel[2] = bVel;
  }
  
  if (id == "josh-youtube") {
    jVel[0] = rVel;
    jVel[1] = gVel;
    jVel[2] = bVel;
  }
}