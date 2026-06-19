"use strict";

// function myFunction(v, w, x, y, z) {
//   console.log(v)
//   console.log(w)
//   console.log(x)
//   console.log(y)
//   console.log(z)
// }
// const args = [0, 1];
// console.log(myFunction(-1, ...args, 2, ...[3]));

// function myBio (firstName, lastName, ...otherInfo){
//   console.log(otherInfo)
// }

// myBio("Sohil", "Kareliya", "abc", "def", "ghi");

// const myText = ""; // An empty string (which is also a falsy value)

// const notFalsyText = myText || "Hello world";
// console.log(notFalsyText); // Hello world

// const preservingFalsy = myText ?? "Hi neighborhood";
// console.log(preservingFalsy); // '' (as myText is neither undefined nor null)

const game = {
  team1: "teamA",
  team2: "teamB",
  players: [
    [
      "tp10",
      "tp11",
      "tp12",
      "tp13",
      "tp14",
      "tp15",
      "tp16",
      "tp17",
      "tp18",
      "tp19",
      "tp11",
    ],
    [
      "tp20",
      "tp21",
      "tp22",
      "tp23",
      "tp24",
      "tp25",
      "tp26",
      "tp27",
      "tp28",
      "tp29",
      "tp21",
    ],
  ],
  score: "4 : 0",
  scored: ["tp13", "tp12", "tp15", "tp17"],
  date: "June 19th, 2026",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//first of all we destructured this array in two parts players1 and players2
const [players1, players2] = game.players;
console.log(`This the list of team 1 players ${players1}, 
This is the list of team 2 players ${players2}.`);

//now we create goalkeeper and other remaining players
const [goalKeeper, ...fieldPlayers] = players1; //here we used the rest syntax
console.log(
  `Goalkeeper is ${goalKeeper} and other field players ${fieldPlayers}`,
);

//now we create one variable for all players of the both team
const allPlayers = [...players1, ...players2]; //here we use the spread operator to take all players
console.log(allPlayers);

//final players because team1 used this substitute players
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//variable for odds
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//players who goal
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

// printGoals("tp13", "tp12", "tp15", "tp17");
// printGoals("tp13", "tp12");
printGoals(...game.scored);

//we have to print most likely which team is going to win , lower odds team is going to win
team1 < team2 && console.log("Team 1 is more likely to win...");
team2 < team1 && console.log("Team 2 is more likely to win...");

const orderSet = new Set([
  "order1",
  "order1",
  "order2",
  "order3",
  "order4",
  "order4",
]);

console.log(orderSet.size);

console.log("--------Map----------");

const map = new Map();
map.set("Pizza", "Italian");
map.set(1, "one");

map
  .set("categories", ["italian", "vegetarian", "organic"])
  .set("open", 11)
  .set("close", 12)
  .set(true, "we are open")
  .set(false, "we are closed");

console.log(map.get("categories"));
console.log(map.get(false));
console.log(map.get("close"));

console.log("===========Football game===============");

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// creating the array for different game events without duplicates
const events = [...new Set(gameEvents.values())];
console.log(events);

//delete the 64 minute's event
gameEvents.delete(64);
console.log(gameEvents);

//9 minutes
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`,
);
const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`,
);

for (const [key, values] of gameEvents) {
  const half = key <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${key}: ${values}`);
}
