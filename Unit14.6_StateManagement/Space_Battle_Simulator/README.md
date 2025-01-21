# State Management Exercise

## Space Battle Simulator 🎇

In this exercise, we will practice state management and event handling in React by creating a thrilling Space Battle Simulator. 💥

Your mission is to create a simple interactive turn-based 🎰 space battle simulator where each fire ☄️ affects the health ❤️‍🩹 of both the player's and the enemy's spacecraft. The simulator will track the health points of both parties, dynamically updating after each attack based on random damage values. Additionally, the simulator is responsible for determining the battle's outcome—win, lose, or draw—based on the remaining health points. Moreover, when the battle ends, a restart feature will be available to initiate another round of interstellar combat. 🛸

## Tasks 📋

1. **Set Initial Health**: Begin your game by setting both the player's and the enemy's health to 100. These health values will change based on gameplay actions.
2. **Track Game Status**: Monitor the state of the game, distinguishing between active play and the end of the game. Conclude the game with a status of win, loss, or draw, determined by comparing health points.
3. **Gameplay Buttons**: Display a "Fire" button for players to use during the game. Replace it with a "Restart" button once the game concludes.
4. **Attack Phase**: With each press of the "Fire" button:
    - Determine random damage amounts for both the player and the enemy, sticking to a range provided via props. Ensure these props have default values.
    - Deduct the appropriate damage from each party's health.
    - Check if this round of attacks ends the game, either by reducing one party's health to 0 or both, and then update the game's status accordingly (win, loss, or draw).
5. **End of Game**: Upon game conclusion:
    - Display a specific message based on the outcome: a congratulatory note for winning, a message of commiseration for losing, or a remark on the stalemate for a draw.
    - Hide the "Fire" button and show a "Restart" button to allow players to initiate a new game.
6. **Game Reset**: Clicking the "Restart" button should revert all game elements to their starting conditions, ready for a new match.