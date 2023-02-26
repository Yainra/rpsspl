//#region
import * as readlinePromises from "node:readline/promises";
const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout
});
//#endregion

//Splash Screen!
console.log(" ______   ______  ______ ")
console.log("/_____/\\\ /_____/\\\/_____/\\\ ")
console.log("\\\:::_ \\ \\\\:::_ \\\ \\\::::_\\\/_ ")
console.log(" \\\:(_) ) )\\\:(_) \\\ \\\:\\\/___/\  ")
console.log("  \\\: __ `\\\ \\\: ___\\\/\\\_::._\\\:\\\  ")
console.log("   \\\ \\\ `\\\ \\\ \\\ \\\ \\\    /____\\\:\\\ ")
console.log("    \\\_\\\/ \\\_\\\/\\\_\\\/    \_____\\\/ ")



// ---- SETUP ----------------
const possibleInputsRPSSPL = {
  rock: {
    alt: ["rock", "r"],
    wins: ["scissors", "lizard"],
},
  paper: {
    alt: ["paper", "p"],
    wins: ["rock", "spock"],
},
  scissors: {
    alt: ["scissors", "x"],
    wins: ["paper", "lizard"],
},
  spock: {
    alt: ["spock", "s"],
    wins: ["scissors", "rock"],
},
  lizard: {
    alt: ["lizard", "l"],
    wins: ["paper", "spock"] 
  }
};

const possibleInputsRPS = {
  rock: {
    alt: ["rock", "r"],
    wins: ["scissors", "lizard"],
  },
  paper: {
    alt: ["paper", "p"],
    wins: ["rock", "spock"],
  },
  scissors: {
    alt: ["scissors", "x"],
    wins: ["paper", "lizard"],
  }
};
/* const possibleInputsShortHand = {
r: ["x", "l"],
p: ["r", "s"],
x: ["p", "l"],
s: ["x", "r"],
l: ["p", "s"],
};
*/

const legalLanguages = ["no", "en"];

const DICTIONARY = {
  en: {
    languageSelect: "Select your desired language Norwegian(no)/English(en)",
    tittleRPS: "Rock, Paper, Scissors!",
    tittleRPSSPL: "Rock, paper, scissors, spock and lizard!",
    choiseDescriptor: "Your choices are",
    whatYouChoose: "What do you choose?",
    aiLoss: "You must've cheated! It should'nt be possible for you to win against me!",
    aiWin: "Of course I won! I can read the future. You stood no chance old man!",
    tie: "Tied once more! We are at an impasse!",
    inputDescription: "Enter your choice",
    rock: "Rock",
    paper: "Paper",
    scissors: "Scissors",
    spock: "Spock",
    lizard: "Lizard",
  },

  no: {
    languageSelect: "Velg ditt ønskede språk Norsk(no),Engelsk(en)",
    tittleRPS: "Stein, Saks, Papir!",
    tittleRPSSPL: "Stein, Saks, Papir, Spock og Lizard",
    choiseDescriptorRPS: "Dine valge er",
    whatYouChoose: "Hva velger du?",
    aiLoss: "Du må ha jukset..! Det skal ikke være mulig for deg å vinne over meg!",
    aiWin: "Selvfølgelig tapte du! Du vil aldri vinne mot meg. Jeg kan se fremtiden!",
    tie: "Uavgjort igjen! Vi blir aldri ferdige slik!",
    inputDescription: "Skriv ditt valg",
    rock: "Stein",
    paper: "Papir",
    scissors: "Saks",
    spock: "Spock",
    lizard: "Lizard",
  }
};

let language = "en" 
let dictionary = DICTIONARY[language];
dictionary = DICTIONARY[language];



// ------- INTRODUCTION  ---------------

console.log(dictionary.tittleRPS);


// -------- functions -----------------
function log(text, isError) {
  if (!isError) {
    console.log(text);
  } else {
    console.error(text);
  }
}


async function chooseLanguage(legalOptions) {
  let language;
  do {
    language = await rl.question(`${dictionary.languageSelect}`);
    language = language.toLowerCase();
  } while (!legalOptions.includes(language));
  return language;
}

async function qualityChoices(prompt, legalOptions) {
  while (true) {
    const answer = await rl.question(prompt);
    if (legalOptions.includes(answer.toLowerCase())) {
      return answer.toLowerCase();
    } else {
      console.log("Invalid input. Try again.");
    }
  }
}

