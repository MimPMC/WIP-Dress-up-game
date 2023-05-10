window.addEventListener("DOMContentLoaded", main);

let gameContainer = document.querySelector(".game-container");




function main() {
  loadDressupScene();
}

function loadMainMenu() {
  const gameTitle = document.createElement("h1");
  gameTitle.textContent = "Dress up!";
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
  gameContainer.style.backgroundImage = "url('./images/bedroom_pink.png')";

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
  eyes.src = "./images/Eyes/eyes1_1.png";
  gameContainer.appendChild(eyes);

  const eyebrows = document.createElement("img");
  eyebrows.classList = "body abs";
  eyebrows.src = "./images/Eyebrows/eyebrows1_1.png";
  gameContainer.appendChild(eyebrows);

  const mouth = document.createElement("img");
  mouth.classList = "body abs";
  mouth.src = "./images/Mouth/mouth1_1.png";
  gameContainer.appendChild(mouth);

  const hair = document.createElement("img");
  hair.classList = "body abs";
  hair.src = "./images/Hair/hair1_1.png";
  gameContainer.appendChild(hair);

  changeSkinTone(elementContainerLeft,body);
  changeEyeStyle(elementContainerLeft, eyes);
  changeHairStyle(elementContainerLeft, hair);
  changeTop(elementContainerLeft, top);
  changeBottom(elementContainerLeft, bottom);
  changeLips(elementContainerLeft,mouth)
}

function changeEyeStyle(elementContainerLeft, eyes) {

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
        eyes.src = "./images/Eyes/eyes1_1.png";
        return 1;
      case eyes2:
        eyes.src = "./images/Eyes/eyes2_1.png";
        return 2;
      case eyes3:
        eyes.src = "./images/Eyes/eyes3_1.png";
        return 3;
    }
  }

  /*const test = document.createElement('button')
  test.textContent = "test"
  gameContainer.appendChild(test)
  test.addEventListener("click", () => {
    console.log(eyestyle)
  });

  createEyeColorIcons(eyestyle)
  function createEyeColorIcons(eyestyle) {
    const eyeColorWrap = document.createElement("div");
    eyeColorWrap.className = "skincolorsWrap";
    elementContainerLeft.appendChild(eyeColorWrap);

    const eyeColorText = document.createElement("h1");
    eyeColorText.textContent = "Eyecolor";
    eyeColorText.className = "TypeHeadline skinToneText";
    eyeColorWrap.appendChild(eyeColorText);

    const eyeColorDiv = document.createElement("div");
    eyeColorDiv.className = "skincolorsDiv ";
    eyeColorWrap.appendChild(eyeColorDiv);

    const blueEyes = document.createElement("div");
    blueEyes.className = "eyes-sort";
    blueEyes.addEventListener("click", () => eyecolor = setEyeColor(eyestyle,blueEyes));
  
    const greenEyes = document.createElement("div");
    greenEyes.className = "eyes-sort";
    greenEyes.addEventListener("click", () => eyecolor = setEyeColor(eyestyle,blueEyes));
  
    const brownEyes = document.createElement("div");
    brownEyes.className = "eyes-sort";
    brownEyes.addEventListener("click", () => eyecolor = setEyeColor(eyestyle,blueEyes));
   

    eyeColorDiv.append(blueEyes, greenEyes, brownEyes);
    
  function setEyeColor(eyestyle, clickedElement) {
    console.log("hej")
    if (clickedElement === blueEyes) {
      eyes.src = `./images/Eyes/eyes${eyestyle}_6.png`;
    }
    else if (clickedElement === greenEyes) {
      eyes.src = `./images/eyes/eyes${eyestyle}_7.png`;
    }
    else if (clickedElement === brownEyes) {
      eyes.src = `./images/eyes/eyes${eyestyle}_8.png`;
    }
  }
  }
*/

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

