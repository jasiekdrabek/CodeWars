// Texas Hold'em is a Poker variant in which each player is given two "hole cards". Players then proceed to make a series of bets while five "community cards" are dealt. If there are more than one player remaining when the betting stops, a showdown takes place in which players reveal their cards. Each player makes the best poker hand possible using five of the seven available cards (community cards + the player's hole cards).

// Possible hands are, in descending order of value:

// Straight-flush (five consecutive ranks of the same suit). Higher rank is better.
// Four-of-a-kind (four cards with the same rank). Tiebreaker is first the rank, then the rank of the remaining card.
// Full house (three cards with the same rank, two with another). Tiebreaker is first the rank of the three cards, then rank of the pair.
// Flush (five cards of the same suit). Higher ranks are better, compared from high to low rank.
// Straight (five consecutive ranks). Higher rank is better.
// Three-of-a-kind (three cards of the same rank). Tiebreaker is first the rank of the three cards, then the highest other rank, then the second highest other rank.
// Two pair (two cards of the same rank, two cards of another rank). Tiebreaker is first the rank of the high pair, then the rank of the low pair and then the rank of the remaining card.
// Pair (two cards of the same rank). Tiebreaker is first the rank of the two cards, then the three other ranks.
// Nothing. Tiebreaker is the rank of the cards from high to low.
// Given hole cards and community cards, complete the function hand to return the type of hand (as written above, you can ignore case) and a list of ranks in decreasing order of significance, to use for comparison against other hands of the same type, of the best possible hand.

