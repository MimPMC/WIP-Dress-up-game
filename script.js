addEventListener('DOMContentLoaded',main)

function main() {
    loadMainMenu();
}



function loadMainMenu() {
    const gameContainer = document.querySelector('.game-container')


    const gameTitle = document.createElement('h1')
    gameTitle.textContent = "This is my new game"
    gameTitle.className = "game-title"
    gameContainer.appendChild(gameTitle)

    
}