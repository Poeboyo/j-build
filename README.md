# Fiercest Fighters Demo Build

## This is the experimental build of the Fiercest Fighters

This project was originally set to be built in react and was initially made in jQuery for testing and for time consumption put into styling the project versus styling individual components.

## How it's made

-The application starts out on the home page which on click will bring you to the character selection screen, where (obviously) you select a Character to fight for you and a second player.

```javascript
function setPlayerOne() {
  $("#firstChoice").text(`Choose: ${playerOne.name}`);
  $("#statsOne").text(
    `ATK: ${playerOne.stats.attack}  DEF: ${playerOne.stats.defense} SPD: ${playerOne.stats.speed}`
  );
  if (playerOne && playerTwo) {
    $("#battleButton").removeClass("disabled");
  }
}

function setPlayerTwo() {
  $("#secondChoice").text(`Choose: ${playerTwo.name}`);
  $("#statsTwo").text(
    `ATK: ${playerTwo.stats.attack}  DEF: ${playerTwo.stats.defense} SPD: ${playerTwo.stats.speed}`
  );
  if (playerOne && playerTwo) {
    $("#battleButton").removeClass("disabled");
  }
}
```

-After player selections have been made, this triggers the battle button to enable, allowing both players to begin their fight. Each Player picks and attack
-- A Standard Attack = Success Rate: 95%
-- A Devastating Strong Attack = Success Rate: 35%
-- Defense = Has a chance to Nullify or Reduce incoming Damage
-- A Counter, to Possibly Reverse an Enemy's Attack = Success Rate: 35%

-Each has a chance to hit and then a function is run to compare inputs and success rates of each chosen attack to replicate the outcome of the two Opponents Clashing.

```javascript
function damageStep(actionOne, actionTwo) {
    if (actionOne === "attack" && actionTwo === "attack") {
      doubleAttack(playerOne, playerTwo, "#healthOne", "#healthTwo");
      showAnimation("#animateAttackOne", 900);
      showAnimation("#animateAttackTwo", 900);
      enableOne();
    } else if (actionOne === "attack" && actionTwo === "strongAttack") {
      attackPlayer(playerOne, playerTwo, "#healthTwo");
      showAnimation("#animateAttackTwo", 900);
      strAttack(playerTwo, playerOne, "#healthOne");
      showAnimation("#animateStrongOne", 1400);
      enableOne();
    } else if (actionOne === "attack" && actionTwo === "defense") {
      defendSelf(playerOne, playerTwo, "#health2");
      showAnimation("#animateAttackTwo", 900);
      showAnimation("#animateDefendTwo", 1400);
      enableOne();
    } else if (actionOne === "attack" && actionTwo === "counter") {
      counter(playerOne, playerTwo, "#healthOne", "#healthTwo");
      showAnimation("#animateAttackTwo", 900);
      showAnimation("#animateCounterOne", 450);
      enableOne();
.... and so on
  }
```

- Also shown in the function above, battle animations will be displayed on hit and will use Audio samples to indicate a hit or a miss

![Gif of Attack Animation](https://media2.giphy.com/media/xUA7aXJY46jN2P6gGk/giphy.webp?cid=790b76118484a4d4514cc6f40274bd7130495a58111e7797&rid=giphy.webp)

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- Giphy Stickers
- Audio Samples
- Materialize CSS

## Difficulties and Learning

-The main difficulties that came with this project was making everything work in unison, it was simple to make the functions, although it was quite a few days to figure out HOW I wished for the game to play out and also some objects returning incorrect values that were applied when the damage step was calculated. This project is my main focus for now and just refining it to be a fun experince for nerds who would want to see their favorite characters clash from separate series.

## Future Plans

- [ ] Making the Application, Mobile Friendly (Scaling characters for mobile is tedious)
- [ ] Allowing Remote Play Via Bitly or a similar service
- [ ] Implementing a Remote Controller Package such as https://www.npmjs.com/package/gamecontroller.js
- [ ] Integrating a backend, allowing users create and share their characters and battle with others.
