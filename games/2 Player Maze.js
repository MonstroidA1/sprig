/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 2 Player Maze
@author: MonstroidA
@tags: [2player]
@addedOn: 2024-00-00
*/

const player1 = "f"
const player2 = "s"
const wall1 = "w"
const wall2 = "r"
const goal1 = "g"
const goal2 = "t"

setSolids([
  player1,
  player2,
  wall1,
  wall2
]);

setLegend(
  [player1, bitmap`
......55555.....
.....5555555....
....555555555...
....550555055...
....555555555...
....550555055...
....555000555...
.....5555555....
......55555.....
.......555......
....555555555...
.......555......
.......555......
.......555......
......55.55.....
.....55...55....` ],
  [player2, bitmap`
......88888.....
.....8888888....
....888888888...
....88H888H88...
....888888888...
....88H888H88...
....888HHH888...
.....8888888....
......88888.....
.......888......
....888888888...
.......888......
.......888......
.......888......
......88.88.....
.....88...88....`],
  [wall1, bitmap`
1111L111111L1111
1111L111111L1111
1111L111111L1111
LLLLLLLLLLLLLLLL
111111L111111L11
111111L111111L11
111111L111111L11
LLLLLLLLLLLLLLLL
11L111111L111111
11L111111L111111
11L111111L111111
LLLLLLLLLLLLLLLL
1111L111111L1111
1111L111111L1111
1111L111111L1111
LLLLLLLLLLLLLLLL`],
  [wall2, bitmap`
1111L11F111L1F11
1111L11F111L1F11
1111L1F1F11LF111
LLLLLLLLFLLFLLLL
111111L11FFF1L11
111111L1111F1L11
111111L111111L11
LLLLLLLLLLLLLLLL
F1L111111L111111
1FF111111L1111F1
11LF1F111L11111F
LLFFFLLLLLLLLFFL
FF11L111111FF111
1111L11111FL1F11
1111L111111F1111
LLLLLLLLLLLLFLLL`],
  [goal1, bitmap`
................
................
.....7777777....
....77......7...
....7.......7...
..77........7...
..7.........7...
..7.........7...
..7........77...
..7........7....
...7......7.....
....77..777.....
......77........
................
................
................`],
  [goal2, bitmap`
................
................
......HHHHHHH...
....HHH......HH.
...H..........HH
...H...........H
...H...........H
...H..........HH
...H..........H.
..H..........H..
..H........HH...
..H.......H.....
..H......H......
..HH..HHH.......
....HHH.........
................`])

let level=0;
const levels = [
  map`
fwt
.w.
grs`,
  map`
f.wt.
w.rw.
..w..
.rw.w
.gw.s`,
  map`
f..www...
ww.wrw.w.
gw.ww..w.
.w..w.w..
..w.w.wtw
.rw.w..ww
....ww..s`,
  map`
.....w....s
.w.r.r.wwww
.w.w.w.....
.wgw.wwwww.
.wrw.rw....
.ww..wwww.w
.ww.ww.....
.....w.www.
wwww.r..t..
...w.w.www.
fr...w.....`,
  map`
gwwwrw.wt..w...
.......rww.w.w.
..wr.www.r.w.w.
w....w.w...w.w.
.rww...w.w.w.w.
.....w.w.w...r.
.www.w.w.rww.w.
....r..w.....w.
wrw..wwr.......
....w..ww.wwwr.
.ww.w.ww.......
.ww.r.ww.rwwww.
.r....ww.....w.
.w.wrwwwwwrw.w.
......frs......`,
  map`
.wwrw.......ww.
...wwwwwwrw..w.
rw..........wr.
...wrw.wwww....
.r.....ww.wwwr.
.wwwww.rw...gw.
...w...ww.wwww.
fw...wwww......
rwwwwwrwwwwwwrw
swwr....w......
...w.www..wwww.
wr.w.w.w.wtwwr.
ww.w...r...w...
...w.w.wwww..w.
.w.w.w......ww.
.r.w.w.www.www.
.....wwwwr.....`,
  map`
.......wrfws.........
.ww.ww..w.wwrwwwwwww.
.r..wrr.w.w..........
.w.wwww...w.wwwwrwwww
...www..wwr..........
ww.rw..w..wwrwwwwwwr.
....w.w..ww..........
wr.ww...www..wrwwwwww
.....wwwwwwr.........
r....wwwr...wwwrwwww.
..w.ww...g.t...w...r.
.wr..w.rw...ww.w.w.w.
..ww.w...rwwww.w.r.w.
w.w..www.wwwrw.w.w.w.
..w.wr...ww....w.w.r.
.wr..w.wwwr.wwww.w.w.
..ww.w...ww....w.w.w.
r.w..www.wwwrw.w.w.w.
..w.ww...rw....w.r.w.
.rww...wwww.wrww.w.w.
.....wwrwww......w...`
];