function aiChoosesAction(possibleActions) {
  const choices = Object.keys(possibleActions);
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


async function showmenu() {
  const legalChoices = ["1", "2", "3", "4", "5"];
  console.log("Please select an option:");
  console.log("1 - Game: Rock, paper and scissors");
  console.log("2 - Game: Rock, paper, scissors, spock and lizzard");
  console.log("3 - Game: Hot Seat (2 player mode)");
  console.log("4 - Language Options");
  console.log("5 - Quit game");
  let choice;
  do {
    choice = await qualityChoices (dictionary.inputDescription, legalChoices);
  } while (choice === null);
  return choice;
}


//Game RPS
async function playRockPaperScissors(possibleInputsRPS, dictionary, hotSeatMode = false) {
  
  if (hotSeatMode) {
    let player1Score = 0;
    let player2Score = 0;
    let roundCounter = 1;


    while (player1Score < 3 && player2Score < 3) {
      console.log(`round ${roundCounter}`)
      const player1Input = (await rl.question(`Player 1: ${dictionary.whatYouChoose}`)).toLowerCase();
      const player2Input = (await rl.question(`Player 2: ${dictionary.whatYouChoose}`)).toLowerCase();
      
    

      let player1 = Object.keys(possibleInputsRPS).find(key => possibleInputsRPS[key].alt.includes(player1Input.toLowerCase()));
      let player2 = Object.keys(possibleInputsRPS).find(key => possibleInputsRPS[key].alt.includes(player2Input.toLowerCase()));

      if (!player1 || !player2) {
        console.log("Invalid input. Try again.");
        continue;
      }

      

      if (player1 === player2) {
        console.log("It's a tie!");
      } else {
        const whatPlayer1WinsAgainst = possibleInputsRPS[player1].wins;
        const player1Victory = whatPlayer1WinsAgainst.includes(player2);
        
        if (player1Victory) {
          console.log('Player 1 wins!');
          player1Score++;
        } else {
          console.log('Player 2 wins!');
          player2Score++;
        }
        
        console.log(`Score: Player 1 - ${player1Score} / Player 2 - ${player2Score}`);
      }
      roundCounter++;
    }
  } else {


  //present choices
  let choices = '';
  for (const key of Object.keys(possibleInputsRPS)) {
    if (choices.length > 0) {
      choices += ', ';
    }
    choices += dictionary[key] + ' (' + possibleInputsRPS[key].alt.join(', ') + ')';
}
console.log(dictionary.choiseDescriptor + choices)

//player plays
let playersSelection = (await rl.question(dictionary.whatYouChoose)).toLowerCase();
let playerChoice;
for (const key of Object.keys(possibleInputsRPS)) {
  if (possibleInputsRPS[key].alt.includes(playersSelection))  {
    playerChoice = key;
    break;
  }
}
if (!playerChoice)  {
  console.log("invalid input. Try again.");
  return;

}

// AI plays
let npcChoiceRPS = aiChoosesAction(possibleInputsRPS);
console.log(`NPC ${dictionary[npcChoiceRPS]}`);

//evaluate
if (npcChoiceRPS === playerChoice) {
    console.log(dictionary.tie);
  } else {
    const whatIWinAgainst = possibleInputsRPS[playerChoice].wins;
    const playerVictory = whatIWinAgainst.includes(npcChoiceRPS);

    if (playerVictory)  {
      console.log(dictionary.aiLoss);
    } else {
      console.log(dictionary.aiWin)
    }
  }
}
};






// Main function
(async () => {
  console.log("Welcome to Rock, Paper, Scissors!");

  let language = await chooseLanguage(legalLanguages);
  let dictionary = DICTIONARY[language];

  while (true) {
    const choice = await showmenu();

    switch (choice) {
      case "1":
        await playRockPaperScissors(possibleInputsRPS, dictionary)
        break;
      case "2":
        await playRockPaperScissors(possibleInputsRPSSPL, dictionary);
        break;
      case "3":
        await playRockPaperScissors(possibleInputsRPS, dictionary, true)
        break;
      case "4":
        language = await chooseLanguage(legalLanguages);
        dictionary = DICTIONARY[language];
        break;
      case "5":
        process.exit();
        break;
      default:
        console.log("Invalid choice.");
        break;
    }
  }
})();
 