function changeHairStyle(elementContainerLeft,hair) {
  const hairWrap = document.createElement("div");
  hairWrap.className = "skincolorsWrap";
  elementContainerLeft.appendChild(hairWrap);

  const skinToneText = document.createElement("h1");
  skinToneText.textContent = "Hairstyle";
  skinToneText.className = "TypeHeadline skinToneText";
  hairWrap.appendChild(skinToneText);

  const skincolorsDiv = document.createElement("div");
  skincolorsDiv.className = "skincolorsDiv";
  hairWrap.appendChild(skincolorsDiv);

  const hair1 = document.createElement("div");
  hair1.className = "eyes-sort";
  hair1.textContent = "1"
  hair1.addEventListener("click", () => setHairStyle(hair1, currentHairColor));

  const hair2 = document.createElement("div");
  hair2.className = "eyes-sort";
  hair2.textContent = "2"
  hair2.addEventListener("click", () => setHairStyle(hair2, currentHairColor));

  const hair3 = document.createElement("div");
  hair3.className = "eyes-sort ";
  hair3.textContent = "3"
  hair3.addEventListener("click", () => setHairStyle(hair3, currentHairColor));

  const hair4 = document.createElement("div");
  hair4.className = "eyes-sort ";
  hair4.textContent = "4"
  hair4.addEventListener("click", () => setHairStyle(hair4, currentHairColor));

  const hair5 = document.createElement("div");
  hair5.className = "eyes-sort ";
  hair5.textContent = "5"
  hair5.addEventListener("click", () => setHairStyle(hair5, currentHairColor));
 
  skincolorsDiv.append(
    hair1,
    hair2,
    hair3,
    hair4,
    hair5
  );
  let currentHairStyle = 1;
  let currentHairColor = "blonde";
  function setHairStyle(clickedElement, currentHairColor) {
    if (clickedElement === hair1) {
      if(currentHairColor ==="blonde") {
        hair.src = "./images/Hair/hair1_1.png";
        currentHairStyle = 1;
      } else if (currentHairColor ==="brown") {
        hair.src = "./images/Hair/hair1_5.png";
        currentHairStyle = 1;
      } else if (currentHairColor ==="black") {
        hair.src = "./images/Hair/hair1_7.png";
        currentHairStyle = 1;
      } 
    }
    if (clickedElement === hair2) {
      if(currentHairColor ==="blonde") {
        hair.src = "./images/Hair/hair2_1.png";
        currentHairStyle = 2;
      } else if (currentHairColor ==="brown") {
        hair.src = "./images/Hair/hair2_5.png";
        currentHairStyle = 2;
      } else if (currentHairColor ==="black") {
        hair.src = "./images/Hair/hair2_7.png";
        currentHairStyle = 2;
      }   
    }
    if (clickedElement === hair3) {
      if(currentHairColor ==="blonde") {
        hair.src = "./images/Hair/hair3_1.png";
        currentHairStyle = 3;
      } else if (currentHairColor ==="brown") {
        hair.src = "./images/Hair/hair3_5.png";
        currentHairStyle = 3;
      } else if (currentHairColor ==="black") {
        hair.src = "./images/Hair/hair3_7.png";
        currentHairStyle = 3;
      } 
     
    }
    if (clickedElement === hair4) {
      if(currentHairColor ==="blonde") {
        hair.src = "./images/Hair/hair4_1.png";
        currentHairStyle = 4;
      } else if (currentHairColor ==="brown") {
        hair.src = "./images/Hair/hair4_5.png";
        currentHairStyle = 4;
      } else if (currentHairColor ==="black") {
        hair.src = "./images/Hair/hair4_7.png";
        currentHairStyle = 4;
      } 
      
    }
    if (clickedElement === hair5) {
      if(currentHairColor ==="blonde") {
        hair.src = "./images/Hair/hair5_1.png";
        currentHairStyle = 5;
      } else if (currentHairColor ==="brown") {
        hair.src = "./images/Hair/hair5_5.png";
        currentHairStyle = 5;
      } else if (currentHairColor ==="black") {
        hair.src = "./images/Hair/hair5_7.png";
        currentHairStyle = 5;
      } 
    }
  }
  const hairColorsWrap = document.createElement("div");
  hairColorsWrap.className = "skincolorsWrap";
  elementContainerLeft.appendChild(hairColorsWrap);

  const hairColorText = document.createElement("h1");
  hairColorText.textContent = "Haircolor";
  hairColorText.className = "TypeHeadline skinToneText";
  hairColorsWrap.appendChild(hairColorText);

  const hairColorsDiv = document.createElement("div");
  hairColorsDiv.className = "skincolorsDiv";
  hairColorsWrap.appendChild(hairColorsDiv);

  

  const blondeHair = document.createElement("div");
  blondeHair.className = "eyes-sort";
  blondeHair.style.background = "lightyellow"
  blondeHair.addEventListener("click", () => setHairColor(currentHairStyle, "blonde"));

  const brownHair = document.createElement("div");
  brownHair.className = "eyes-sort";
  brownHair.style.background = "brown"
  brownHair.addEventListener("click", () => setHairColor( currentHairStyle, "brown"));

  const blackHair = document.createElement("div");
  blackHair.className = "eyes-sort ";
  blackHair.style.background = "black"
  blackHair.addEventListener("click", () => setHairColor(currentHairStyle, "black"));

  hairColorsDiv.append(
    blondeHair,
    brownHair,
    blackHair,
  );


  function setHairColor(hairStyle, chosenColor) {
    console.log(hairStyle, chosenColor)
    if (hairStyle === 1) {
      if(chosenColor === "blonde") {
        hair.src = "./images/Hair/hair1_1.png";
        currentHairColor = "blonde"
      } else if (chosenColor === "brown") {
        hair.src = "./images/Hair/hair1_5.png";
        currentHairColor = "brown"
      } else if (chosenColor === "black") {
        hair.src = "./images/Hair/hair1_7.png";
        currentHairColor = "black"
      }
    } else if (hairStyle === 2) {
      if(chosenColor === "blonde") {
        hair.src = "./images/Hair/hair2_1.png";
        currentHairColor = "blonde"
      } else if (chosenColor === "brown") {
        hair.src = "./images/Hair/hair2_5.png";
        currentHairColor = "brown"
      } else if (chosenColor === "black") {
        hair.src = "./images/Hair/hair2_7.png";
        currentHairColor = "black"
      }
    } else if (hairStyle === 3) {
      if(chosenColor === "blonde") {
        hair.src = "./images/Hair/hair3_1.png";
        currentHairColor = "blonde"
      } else if (chosenColor === "brown") {
        hair.src = "./images/Hair/hair3_5.png";
        currentHairColor = "brown"
      } else if (chosenColor === "black") {
        hair.src = "./images/Hair/hair3_7.png";
        currentHairColor = "black"
      }
    } else if (hairStyle === 4) {
      if(chosenColor === "blonde") {
        hair.src = "./images/Hair/hair4_1.png";
        currentHairColor = "blonde"
      } else if (chosenColor === "brown") {
        hair.src = "./images/Hair/hair4_5.png";
        currentHairColor = "brown"
      } else if (chosenColor === "black") {
        hair.src = "./images/Hair/hair4_7.png";
        currentHairColor = "black"
      }} else if (hairStyle === 5) {
        if(chosenColor === "blonde") {
          hair.src = "./images/Hair/hair5_1.png";
          currentHairColor = "blonde"
        } else if (chosenColor === "brown") {
          hair.src = "./images/Hair/hair5_5.png";
          currentHairColor = "brown"
        } else if (chosenColor === "black") {
          hair.src = "./images/Hair/hair5_7.png";
          currentHairColor = "black"
        }}
      
    // Add more conditions for other hair styles
  }
}

