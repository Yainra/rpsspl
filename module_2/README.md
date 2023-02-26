**CHECKLIST FOR THE PROJECT**
**WILL USE STRIKETHROUGH AS I CLEAR A GIVEN POINT**

SOURCE: Use the code from our lectures as a starting point

Before you write any code, you should "sketch" the pseudo code and make a flowchart for how you plan to do the following alterations to the game.

There is a bug in the NPC code that selects it´s move, identify and fix the bug.
Make the game into "Rock Paper Scissors Spock Lizard"
Add a startup screen (i.e. don't go directly to play), the user should push a button to start play.
Do the necessary changes to support language change.
After a game, go back to the start-up screen
If you want a challenge (higher grade), try doing these things also:

1) On the startup screen give 3 choices 1p, 2p(hot-seat), change language
**Added 5 options to startupscreen, RPS, RPSSPL, HotSeat, language and quit**

2) Do the necessary changes to support 2p hot-seat play.
**HotSeat mode added**

3) Do the necessary changes to change language from the menu
**Done**

4) Add a splash screen.
**ASCI art counts, right?**

5) Your submission must be in the form of a Zip file with this internal structure
Working on the last touches of readme now, 11.49. 10 minutes before delivery is due.


14/2/23
//Splash screen and alternative way to code a 'menu'.

console.log(" ______   ______  ______ ")
console.log("/_____/\ /_____/\/_____/\ ")
console.log("\:::_ \ \\:::_ \ \::::_\/_ ")
console.log(" \:(_) ) )\:(_) \ \:\/___/\  ")
console.log("  \: __ `\ \: ___\/\_::._\:\  ")
console.log("   \ \ `\ \ \ \ \    /____\:\ ")
console.log("    \_\/ \_\/\_\/    \_____\/ ")


//Splash screen has to be coded like this
console.log(" ______   ______  ______ ")
console.log("/_____/\\\ /_____/\\\/_____/\\\ ")
console.log("\\\:::_ \\ \\\\:::_ \\\ \\\::::_\\\/_ ")
console.log(" \\\:(_) ) )\\\:(_) \\\ \\\:\\\/___/\  ")
console.log("  \\\: __ `\\\ \\\: ___\\\/\\\_::._\\\:\\\  ")
console.log("   \\\ \\\ `\\\ \\\ \\\ \\\ \\\    /____\\\:\\\ ")
console.log("    \\\_\\\/ \\\_\\\/\\\_\\\/    \_____\\\/ ")

The reasoning behind it is that I need to escape \. 


My first task is to translate and convert the code to English.
**done**

Problem one (1);
My translation / language change is very halfbaked, and I ran out of time to finish  it up properly, as messing with the object.keys took a lot of figuring out.
Game is fine in English, but only halfway translated to Norwegian.



Problem two (2);
I want to have the menu be 5 seperate entries, RPS, RPSSPL, HotSeat, language and quit. **done**



22/2/2023 (11:54)
Problem three (3):
The only part of the game that currently has a best of three is the hot seat mode.

Both RPS and RPSSPL just goes straight back to the menu as soon as a answer is given.




Potential fixes in my code?
Finish the translation to Norwegian
all around clarity in the console while playing the game is quite low, could be fixed with \n or something similar.

