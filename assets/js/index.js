document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".carousel");
  M.Carousel.init(elems, {});
});

let playerOne;
let playerTwo;

let chisaki = {
  name: "Chisaki Kai",
  img:
    "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/4/4d/Kai_Chisaki_Anime_Action.png/revision/latest/scale-to-width-down/202?cb=20191030164007",
  stats: {
    health: 100,
    attack: 15,
    defense: 5,
    evasion: 15,
    speed: 5
  }
};

let endeavor = {
  name: "Endeavor",
  img:
    "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/2/22/Endeavor_Anime_Profile.png/revision/latest/scale-to-width-down/239?cb=20170906213725",
  stats: { health: 100, attack: 15, defense: 5, evasion: 10, speed: 5 }
};

let allMight = {
  name: "All Might",
  img:
    "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/55/All_Might_Hero_Form_Full_Body.png/revision/latest/scale-to-width-down/311?cb=20190129015644",
  stats: {
    health: 100,
    attack: 20,
    defense: 10,
    evasion: 10,
    speed: 10
  }
};

let allForOne = {
  name: "All For One",
  img:
    "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/32/All_For_One_Profile.png/revision/latest/scale-to-width-down/243?cb=20180528014920",
  stats: {
    health: 100,
    attack: 20,
    defense: 5,
    evasion: 5,
    speed: 10
  }
};

let triss = {
  name: "Triss Merigold",
  img:
    "https://vignette.wikia.nocookie.net/witcher/images/2/27/Triss-TW3-new-render.png/revision/latest/scale-to-width-down/313?cb=20160402173701",
  stats: {
    health: 100,
    attack: 10,
    defense: 10,
    evasion: 10,
    speed: 10
  }
};

let deku = {
  name: "Izuku Midoriya",
  img:
    "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/f/f7/Izuku_Midoriya_Hero_Costume_Action_Pose.png/revision/latest/scale-to-width-down/350?cb=20190909030259",
  stats: { health: 100, attack: 10, defense: 10, evasion: 10, speed: 15 }
};

let link = {
  name: "Link",
  img:
    "https://vignette.wikia.nocookie.net/zelda/images/5/57/Breath_of_the_Wild_Artwork_Link_%28Official_Artwork%29.png/revision/latest/scale-to-width-down/350?cb=20160623185226",
  stats: {
    health: 100,
    attack: 15,
    defense: 5,
    evasion: 10,
    speed: 10
  }
};

let hollow = {
  name: "Hollow Knight",
  img:
    "https://vignette.wikia.nocookie.net/hollowknight/images/2/27/The_Knight.png/revision/latest/scale-to-width-down/146?cb=20170712213446",
  stats: {
    health: 100,
    attack: 10,
    defense: 5,
    evasion: 10,
    speed: 20
  }
};

let goku = {
  name: "Son Goku",
  img:
    "https://vignette.wikia.nocookie.net/p__/images/2/22/Dragon-Ball-Goku-PNG-Free-Download.png/revision/latest/scale-to-width-down/347?cb=20181207162901&path-prefix=protagonist",
  stats: {
    health: 100,
    attack: 20,
    defense: 10,
    evasion: 0,
    speed: 10
  }
};

let waluigi = {
  name: "Waluigi",
  img:
    "https://vignette.wikia.nocookie.net/mario/images/6/62/840px-SuperMarioParty_Waluigi.png/revision/latest/scale-to-width-down/310?cb=20190519205517",
  stats: {
    health: 100,
    attack: 20,
    defense: 5,
    evasion: 20,
    speed: 10
  }
};