function changeTop(elementContainerLeft,top) {

  const hairWrap = document.createElement("div");
  hairWrap.className = "skincolorsWrap";
  elementContainerLeft.appendChild(hairWrap);

  const topText = document.createElement("h1");
  topText.textContent = "Top"
  topText.className = "TypeHeadline skinToneText";
  hairWrap.appendChild(topText);
  
  const skincolorsDiv = document.createElement("div");
  skincolorsDiv.className = "skincolorsDiv";
  hairWrap.appendChild(skincolorsDiv);

  const hair1 = document.createElement("div");
  hair1.className = "eyes-sort";
  hair1.textContent = "1"
  hair1.addEventListener("click", () => setHairStyle(hair1));

  const hair2 = document.createElement("div");
  hair2.className = "eyes-sort";
  hair2.textContent = "2"
  hair2.addEventListener("click", () => setHairStyle(hair2));

  const hair3 = document.createElement("div");
  hair3.className = "eyes-sort";
  hair3.textContent = "3"
  hair3.addEventListener("click", () => setHairStyle(hair3));

  const hair4 = document.createElement("div");
  hair4.className = "eyes-sort";
  hair4.textContent = "4"
  hair4.addEventListener("click", () => setHairStyle(hair4));

  const hair5 = document.createElement("div");
  hair5.className = "eyes-sort";
  hair5.textContent = "5"
  hair5.addEventListener("click", () => setHairStyle(hair5));

  skincolorsDiv.append(
    hair1,
    hair2,
    hair3,
    hair4,
    hair5
  );
  function setHairStyle(clickedElement) {
    if (clickedElement === hair1) {
      top.src = "./images/Tops/top1_1.png";
    }
    if (clickedElement === hair2) {
      top.src = "./images/Tops/top2_1.png";
    }
    if (clickedElement === hair3) {
      top.src = "./images/Tops/top3_1.png";
    }
    if (clickedElement === hair4) {
      top.src = "./images/Tops/top4_1.png";
    }
    if (clickedElement === hair5) {
      top.src = "./images/Tops/top5_1.png";
    }
  }
}

