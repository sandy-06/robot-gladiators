var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);


// fight function (now with parameter for enemy's name)
var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    //ask player if the'd like to fight of run
    var promptFight = window.prompt('Would you like to FIGHT of SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  }

  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

  // if player picks "skip" confirm and then stop the loop
  If (proptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var conrirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes(true), leave fight
    if (confirmSkip) {
      window.alert(payerName + ' has decided to skip this fight. Goodbye!');
      //subtract money from playerMoney for skipping
      playerMoney = playerMoney - 10;
      console.log("playerMoney", playermoney);
      break;
    }
  }

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {git
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerMoney = playerMoney - 2;
    }
    // if no (false), ask question again by running fight() again
    else {
      fight();
    }
    // if player did not chose 1 or 2 in prompt
  } else {
    window.alert("You need to pick a valid option. Try again!");
  }
};

// run fight function to start game
fight();