// hand(["A:♠", "A♦"], ["J♣", "5♥", "10♥", "2♥", "3♦"])
// // ...should return {type: "pair", ranks: ["A", "J", "10", "5"]}
// hand(["A♠", "K♦"], ["J♥", "5♥", "10♥", "Q♥", "3♥"])
// // ...should return {type: "flush", ranks: ["Q", "J", "10", "5", "3"]}
// EDIT: for Straights with an Ace, only the ace-high straight is accepted. An ace-low straight is invalid (ie. A,2,3,4,5 is invalid). This is consistent with the author's reference solution. ~docgunthrop

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
function changeNumberToValue(value) {
    if (value == '11' || value == 11) {
        return 'J';
    }
    if (value == '12') {
        return 'Q';
    }
    if (value == '13') {
        return 'K';
    }
    if (value == '14') {
        return 'A';
    }
    return value;
}
function changeValueToNumber(value) {
    if (value == 'J') {
        return 11;
    }
    if (value == 'Q') {
        return 12;
    }
    if (value == 'K') {
        return 13;
    }
    if (value == 'A') {
        return 14;
    }
    return Number(value);
}
function hand(holeCards, communityCards) {
    let res = {};
    let allCardsDict = { '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '♥': [], '♦': [], '♠': [], '♣': [] };
    let allCards = holeCards.concat(communityCards);
    let allCardsList = [];
    for (let i = 0; i < allCards.length; i++) {
        let color = allCards[i].slice(-1);
        let value = allCards[i].slice(0, -1);
        value = changeValueToNumber(value);
        allCardsList.push(value);
        for (const [key, v] of Object.entries(allCardsDict)) {
            if (key == value) {
                allCardsDict[key] += 1;
            }
            if (key == color) {
                allCardsDict[key].push(value);
                allCardsDict[key] = allCardsDict[key].sort(function (a, b) { return a - b; });
            }
        }

    }
    allCardsList = allCardsList.sort(function (a, b) { return a - b; });
    allCardsList = [...new Set(allCardsList)];
    for (const [key, v] of Object.entries(allCardsDict)) {
        if (v == 4 && !(v.constructor == Array)) {
            res = { type: 'four-of-a-kind', ranks: [key] };

            for (var i = 0; i < allCardsList.length; i++) {

                if (allCardsList[i].toString() === key) {

                    allCardsList.splice(i, 1);
                }
            }

            res['ranks'].push(allCardsList[allCardsList.length - 1].toString());
            res['ranks'][0] = changeNumberToValue(res['ranks'][0]);
            res['ranks'][1] = changeNumberToValue(res['ranks'][1]);
            return res;
        }
        if (v == 3 && !(v.constructor == Array)) {
            let x = 0
            for (const [k, val] of Object.entries(allCardsDict)) {
                if (val >= 2 && !(val.constructor == Array) && k != key) {
                    x = 1
                    res = { type: 'full house', ranks: [key] };
                    res['ranks'].push(k);
                    res['ranks'][0] = changeNumberToValue(res['ranks'][0]);
                    res['ranks'][1] = changeNumberToValue(res['ranks'][1]);
                }
            }
            if (x == 1) {
                return res;
            }
        }
        if (v.constructor == Array) {
            if (v.length >= 5) {
                res = { type: 'flush', ranks: v };
                res['ranks'] = res['ranks'].reverse()
                let straight = 1;
                let straightList = []
                for (let i = 0; i < res['ranks'].length; i++) {

                    if (res['ranks'][i] - 1 == res['ranks'][i + 1]) {

                        straight += 1;
                    } else {
                        straight = 1;
                    }
                    res['ranks'][i] = changeNumberToValue(res['ranks'][i]);
                    straightList.push(res['ranks'][i]);
                    if (straight == 1) {
                        straightList = [];
                    }
                    if (straight == 5) {
                        straightList.push(res['ranks'][i + 1]);
                        res['type'] = 'straight-flush';
                        res['ranks'] = straightList;
                        return res;
                    }
                }
                res['ranks'] = res['ranks'].slice(0, 5);
                return res;
            }
        }
    }
    let straight = 1;
    let straightList = []
    let allCardsList1 = [];
    for (let i = 0; i < allCardsList.length; i++) {
        allCardsList1.push(allCardsList[i]);
    }
    allCardsList1.reverse();
    for (let i = 0; i < allCardsList1.length; i++) {

        if (allCardsList1[i] - 1 == allCardsList1[i + 1]) {

            straight += 1;
        } else {
            straight = 1;
        }
        allCardsList1[i] = changeNumberToValue(allCardsList1[i]);
        straightList.push(allCardsList1[i]);
        if (straight == 1) {
            straightList = [];
        }
        if (straight == 5) {
            straightList.push(allCardsList1[i + 1]);
            res['type'] = 'straight';
            res['ranks'] = straightList;
            return res;
        }
    }
    for (const [key, v] of Object.entries(allCardsDict)) {
        if (v == 3 && !(v.constructor == Array)) {
            res['type'] = 'three-of-a-kind';
            for (var i = 0; i < allCardsList.length; i++) {
                if (allCardsList[i].toString() === key) {

                    allCardsList.splice(i, 1);
                }
            }
            res['ranks'] = [key];
            res['ranks'].push(allCardsList.pop().toString());
            res['ranks'].push(allCardsList.pop().toString());
            res['ranks'][0] = changeNumberToValue(res['ranks'][0]);
            res['ranks'][1] = changeNumberToValue(res['ranks'][1]);
            res['ranks'][2] = changeNumberToValue(res['ranks'][2]);
            return res;
        }
    }
    for (const [key, v] of Object.entries(allCardsDict)) {
        if (v == 2 && !(v.constructor == Array)) {
            let x = 0;
            let allCardsList1 = [];
            for (let i = 0; i < allCardsList.length; i++) {
                allCardsList1.push(allCardsList[i]);
            }
            allCardsList1.reverse();
            for (const [k, val] of Object.entries(allCardsDict)) {
                if (val == 2 && !(val.constructor == Array) && k != key) {
                    x = 1
                    res = { type: 'two pair', ranks: [k] };
                    res['ranks'].push(key);

                    for (var i = 0; i < allCardsList1.length; i++) {
                        if (allCardsList1[i].toString() == key) {

                            allCardsList1.splice(i, 1);
                        }
                    }
                    for (var i = 0; i < allCardsList1.length; i++) {
                        if (allCardsList1[i].toString() === k) {

                            allCardsList1.splice(i, 1);
                        }
                    }
                    res['ranks'].push(allCardsList1[0].toString());
                    res['ranks'][0] = changeNumberToValue(res['ranks'][0]);
                    res['ranks'][1] = changeNumberToValue(res['ranks'][1]);
                    res['ranks'][2] = changeNumberToValue(res['ranks'][2]);
                }
            }
            if (x == 1) {
                return res;
            }
        }
    }
    for (const [key, v] of Object.entries(allCardsDict)) {
        if (v == 2 && !(v.constructor == Array)) {
            res['type'] = 'pair';
            for (var i = 0; i < allCardsList.length; i++) {
                if (allCardsList[i].toString() === key) {

                    allCardsList.splice(i, 1);
                }
            }
            res['ranks'] = [key];
            res['ranks'].push(allCardsList.pop().toString());
            res['ranks'].push(allCardsList.pop().toString());
            res['ranks'].push(allCardsList.pop().toString());
            res['ranks'][0] = changeNumberToValue(res['ranks'][0]);
            res['ranks'][1] = changeNumberToValue(res['ranks'][1]);
            res['ranks'][2] = changeNumberToValue(res['ranks'][2]);
            res['ranks'][3] = changeNumberToValue(res['ranks'][3]);
            return res;
        }
    }
    allCardsList = allCardsList.reverse();
    res['type'] = 'nothing';
    res['ranks'] = allCardsList.slice(0, 5);
    for (let i = 0; i < allCardsList.length; i++) {
        let j = allCardsList[i].toString();
        allCardsList[i] = changeNumberToValue(j);
    }
    res['ranks'] = allCardsList.slice(0, 5);
    return res;
}