function changeBottom(elementContainerLeft,bottom) {

  const hairWrap = document.createElement("div");
  hairWrap.className = "skincolorsWrap";
  elementContainerLeft.appendChild(hairWrap);

  const topText = document.createElement("h1");
  topText.textContent = "Bottom"
  topText.className = "TypeHeadline skinToneText";
  hairWrap.appendChild(topText);
  
  const skincolorsDiv = document.createElement("div");
  skincolorsDiv.className = "skincolorsDiv";
  hairWrap.appendChild(skincolorsDiv);

  const hair1 = document.createElement("div");
  hair1.className = "eyes-sort";
  hair1.textContent = "1"
  hair1.addEventListener("click", () => setHairStyle(hair1));

  const hair2 = document.createElement("div");
  hair2.className = "eyes-sort";
  hair2.textContent = "2"
  hair2.addEventListener("click", () => setHairStyle(hair2));

  const hair3 = document.createElement("div");
  hair3.className = "eyes-sort";
  hair3.textContent = "3"
  hair3.addEventListener("click", () => setHairStyle(hair3));

  const hair4 = document.createElement("div");
  hair4.className = "eyes-sort";
  hair4.textContent = "4"
  hair4.addEventListener("click", () => setHairStyle(hair4));

  const hair5 = document.createElement("div");
  hair5.className = "eyes-sort";
  hair5.textContent = "5"
  hair5.addEventListener("click", () => setHairStyle(hair5));

  skincolorsDiv.append(
    hair1,
    hair2,
    hair3,
    hair4,
    hair5
  );
  function setHairStyle(clickedElement) {
    if (clickedElement === hair1) {
      bottom.src = "./images/Bottoms/bottom1_1.png";
    }
    if (clickedElement === hair2) {
      bottom.src = "./images/Bottoms/bottom2_1.png";
    }
    if (clickedElement === hair3) {
      bottom.src = "./images/Bottoms/bottom3_1.png";
    }
    if (clickedElement === hair4) {
      bottom.src = "./images/Bottoms/bottom1_2.png";
    }
    if (clickedElement === hair5) {
      bottom.src = "./images/Bottoms/bottom3_2.png";
    }
  }
}
function changeLips(elementContainerLeft,mouth) {

  const hairWrap = document.createElement("div");
  hairWrap.className = "skincolorsWrap";
  elementContainerLeft.appendChild(hairWrap);

  const topText = document.createElement("h1");
  topText.textContent = "Lipstick"
  topText.className = "TypeHeadline skinToneText";
  hairWrap.appendChild(topText);
  
  const skincolorsDiv = document.createElement("div");
  skincolorsDiv.className = "skincolorsDiv";
  hairWrap.appendChild(skincolorsDiv);

  const hair1 = document.createElement("div");
  hair1.className = "eyes-sort";
  hair1.id = "lip-1"
  hair1.addEventListener("click", () => setHairStyle(hair1));

  const hair2 = document.createElement("div");
  hair2.className = "eyes-sort";
  hair2.id = "lip-2"
  hair2.addEventListener("click", () => setHairStyle(hair2));

  const hair3 = document.createElement("div");
  hair3.className = "eyes-sort";
  hair3.id = "lip-3"
  hair3.addEventListener("click", () => setHairStyle(hair3));

  const hair4 = document.createElement("div");
  hair4.className = "eyes-sort";
  hair4.id = "lip-4"
  hair4.addEventListener("click", () => setHairStyle(hair4));

  const hair5 = document.createElement("div");
  hair5.className = "eyes-sort";
  hair5.id = "lip-5"
  hair5.addEventListener("click", () => setHairStyle(hair5));

  const hair6 = document.createElement("div");
  hair6.className = "eyes-sort";
  hair6.id = "lip-6"
  hair6.addEventListener("click", () => setHairStyle(hair6));

  skincolorsDiv.append(
    hair1,
    hair2,
    hair3,
    hair4,
    hair5,
    hair6
  );
  function setHairStyle(clickedElement) {
    if (clickedElement === hair1) {
      mouth.src = "./images/Mouth/mouth1_1.png";
    }
    if (clickedElement === hair2) {
      mouth.src = "./images/Mouth/mouth3_1.png";
    }
    if (clickedElement === hair3) {
      mouth.src = "./images/Mouth/mouth4_1.png";
    }
    if (clickedElement === hair4) {
      mouth.src = "./images/Mouth/mouth5_1.png";
    }
    if (clickedElement === hair5) {
      mouth.src = "./images/Mouth/mouth6_1.png";
    }
    if (clickedElement === hair6) {
      mouth.src = "./images/Mouth/mouth7_1.png";
    }
  }
  

}