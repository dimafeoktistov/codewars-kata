// Kara Danvers is new to CodeWars, and eager to climb up in the ranks. We want to determine Kara's rank as she progresses up the leaderboard.
//
// This kata uses Dense Ranking, so any identical scores count as the same rank (e.g, a scoreboard of [100, 97, 97, 90, 82, 80, 72, 72, 60] corresponds with rankings of [1, 2, 2, 3, 4, 5, 6, 6, 7]
//
// You are given an array, scores, of leaderboard scores, descending, and another array, kara, representing Kara's Codewars score over time, ascending. Your function should return an array with each item corresponding to the rank of Kara's current score on the leaderboard.
//
// Note: This kata's performance requirements are significantly steeper than the Hackerrank version. Some arrays will contain millions of elements; optimize your code so you don't time out; if you're timing out before 200 tests are completed, you've likely got the wrong code complexity. If you're timing out around 274 tests (there are 278), you likely need to make some tweaks to how you're handling the arrays.
//
// Examples:
// const scores = [100, 90, 90, 80];
// const kara   = [70, 80, 105];
//
// Should return: [4, 3, 1]
// const scores = [982, 490, 339, 180]
// const kara   = [180, 250, 721, 2500]
//
// Should return: [4, 4, 2, 1]
// const scores = [1982, 490, 339, 180]
// const kara   = [180, 250, 721, 880]
//
// Should return: [4, 4, 2, 2]
let ranking = null;

function climbingLeaderboard(scores, kara) {
  ranking = [];
  let temp = scores[0];
  let vals = [temp];
  for (var i = 1; i < scores.length; i++) {
    if (scores[i] != temp) {
      temp = scores[i];
      vals.push(temp);
    }
  }

  let j = vals.length - 1;
  for (let i = 0; i < kara.length; i++) {
    while (vals[j] <= kara[i]) {
      j--;
    }
    let result = j + 2;
    ranking.push(result);
  }
  return ranking;
}

climbingLeaderboard([90, 50, 50, 50, 30], [25, 30, 95]);
console.log('ranking', ranking);
