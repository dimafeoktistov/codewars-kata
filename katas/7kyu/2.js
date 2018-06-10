// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza they are going to divide the costs.
//
// If the pizza is less than €5,- Michael is paying. Kate will contribute no more than €10. Michael will pay at least 2/3 of the costs.
//
// How much is Michael going to pay? Remember to calculate the amount in euros, with two decimals if necessary.

function michaelPays(costs) {
  //Insert your code here
  if (costs < 5) {
    return Math.round(costs * 100) / 100;
  } else {
    let m = costs * 2 / 3;
    let k = costs - m;
    if (k > 10) {
      m += k - 10;
    }
    return Math.round(m * 100) / 100;
  }
}

michaelPays(16);