function setPlayerOne() {
  $("#firstChoice").text("Choose: " + playerOne.name);
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

$("#chisakiOne").on("click", function() {
  playerOne = chisaki;
  setPlayerOne();
  imgSwap(playerOne, playerTwo);
});
$("#endeavorOne").on("click", function() {
  playerOne = endeavor;
  setPlayerOne();
  imgSwap(playerOne, playerTwo);
});
$("#dekuOne").on("click", function() {
  playerOne = deku;
  setPlayerOne();
  imgSwap(playerOne, playerTwo);
});
$("#trissOne").on("click", function() {
  playerOne = triss;
  setPlayerOne();
  imgSwap(playerOne, playerTwo);
});
$("#allForOneOne").on("click", function() {
  playerOne = allForOne;
  setPlayerOne();
  imgSwap(playerOne, playerTwo);
});
$("#allmightOne").on("click", function() {
  playerOne = allMight;
  setPlayerOne();
  imgSwap(playerOne, playerTwo);
});
$("#linkOne").on("click", function() {
  playerOne = link;
  setPlayerOne();
  imgSwap(playerOne, playerTwo);
});
$("#gokuOne").on("click", function() {
  playerOne = goku;
  setPlayerOne();
  imgSwap(playerOne, playerTwo);
});
$("#waluigiOne").on("click", function() {
  playerOne = waluigi;
  setPlayerOne();
  imgSwap(playerOne, playerTwo);
});
$("#hollowOne").on("click", function() {
  playerOne = hollow;
  setPlayerOne();
  imgSwap(playerOne, playerTwo);
});
$("#chisakiTwo").on("click", function() {
  playerTwo = chisaki;
  setPlayerTwo();
  imgSwap(playerOne, playerTwo);
});

$("#endeavorTwo").on("click", function() {
  playerTwo = endeavor;
  setPlayerTwo();
  imgSwap(playerOne, playerTwo);
});
$("#dekuTwo").on("click", function() {
  playerTwo = deku;
  setPlayerTwo();
  imgSwap(playerOne, playerTwo);
});
$("#trissTwo").on("click", function() {
  playerTwo = triss;
  setPlayerTwo();
  imgSwap(playerOne, playerTwo);
});
$("#allForOneTwo").on("click", function() {
  playerTwo = allForOne;
  setPlayerTwo();
  imgSwap(playerOne, playerTwo);
});
$("#allmightTwo").on("click", function() {
  playerTwo = allMight;
  setPlayerTwo();
  imgSwap(playerOne, playerTwo);
});
$("#linkTwo").on("click", function() {
  playerTwo = link;
  setPlayerTwo();
  imgSwap(playerOne, playerTwo);
});
$("#gokuTwo").on("click", function() {
  playerTwo = goku;
  setPlayerTwo();
  imgSwap(playerOne, playerTwo);
});
$("#waluigiTwo").on("click", function() {
  playerTwo = waluigi;
  setPlayerTwo();
  imgSwap(playerOne, playerTwo);
});
$("#hollowTwo").on("click", function() {
  playerTwo = hollow;
  setPlayerTwo();
  imgSwap(playerOne, playerTwo);
});

//Allows User to Make a Selection
function battle(playerOne, playerTwo) {
  //Applies "Attack" to Player One's Action
  $("#attackOne").on("click", function() {
    actionOne = "attack";
    disableOne();
    enableTwo();
  });

  //Applies "Attack" to Player Two's Action
  $("#attackTwo").on("click", function() {
    actionTwo = "attack";
    disableTwo();
    damageStep(actionOne, actionTwo);
  });

  //Applies "Strong Attack" to Player One's Action
  $("#strAttackOne").on("click", function() {
    actionOne = "strongAttack";
    disableOne();
    enableTwo();
  });

  //Applies "Strong Attack" to Player Two's Action
  $("#strAttackTwo").on("click", function() {
    actionTwo = "strongAttack";
    disableTwo();
    damageStep(actionOne, actionTwo);
  });

  //Applies "Defend" to Player One's Action
  $("#defendOne").on("click", function() {
    actionOne = "defense";
    disableOne();
    enableTwo();
  });

  //Applies "Defend" to Player Two's Action
  $("#defendTwo").on("click", function() {
    actionTwo = "defense";
    disableTwo();
    damageStep(actionOne, actionTwo);
  });

  //Applies "Counter" to Player One's Action
  $("#counterOne").on("click", function() {
    actionOne = "counter";
    disableOne();
    enableTwo();
  });

  //Applies "Counter" to Player Two's Action
  $("#counterTwo").on("click", function() {
    actionTwo = "counter";
    disableTwo();
    damageStep(actionOne, actionTwo);
  });

  //Function to Simulate a Heavy attack with a lower chance of success
  function strAttack(playerOne, playerTwo, id) {
    let victimName = playerTwo.name;
    let attackerName = playerOne.name;
    let randomNum = Math.floor(1 + Math.random() * 50);
    let defense = playerTwo.stats.defense / 2;
    let attack = playerOne.stats.attack + 7;
    let damage = attack - defense;

    if (randomNum >= 35) {
      playerTwo.stats.health = playerTwo.stats.health - damage;
      $(id).attr("value", playerTwo.stats.health);
      $("#battleLog").append(`<p> ${attackerName} smashed ${victimName}!</p>`);
      playNoise("#strongNoise");
    } else {
      $("#battleLog").append(`<p>${attackerName} Missed!</p>`);
      $(id).attr("value", playerTwo.stats.health);
    }
    $(id).attr("value", playerTwo.stats.health);

    if (playerTwo.stats.health <= 0) {
      $("#battleLog").append(
        `<p>${victimName} Has Feinted From Their Wounds!</p>`
      );
      playerTwo.stats.health = 0;
      knockout();
    }
  }

  //Simulates Player Two defending from a Strong Attack
  function defendSelfStr(playerOne, playerTwo, id) {
    let victimName = playerTwo.name;
    let attackerName = playerOne.name;
    let randomNum = Math.floor(1 + Math.random() * 50);
    let defense = playerTwo.stats.defense / 2 + 5;
    let attack = playerOne.stats.attack + 7;
    let damage = attack - defense;
    let health = playerTwo.stats.health;

    if (randomNum >= 35) {
      playerTwo.stats.health = health - damage;
      $(id).attr("value", playerTwo.stats.health);
      $("#battleLog").append(
        `<p>${attackerName} Smashed through ${victimName}'s Defenses!</p>`
      );
      playNoise("#strongNoise");
      playNoise("#shieldNoise");
    } else {
      $("#battleLog").append(`<p>${attackerName} Missed!</p>`);
      $(id).attr("value", playerTwo.stats.health);
      playNoise("#shieldNoise");
    }
    if (playerTwo.stats.health <= 0) {
      $("#battleLog").append(
        `<p>${victimName} Has Feinted From Their Wounds!</p>`
      );
      playerTwo.stats.health = 0;
      knockout();
    }
  }

  //Simulates an Attack from Player One
  function attackPlayer(playerOne, playerTwo, id) {
    let attackerName = playerOne.name;
    let victimName = playerTwo.name;

    let defense = playerTwo.stats.defense / 2;
    let attack = playerOne.stats.attack;
    let health = playerTwo.stats.health;
    let damage = attack - defense;

    playerTwo.stats.health = health - damage;
    playNoise("#hitNoise");

    if (playerTwo.stats.health <= 0) {
      $("#battleLog").append(
        `<p>${victimName} Has Feinted From Their Wounds!</p>`
      );
      playerTwo.stats.health = 0;
      knockout();
    }

    $("#battleLog").append(
      `<p>${attackerName} Threw Strikes at ${victimName}!</p>`
    );
    $(id).attr("value", playerTwo.stats.health);
  }

  //Function for a Player to Dampen the Blow of a Regular or Strong Attack
  function defendSelf(playerOne, playerTwo, id) {
    let victimName = playerTwo.name;
    let attackerName = playerOne.name;

    let attack = playerOne.stats.attack;
    let defense = playerTwo.stats.defense / 2 + 5;
    let health = playerTwo.stats.health;
    let damage = attack + defense;

    playerTwo.stats.health = health - damage;
    $("#battleLog").append(
      `<p>${attackerName} Threw Strikes at ${victimName}'s Defenses!</p>`
    );
    playNoise("#hitNoise");
    playNoise("#shieldNoise");

    if (playerTwo.stats.health <= 0) {
      $("#battleLog").append(
        `<p>${victimName} Has Feinted From Their Wounds!</p>`
      );
      playerTwo.stats.health = 0;
      knockout();
    }

    $(id).attr("value", playerTwo.stats.health);
  }
  //Yeet the Skeet ...... ya..... and i cannot stress this enough..... YEET
  function counter(playerOne, playerTwo, id, id2) {
    let attackerName = playerOne.name;
    let victimName = playerTwo.name;

    let attack = playerOne.stats.attack;
    let health = playerTwo.stats.health;
    let damage = attack;

    let randomNum = Math.floor(1 + Math.random() * 50);

    if (randomNum >= 30) {
      playerOne.stats.health = playerOne.stats.health - damage;

      $(id).attr("value", playerOne.stats.health);

      $("#battleLog").append(
        `<p>Counter Successful from ${playerTwo.name}! They now suffer an injury</p>`
      );
      playNoise("#counterNoise");
    } else {
      playerTwo.stats.health = health - damage;
      $(id2).attr("value", playerTwo.stats.health);
      $("#battleLog").append(
        `<p>Counter Unsuccessful from ${playerTwo.name}!</p>`
      );
      playNoise("#hitNoise");
    }

    if (playerTwo.stats.health <= 0) {
      $("#battleLog").append(
        `<p>${victimName} Has Feinted From Their Wounds!</p>`
      );
      playerTwo.stats.health = 0;
      knockout();

      $(id2).attr("value", playerTwo.stats.health);
    } else if (playerOne.stats.health <= 0) {
      $("#battleLog").append(
        `<p>${attackerName} Has Feinted From Their Wounds!</p>`
      );
      playerOne.stats.health = 0;
      $(id).attr("value", playerOne.stats.health);
      knockout();
    }
  }

  function strCounter(playerOne, playerTwo, id, id2) {
    let attackerName = playerOne.name;
    let victimName = playerTwo.name;

    let attack = playerOne.stats.attack + 5;
    let defense = playerTwo.stats.defense / 2;
    let health = playerTwo.stats.health;
    let health2 = playerOne.stats.health;
    let damage = attack - defense;

    let randomNum = Math.floor(1 + Math.random() * 50);
    if (randomNum >= 35) {
      playerOne.stats.health = health2 - damage;
      $(id).attr("value", playerOne.stats.health);

      $("#battleLog").append(
        `<p>${playerTwo.name} Returned The Strong Attack To Sender!</p>`
      );
      playNoise("#counterNoise");
    } else {
      playerTwo.stats.health = health - damage;
      $(id2).attr("value", playerTwo.stats.health);
      $("#battleLog").append(
        `<p>Counter Unsuccessful from ${playerTwo.name}! They were smashed!</p>`
      );
      playNoise("#strongNoise");
    }

    if (playerTwo.stats.health <= 0) {
      $("#battleLog").append(
        `<p>${victimName} Has Feinted From Their Wounds!</p>`
      );
      playerTwo.stats.health = 0;
      knockout();

      $(id2).attr("value", playerTwo.stats.health);
    } else if (playerOne.stats.health <= 0) {
      $("#battleLog").append(
        `<p>${attackerName} Has Feinted From Their Wounds!</p>`
      );
      playerOne.stats.health = 0;
      knockout();

      $(id).attr("value", playerOne.stats.health);
    }
  }

  function doubleDefense(playerOne, playerTwo) {
    let defenderOne = playerOne.name;
    let defenderTwo = playerTwo.name;
    $("#battleLog").append(
      `<p>${defenderOne} and ${defenderTwo} Raise Their Fists in Defense!</p>`
    );
    playNoise("#shieldNoise");
    playNoise("#shieldNoise");
  }

  function doubleCounter(playerOne, playerTwo) {
    let counterOne = playerOne.name;
    let counterTwo = playerTwo.name;
    $("#battleLog").append(
      `<p>${counterOne} and ${counterTwo} Both Prepared To Redirect An Attack But ... Nothing Happened!</p>`
    );
  }

  function doubleAttack(playerOne, playerTwo, id, id2) {
    let p1 = playerOne.name;
    let p2 = playerTwo.name;

    let defense1 = playerTwo.stats.defense / 2;
    let attack1 = playerOne.stats.attack;
    let health1 = playerOne.stats.health;
    let defense2 = playerOne.stats.defense / 2;
    let attack2 = playerTwo.stats.attack;
    let health2 = playerTwo.stats.health;
    let damage1 = attack2 - defense1;
    let damage2 = attack1 - defense2;

    playerTwo.stats.health = health2 - damage1;
    playerOne.stats.health = health1 - damage2;
    playNoise("#hitNoise");
    playNoise("#hitNoise");

    if (playerTwo.stats.health <= 0) {
      $("#battleLog").append(`<p>${p2} Has Feinted From Their Wounds!</p>`);
      playerTwo.stats.health = 0;
      $(id2).attr("value", playerTwo.stats.health);
      knockout();
    } else if (playerOne.stats.health <= 0) {
      playerOne.stats.health = 0;
      $("#battleLog").append(`<p>${p1} Has Feinted From Their Wounds!</p>`);
      $(id).attr("value", playerOne.stats.health);
      knockout();
    }
    $(id2).attr("value", playerTwo.stats.health);
    $(id).attr("value", playerOne.stats.health);
    $("#battleLog").append(`<p>${p1} and ${p2} Traded Blows!</p>`);
  }

  function defendCounter(playerOne, playerTwo) {
    let defender = playerOne.name;
    let counter = playerTwo.name;
    $("#battleLog").append(
      `<p>${counter} Prepared To Redirect An Attack But ... ${defender} Raised Their Fists in Defense!</p>`
    );
    playNoise("#shieldNoise");
  }
  //Stores Player One's Action
  let actionOne;
  //Stores Player Two's Action
  let actionTwo;

  //Takes in decided actions and spits back a result from the altercation
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
    } else if (actionOne === "defense" && actionTwo === "attack") {
      defendSelf(playerTwo, playerOne, "#healthOne");
      showAnimation("#animateDefendOne", 1400);
      showAnimation("#animateAttackOne", 900);
      enableOne();
    } else if (actionOne === "defense" && actionTwo === "strongAttack") {
      defendSelfStr(playerTwo, playerOne, "#healthOne");
      showAnimation("#animateDefendOne", 1400);
      showAnimation("#animateStrongOne", 1400);

      enableOne();
    } else if (actionOne === "defense" && actionTwo === "defense") {
      doubleDefense(playerOne, playerTwo);
      showAnimation("#animateDefendOne", 1400);
      showAnimation("#animateDefendTwo", 1400);
      enableOne();
    } else if (actionOne === "defense" && actionTwo === "counter") {
      defendCounter(playerOne, playerTwo);
      showAnimation("#animateDefendOne", 1400);

      enableOne();
    } else if (actionOne === "strongAttack" && actionTwo === "attack") {
      attackPlayer(playerTwo, playerOne, "#healthOne");
      showAnimation("#animateStrongTwo", 1400);
      showAnimation("#animateAttackOne", 900);
      strAttack(playerOne, playerTwo, "#healthTwo");
      enableOne();
    } else if (actionOne === "strongAttack" && actionTwo === "defense") {
      defendSelfStr(playerOne, playerTwo, "#healthTwo");
      showAnimation("#animateStrongTwo", 1400);
      showAnimation("#animateDefendTwo", 1400);

      enableOne();
    } else if (actionOne === "strongAttack" && actionTwo === "strongAttack") {
      strAttack(playerOne, playerTwo, "#healthTwo");
      strAttack(playerTwo, playerOne, "#healthOne");
      showAnimation("#animateStrongTwo", 1400);
      showAnimation("#animateStrongOne", 1400);
      enableOne();
    } else if (actionOne === "strongAttack" && actionTwo === "counter") {
      strCounter(playerOne, playerTwo, "#healthOne", "#healthTwo");
      showAnimation("#animateStrongTwo", 1400);
      showAnimation("#animateStrongCounterOne", 1000);

      enableOne();
    } else if (actionOne === "counter" && actionTwo === "attack") {
      counter(playerTwo, playerOne, "#healthTwo", "#healthOne");
      showAnimation("#animateAttackOne", 900);
      showAnimation("#animateCounterTwo", 450);
      enableOne();
    } else if (actionOne === "counter" && actionTwo === "strongAttack") {
      strCounter(playerTwo, playerOne, "#healthTwo", "#healthOne");
      showAnimation("#animateStrongCounterTwo", 1000);
      showAnimation("#animateStrongOne", 1400);
      enableOne();
    } else if (actionOne === "counter" && actionTwo === "defense") {
      defendCounter(playerTwo, playerOne);
      showAnimation("#animateDefendTwo", 1500);

      enableOne();
    } else if (actionOne === "counter" && actionTwo === "counter") {
      doubleCounter(playerOne, playerTwo);
      enableOne();
    }
  }
  disableTwo();
}

