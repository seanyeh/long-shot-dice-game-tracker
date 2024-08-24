import m from "mithril";

import ToggleCell from "./ToggleCell";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

export default class BetsPage {
  view({ attrs: { state, actions } }) {
    return m("div", [
      m(TopBar, { state, actions }),
      m("h1", "Bets"),
      m(BetsGrid, { state, actions }),
      m(NavBar),
    ]);
  }
}

class BetsGrid {
  static readonly BET_MULTIPLIERS = [
    [5, 4, 3],
    [5, 4, 3],
    [6, 5, 4],
    [6, 5, 4],
    [7, 6, 5],
    [7, 6, 5],
    [9, 8, 7],
    [9, 8, 7],
  ]

  view({ attrs: { state, actions } }) {

    const topRow = m("div.row.topRow", [
      m("div.cell"),
      m("div.cell"),
      m("div.cell.bg-horse"),
      m("div.cell.bg-bets"),
      m("div.cell", "1st"),
      m("div.cell", "2nd"),
      m("div.cell", "3rd"),
    ]);

    const rows = [...Array(8)].map((_, i) => {
      const number = i + 1;
      const bgClass = `bg-color-${number}`;

      return m("div.row", [
        m("div.cell.increment", { onclick: () => actions.incrementBets(i, -1) }, "-"),
        m("div.cell.increment", { onclick: () => actions.incrementBets(i, 1) }, "+"),
        m(`div.cell.${bgClass}`, number),
        m(`div.cell.${bgClass}`, `${state.getBets(i)}`),
        m(`div.cell.${bgClass}.multiplier`, `x${BetsGrid.BET_MULTIPLIERS[i][0]}`),
        m(`div.cell.${bgClass}.multiplier`, `x${BetsGrid.BET_MULTIPLIERS[i][1]}`),
        m(`div.cell.${bgClass}.multiplier`, `x${BetsGrid.BET_MULTIPLIERS[i][2]}`),
      ]);
    });

    return [
      m("div.grid.bets", [
        topRow,
        ...rows
      ]),
    ];
  }
}
