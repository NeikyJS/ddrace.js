# ddrace.js
Package for interact with DDNet API

Exemple how to use:
```js
let DDRaceNetwork = require('ddrace.js');
let DDNet = new DDRaceNetwork.DDNet();

async function findPlayer(name) {
    let user = await DDNet.searchplayer(name);
    let username = user.user.username;
    return username;
};

findPlayer('neiky').then(console.log);
```

Or find rank / map finished:
```js
let DDRaceNetwork = require('ddrace.js');
let DDNet = new DDRaceNetwork.DDNet();

async function getRankAndFinishedMap(name) {
    let user = await DDNet.searchplayer(name);
    let rank = user.rank;
    let finishedMaps = user.allFinsih;
    return {
        rank: rank,
        finishedMaps: finishedMaps,
    };
};

async function main() {
    let player = await getRankAndFinishedMap('neiky');
    console.log({
        rank: player.rank,
        finishedMaps: player.finishedMaps,
    });
};

main();
```

```
npm i ddrace.js