//Disables Player Twos Buttons
function disableTwo() {
  $("#attackTwo").prop("disabled", true);
  $("#strAttackTwo").prop("disabled", true);
  $("#defendTwo").prop("disabled", true);
  $("#counterTwo").prop("disabled", true);
}

//Disables Player Ones Buttons
function disableOne() {
  $("#attackOne").prop("disabled", true);
  $("#strAttackOne").prop("disabled", true);
  $("#defendOne").prop("disabled", true);
  $("#counterOne").prop("disabled", true);
}

//Enables Player One Buttons
function enableOne() {
  $("#attackOne").prop("disabled", false);
  $("#strAttackOne").prop("disabled", false);
  $("#defendOne").prop("disabled", false);
  $("#counterOne").prop("disabled", false);

  //Stores Player One's Action
  actionOne = "";
  //Stores Player Two's Action
  actionTwo = "";
}

//Enables Player Two Buttons
function enableTwo() {
  $("#attackTwo").prop("disabled", false);
  $("#strAttackTwo").prop("disabled", false);
  $("#defendTwo").prop("disabled", false);
  $("#counterTwo").prop("disabled", false);
}

function imgSwap(playerOne, playerTwo) {
  $("#playerOne").attr("src", playerOne.img);
  $("#playerTwo").attr("src", playerTwo.img);
}

