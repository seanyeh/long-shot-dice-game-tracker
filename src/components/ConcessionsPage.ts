import m from "mithril";

import ToggleCell from "./ToggleCell";
import TopBar from "./TopBar";
import NavBar from "./NavBar";

export default class ConcessionsPage {
  view({ attrs: { state, actions } }) {
    return m("div#concessions", [
      m(TopBar, { state, actions }),
      m("h1", "Concessions"),
      m(ConcessionsGrid, { state, actions }),
      m("h1", "Prizes"),
      m(PrizesGrid, { state, actions }),
      m(NavBar),
    ]);
  }
}

class ConcessionsGrid {
  static readonly NUMBER_GRID = [
    [8, 3, 5, 6],
    [4, 7, 1, 2],
    [2, 8, 6, 3],
    [7, 1, 4, 5]
  ];

  view({ attrs: { state, actions } }) {
    const rows = ConcessionsGrid.NUMBER_GRID.map((row, rowIndex) => {
      const items = row.map((number, colIndex) => {
        const attrs = {
          classes: [`bg-color-${number}`],
          text: `${number}`,
          getStatus: () => state.getConcessionStatus(rowIndex, colIndex),
          onclick: () => actions.toggleConcession(rowIndex, colIndex),
        };

        return m(ToggleCell, attrs)
      });

      return m("div.row", items);
    });

    return m("div.grid.concessions", rows);
  }
}

enum PrizeType {
  Bet,
  Helmet,
  Horse,
  Jersey,
  Money,
  MoveBack2,
  MoveBack3,
  MoveForward2,
  MoveForward3,
}

class PrizesGrid {
  static readonly PRIZES_GRID = [
    [PrizeType.Money, PrizeType.Money, PrizeType.Money],
    [PrizeType.MoveBack2, PrizeType.Bet, PrizeType.MoveForward2],
    [PrizeType.MoveBack3, PrizeType.Bet, PrizeType.MoveForward3],
    [PrizeType.Helmet, PrizeType.Jersey, PrizeType.Horse],
  ];

  static readonly PRIZE_DATA = {
    [PrizeType.Bet]: {
      img: "bets3",
    },
    [PrizeType.Helmet]: {
      img: "helmet",
    },
    [PrizeType.Horse]: {
      img: "horse"
    },
    [PrizeType.Jersey]: {
      img: "jersey",
    },
    [PrizeType.Money]: {
      text: "$7"
    },
    [PrizeType.MoveBack2]: {
      img: "horses_minus2"
    },
    [PrizeType.MoveBack3]: {
      img: "horse_minus3"
    },
    [PrizeType.MoveForward2]: {
      img: "horses_plus2"
    },
    [PrizeType.MoveForward3]: {
      img: "horse_plus3"
    },
  }

  view({ attrs: { state, actions } }) {
    const rows = PrizesGrid.PRIZES_GRID.map((row, rowIndex) => {
      const items = row.map((prize, colIndex) => {
        const attrs = {
          text: PrizesGrid.PRIZE_DATA[prize].text,
          classes: [`bg-${PrizesGrid.PRIZE_DATA[prize].img}`],
          getStatus: () => state.getPrizeStatus(rowIndex, colIndex),
          onclick: () => actions.togglePrize(rowIndex, colIndex),
        };

        return m(ToggleCell, attrs)
      });

      return m("div.row", items);
    });

    return m("div.grid.prizes", rows);
  }
}
