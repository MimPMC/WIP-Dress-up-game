window.addEventListener("DOMContentLoaded", main);

let gameContainer = document.querySelector(".game-container");

function main() {
  loadDressupScene();
}

function loadMainMenu() {
  const gameTitle = document.createElement("h1");
  gameTitle.textContent = "Gametitle";
  gameTitle.className = "game-title abs";
  gameContainer.appendChild(gameTitle);

  const gameStartButton = document.createElement("button");
  gameStartButton.textContent = "Start";
  gameStartButton.className = "game-start btn abs";
  gameContainer.appendChild(gameStartButton, gameTitle);

  gameStartButton.addEventListener("click", () =>
    loadDressupScene(gameContainer)
  );
}

function loadDressupScene() {
  gameContainer.innerHTML = "";
  gameContainer.style.backgroundImage = "url('./images/room-bg.jpg')";

  const elementContainerLeft = document.createElement("div");
  elementContainerLeft.className = "elementContainerLeft";
  gameContainer.appendChild(elementContainerLeft);

  renderCharacter(elementContainerLeft)
}

function renderCharacter(elementContainerLeft) {
  
  const body = document.createElement("img");
  body.classList = "body abs";
  body.src = "./images/skincolors/base1.png";
  gameContainer.appendChild(body);

  const bottom = document.createElement("img");
  bottom.classList = "body abs";
  bottom.src = "./images/Bottoms/bottom1_1.png";
  gameContainer.appendChild(bottom);

  const top = document.createElement("img");
  top.classList = "body abs";
  top.src = "./images/Tops/top1_1.png";
  gameContainer.appendChild(top);

  const eyes = document.createElement("img");
  eyes.classList = "body abs";
  eyes.src = "./images/eyes/eyes1_1.png";
  gameContainer.appendChild(eyes);

  const eyebrows = document.createElement("img");
  eyebrows.classList = "body abs";
  eyebrows.src = "./images/eyebrows/eyebrows1_1.png";
  gameContainer.appendChild(eyebrows);

  const mouth = document.createElement("img");
  mouth.classList = "body abs";
  mouth.src = "./images/mouth/mouth1_1.png";
  gameContainer.appendChild(mouth);

  const hair = document.createElement("img");
  hair.classList = "body abs";
  hair.src = "./images/hair/hair1_1.png";
  gameContainer.appendChild(hair);

  changeSkinTone(elementContainerLeft,body);
  changeEyeStyle(elementContainerLeft, eyes);
}

function changeEyeStyle(elementContainerLeft, eyes) {
  let eyestyle = 1
  
  const eyesWrap = document.createElement("div");
  eyesWrap.className = "skincolorsWrap";
  elementContainerLeft.appendChild(eyesWrap);

  const eyeText = document.createElement("h1");
  eyeText.textContent = "Eyes";
  eyeText.className = "TypeHeadline skinToneText";
  eyesWrap.appendChild(eyeText);

  const eyeDiv = document.createElement("div");
  eyeDiv.className = "skincolorsDiv ";
  eyesWrap.appendChild(eyeDiv);

  const eyes1 = document.createElement("div");
  eyes1.className = "eyes-sort";
  eyes1.addEventListener("click", () => eyestyle = setEyeNumber(eyes1));
  
  const eyes2 = document.createElement("div");
  eyes2.className = "eyes-sort";
  eyes2.addEventListener("click", () => eyestyle = setEyeNumber(eyes2));
  
  const eyes3 = document.createElement("div");
  eyes3.className = "eyes-sort";
  eyes3.addEventListener("click", () => eyestyle = setEyeNumber(eyes3));

  eyeDiv.append(eyes1, eyes2, eyes3);

  const eye1Thumbnail = document.createElement("img");
  eye1Thumbnail.className = "mini-pic";
  eye1Thumbnail.src = "./images/eyeThumbnail/eye1.png";
  eyes1.appendChild(eye1Thumbnail);

  const eye2Thumbnail = document.createElement("img");
  eye2Thumbnail.className = "mini-pic";
  eye2Thumbnail.src = "./images/eyeThumbnail/eye2.png";
  eyes2.appendChild(eye2Thumbnail);

  const eye3Thumbnail = document.createElement("img");
  eye3Thumbnail.className = "mini-pic";
  eye3Thumbnail.src = "./images/eyeThumbnail/eye3.png";
  eyes3.appendChild(eye3Thumbnail);

  function setEyeNumber(clickedElement) {
    switch (clickedElement) {
      case eyes1:
        eyes.src = "./images/eyes/eyes1_1.png";
        return 1;
      case eyes2:
        eyes.src = "./images/eyes/eyes2_1.png";
        return 2;
      case eyes3:
        eyes.src = "./images/eyes/eyes3_1.png";
        return 3;
    }
  }

  const test = document.createElement('button')
  test.textContent = "test"
  gameContainer.appendChild(test)
  test.addEventListener("click", () => {
    console.log(eyestyle)
  });

}

function changeSkinTone(elementContainerLeft,body) {
  const skincolorsWrap = document.createElement("div");
  skincolorsWrap.className = "skincolorsWrap";
  elementContainerLeft.appendChild(skincolorsWrap);

  const skinToneText = document.createElement("h1");
  skinToneText.textContent = "Skintone";
  skinToneText.className = "TypeHeadline skinToneText";
  skincolorsWrap.appendChild(skinToneText);

  const skincolorsDiv = document.createElement("div");
  skincolorsDiv.className = "skincolorsDiv";
  skincolorsWrap.appendChild(skincolorsDiv);

  const skinColor1 = document.createElement("img");
  skinColor1.className = "skin-color  ";
  skinColor1.src = "./images/skincolors/skincolor1.png";
  skinColor1.addEventListener("click", () => setSkinTone(skinColor1));

  const skinColor2 = document.createElement("img");
  skinColor2.className = "skin-color";
  skinColor2.src = "./images/skincolors/skincolor2.png";
  skinColor2.addEventListener("click", () => setSkinTone(skinColor2));

  const skinColor3 = document.createElement("img");
  skinColor3.className = "skin-color ";
  skinColor3.src = "./images/skincolors/skincolor3.png";
  skinColor3.addEventListener("click", () => setSkinTone(skinColor3));

  const skinColor4 = document.createElement("img");
  skinColor4.className = "skin-color ";
  skinColor4.src = "./images/skincolors/skincolor4.png";
  skinColor4.addEventListener("click", () => setSkinTone(skinColor4));

  const skinColor5 = document.createElement("img");
  skinColor5.className = "skin-color ";
  skinColor5.src = "./images/skincolors/skincolor5.png";
  skinColor5.addEventListener("click", () => setSkinTone(skinColor5));

  skincolorsDiv.append(
    skinColor1,
    skinColor2,
    skinColor3,
    skinColor4,
    skinColor5
  );
  function setSkinTone(clickedElement) {
    if (clickedElement === skinColor1) {
      body.src = "./images/skincolors/base1.png";
    }
    if (clickedElement === skinColor2) {
      body.src = "./images/skincolors/base2.png";
    }
    if (clickedElement === skinColor3) {
      body.src = "./images/skincolors/base3.png";
    }
    if (clickedElement === skinColor4) {
      body.src = "./images/skincolors/base4.png";
    }
    if (clickedElement === skinColor5) {
      body.src = "./images/skincolors/base5.png";
    }
  }
}