$("#battleButton").on("click", function() {
  $("#battleArea").removeClass("hide");
  battle(playerOne, playerTwo);
  $("#battleButton").addClass("disabled");
  killInstance(battle);
});

$("#rematch").on("click", function() {
  playerOne.stats.health = 100;
  playerTwo.stats.health = 100;
  $("#healthTwo").attr("value", playerTwo.stats.health);
  $("#healthOne").attr("value", playerOne.stats.health);
  $("#battleLog").empty();
  $("#battleLog").append("<h3>BATTLE LOG</h3>");
  $("#game-end").addClass("hide");
  enableOne();
});

$("#reselect").on("click", function() {
  playerOne.stats.health = 100;
  playerTwo.stats.health = 100;
  $("#healthTwo").attr("value", playerTwo.stats.health);
  $("#healthOne").attr("value", playerOne.stats.health);
  $("#battleLog").empty();
  $("#battleLog").append("<h3>BATTLE LOG</h3>");
  $("#game-end").addClass("hide");
  $("#battleArea").addClass("hide");
  playerOne = undefined;
  playerTwo = undefined;
  enableOne();
});

function showAnimation(id, time) {
  $(id).removeClass("hide");
  setTimeout(function() {
    $(id)
      .addClass("hide")
      .data("active", false);
  }, time);
}

function playNoise(id) {
  $(id)
    .get(0)
    .play();
}
function knockout() {
  $("#game-end").removeClass("hide");
  disableOne();
}

function killInstance(func) {
  setTimeout(function() {
    $(func).data("active", false);
  }, 10);
}
