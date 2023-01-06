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
}

class Sprite {
    constructor() {
        
    }
}