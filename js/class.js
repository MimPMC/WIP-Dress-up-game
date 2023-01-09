let gameContainer = document.querySelector(".game-container");

class Game {
    constructor(container) {
        this.container = container
    }
    loadMainMenu() {
        const gameTitle = document.createElement("h1");
        gameTitle.textContent = "Gametitle";
        gameTitle.className = "game-title abs";
        this.container.appendChild(gameTitle);
    
        const gameStartButton = document.createElement("button");
        gameStartButton.textContent = "Start";
        gameStartButton.className = "game-start btn abs";
        this.container.appendChild(gameStartButton, gameTitle);
    
        gameStartButton.addEventListener("click", () => this.loadDressupScene());
      }
    loadDressupScene() {
        this.container.innerHTML = "";
        this.container.style.backgroundImage = "url('./images/room-bg.jpg')";

        const elementContainerLeft = document.createElement("div");
        elementContainerLeft.className = "elementContainerLeft";
        this.container.appendChild(elementContainerLeft);

        this.renderCharacter(elementContainerLeft)
    }
    renderCharacter(elementContainerLeft) {
    const body = document.createElement("img");
    body.classList = "body abs";
    body.src = "./images/skincolors/base1.png";
    this.container.appendChild(body);

    const bottom = document.createElement("img");
    bottom.classList = "body abs";
    bottom.src = "./images/Bottoms/bottom1_1.png";
    this.container.appendChild(bottom);

    const top = document.createElement("img");
    top.classList = "body abs";
    top.src = "./images/Tops/top1_1.png";
    this.container.appendChild(top);

    const eyes = document.createElement("img");
    eyes.classList = "body abs";
    eyes.src = "./images/eyes/eyes1_1.png";
    this.container.appendChild(eyes);

    const eyebrows = document.createElement("img");
    eyebrows.classList = "body abs";
    eyebrows.src = "./images/eyebrows/eyebrows1_1.png";
    this.container.appendChild(eyebrows);

    const mouth = document.createElement("img");
    mouth.classList = "body abs";
    mouth.src = "./images/mouth/mouth1_1.png";
    this.container.appendChild(mouth);

    const hair = document.createElement("img");
    hair.classList = "body abs";
    hair.src = "./images/hair/hair1_1.png";
    this.container.appendChild(hair);

    this.changeSkinTone(elementContainerLeft,body);
    this.changeEyeStyle(elementContainerLeft, eyes);
  }
}



class Sprite {
    constructor(element, src, className, parent) {
      this.element = element;
      this.src = src;
      this.className = className
      this.parent = parent
      this.appendChild(parent)
    }
  
    render() {
      const imgElement = document.createElement("img");
      imgElement.src = this.src;

    }
}
 const bodySprite = new Sprite(gameContainer, "./images/skincolors/base1.png", "abs", );
 bodySprite.render();