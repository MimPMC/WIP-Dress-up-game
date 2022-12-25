window.addEventListener('DOMContentLoaded',main)


function main() {
    let gameContainer = document.querySelector('.game-container');
    loadDressupScene(gameContainer);
}

function loadMainMenu() {
    
   
    const gameTitle = document.createElement('h1');
    gameTitle.textContent = "Gametitle";
    gameTitle.className = "game-title abs";
    gameContainer.appendChild(gameTitle)

    const gameStartButton = document.createElement('button');
    gameStartButton.textContent = "Start";
    gameStartButton.className = "game-start btn abs";
    gameContainer.appendChild( gameStartButton, gameTitle);

    gameStartButton.addEventListener('click', () => loadDressupScene(gameContainer));   
}

function loadDressupScene(gameContainer) {
    gameContainer.innerHTML = ""
    gameContainer.style.backgroundImage = "url('./images/room-bg.jpg')";

    const body = document.createElement('img');
    body.classList = "body abs";
    body.src = "./images/skincolors/base1.png";
    gameContainer.appendChild(body);
    
    createSkincolorButtons();
    
    function createSkincolorButtons() {
      const skincolorsDiv = document.createElement("div");
      skincolorsDiv.className = "skincolorsDiv abs";
      gameContainer.appendChild(skincolorsDiv);
    
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
    
      skincolorsDiv.append(skinColor1, skinColor2, skinColor3, skinColor4, skinColor5);

      function setSkinTone(clickedElement) {
        if (clickedElement === skinColor2) {
          body.src = "./images/skincolors/base2.png";
        }
      }
    }






    
}