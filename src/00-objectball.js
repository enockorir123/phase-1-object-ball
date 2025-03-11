function gameObject() {
    return {
        home: { 
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        }, 

        away: {
            teamName: "Charlotte Hornets",  
            colors: ["Turquoise", "Purple"],  
            players: {
                "Jeff Adrien": {  
                    number: 4,
                    shoe: 18,
                    points: 14,
                    rebounds: 2,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {  // Fixed semicolon
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

console.log(gameObject());
//Writing the Function numPointsScored
function numPointsScored(playerName) {
    let game = gameObject();  
    
    
    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;
    }

    
    if (game.away.players[playerName]) {
        return game.away.players[playerName].points;
    }
}

console.log(numPointsScored("Ben Gordon")); //33
console.log(numPointsScored("Brook Lopez")); //17

//Writing the Function shoeSize
function shoeSize(playerName) {
    let game = gameObject(); 

    for (let team in game) {
        let players = game[team].players;
        
        if (players[playerName]) { 
            return players[playerName].shoe; 
        }
    }
    return "Player not found"; 
}

console.log(shoeSize("Ben Gordon")); //15
console.log(shoeSize("Brook Lopez")); //17


//Writing the Function teamColors
function teamColors(teamName) {
    let game = gameObject(); 

    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
    return "Team not found";
}

console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]
console.log(teamColors("Charlotte Hornets")); // ["Turquoise", "Purple"]

//Writing the Function teamNames
function teamNames() {
    let game = gameObject(); 
    return [game.home.teamName, game.away.teamName];
}

console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]

//Writing the Function playerNumbers
function playerNumbers(teamName){
    const game = gameObject();

    for (let team in game){
        if (game[team].teamName === teamName){
            return Object.values(game[team].players).map(player => player.number);
        }
    }
}

console.log(playerNumbers("Brooklyn Nets")); // [0, 30, 11, 1, 31]  
console.log(playerNumbers("Charlotte Hornets")); // [4, 0, 2, 8, 33]    

//Writing the Function playerStats
function playerStats(playerName){
    const game = gameObject();

    for (let team in game){
        if (game[team].players[playerName]){
            return game[team].players[playerName];
        }
    }
}

console.log(playerStats("Ben Gordon")); 
console.log(playerStats("Mason Plumlee"));

//Writing the Function bigShoeRebounds
function bigShoeRebounds(){
    const game = gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;

    for (let team in game) {
        for (let player in game[team].players) {
            let playerStats = game[team].players[player];

            if (playerStats.shoe > maxShoeSize) {
                maxShoeSize = playerStats.shoe;
                rebounds = playerStats.rebounds;
            }
        }
    }
    return rebounds;
}

console.log(bigShoeRebounds()); 

//Writing the Function mostPointsScored
function mostPointsScored(){
    const game = gameObject();
    let maxPoints = 0;
    let topScorer = "";
    for (let team in game){
        for (let player in game[team].players){
            let playerStats = game[team].players[player];

            if (playerStats.points > maxPoints){
                maxPoints = playerStats.points;
                topScorer = player;
            }
        }
    }
    return topScorer;
}

console.log(mostPointsScored());

//Writing the Function winningTeam
function winningTeam(){
    const game = gameObject();
    let scores = {};

    for (let team in game){
        let totalPoints = 0;

        for (let player in game[team].players){
            totalPoints += game[team].players[player].points;
        }
        scores[game[team].teamName] = totalPoints;
    }
    return scores[game.home.teamName] > scores[game.away.teamName] ? game.home.teamName : game.away.teamName;
}

console.log(winningTeam());

//Writing the function playerWithLongestName
function playerWithLongestName(){
    const game = gameObject();
    let longestName = "";

    for (let team in game){
        for (let player in game[team].players){
            if (player.length > longestName.length){
                longestName = player;
            }
        }
    }
    return longestName;
}

console.log(playerWithLongestName());

//Writing the function doesLongNameStealATon
function doesLongNameStealATon(){
    const game = gameObject();
    const longestName = playerWithLongestName();
    let mostSteals = 0;
    let topStealer = "";

    for (let team in game){
        for (let player in game[team].players){
            let steals = game[team].players[player].steals;
            if (steals > mostSteals){
                maxSteals = steals;
                topStealer = player;
            }
        }
    }
    return longestName === topStealer;
}

console.log(doesLongNameStealATon());