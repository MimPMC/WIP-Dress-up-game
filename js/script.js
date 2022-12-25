addEventListener('DOMContentLoaded',main)

function main() {
    loadMainMenu();
}



function loadMainMenu() {
    const gameContainer = document.querySelector('.game-container');

    const bgPic = document.createElement('img')
    bgPic.className = "bgpic"
    bgPic.src = "./images/room-bg.jpg"
    gameContainer.appendChild(bgPic)


    const gameTitle = document.createElement('h1')
    gameTitle.textContent = "Gametitle"
    gameTitle.className = "game-title abs"
    gameContainer.appendChild(gameTitle)

    const gameStartButton = document.createElement('button')
    gameStartButton.textContent = "Start"
    gameStartButton.className = "game-start btn abs"
    gameContainer.appendChild(gameStartButton)

    
}