setMap(levels[level]);

setPushables({
  [ player1 ]: []
})

onInput("a", () => {
getFirst(player1).x -= 1
})

onInput("d", () => {
getFirst(player1).x += 1
})

onInput("w", () => {
getFirst(player1).y -= 1
})

onInput("s", () => {
getFirst(player1).y += 1
})
onInput("j", () => {
getFirst(player2).x -= 1
})

onInput("l", () => {
getFirst(player2).x += 1
})

onInput("k", () => {
getFirst(player2).y += 1
})

onInput("i", () => {
getFirst(player2).y -= 1
})

afterInput(() => {
  
})

afterInput(() => {
  const targetNumberPlayer1 = tilesWith(goal1).length;
  const numberCoveredPlayer1 = tilesWith(goal1, player1).length;

  const targetNumberPlayer2 = tilesWith(goal2).length;
  const numberCoveredPlayer2 = tilesWith(goal2, player2).length;

  if (numberCoveredPlayer1 === targetNumberPlayer1 && numberCoveredPlayer2 === targetNumberPlayer2) {
    level++; // Increment level
    const currentLevel = levels[level];
    if (currentLevel !== undefined) {
      setMap(currentLevel);
    } else {
      addText("YOU WIN!", { y: 4, color: color`3` }); // Updated to use a valid color sprite type, such as `3`
    }
  }
});

const BackgroundMusic = tune`
300: D5~300 + A5^300 + G4-300 + C4/300,
300: A5^300 + C4/300,
300: D5~300 + B5^300 + F4-300 + C4/300 + F5^300,
300: C5~300 + A5^300,
300: A5^300 + G4-300 + C4/300,
300: D5~300 + G5^300 + C4/300,
300: A5^300 + F4-300 + C4/300,
300: D5~300 + A5^300,
300: C5~300 + B5^300 + G4-300 + C4/300 + F5^300,
300: A5^300 + C4/300,
300: D5~300 + A5^300 + F4-300 + C4/300,
300: G5^300,
300: D5~300 + A5^300 + G4-300 + C4/300,
300: C5~300 + A5^300 + C4/300,
300: B5^300 + F4-300 + C4/300 + F5^300,
300: D5~300 + A5^300,
300: A5^300 + G4-300 + C4/300,
300: D5~300 + G5^300 + C4/300,
300: C5~300 + A5^300 + F4-300 + C4/300,
300: A5^300,
300: D5~300 + B5^300 + G4-300 + C4/300 + F5^300,
300: A5^300 + C4/300,
300: D5~300 + A5^300 + F4-300 + C4/300,
300: C5~300 + G5^300,
300: A5^300 + G4-300 + C4/300,
300: D5~300 + A5^300 + C4/300,
300: B5^300 + F4-300 + C4/300 + F5^300,
300: D5~300 + A5^300,
300: C5~300 + A5^300 + G4-300 + C4/300,
300: G5^300 + C4/300,
300: D5~300 + A5^300 + F4-300 + C4/300,
300: A5^300`
const playback = playTune(BackgroundMusic, Infinity)