import m from "mithril";

import ToggleCell from "./ToggleCell";

export default class TopBar {
  view({ attrs: { state, actions } }) {
    return m("div#topbar", [
      m(Wilds, { state, actions }),
      m("div.space"),
      m("div.cell.increment", { onclick: () => actions.incrementMoney(-1) }, "-"),
      m("div.cell.money", `$${state.getMoney()}`),
      m("div.cell.increment", { onclick: () => actions.incrementMoney(1) }, "+"),
    ]);
  }
}

class Wilds {
  view({ attrs: { state, actions } }) {
    return [...Array(3)].map((_, i) => {
      const attrs = {
        classes: ["bg-horseshoe"],
        getStatus: () => state.getWildStatus(i),
        onclick: () => actions.toggleWild(i),
      };

      return m(ToggleCell, attrs);
    })
  }
}
