import m from "mithril";

import ToggleCell from "./ToggleCell";
import NavBar from "./NavBar";
import TopBar from "./TopBar";

export default class JerseysPage {
  view({ attrs: { state, actions } }) {
    return m("div", [
      m(TopBar, { state, actions }),
      m("h1", "Jerseys and Helmets"),
      m(JerseysGrid, { state, actions })
    ]);
  }
}

class JerseysGrid {
  view({ attrs: { state, actions } }) {
    const rows = [...Array(8)].map((_, i) => {
      const number = i + 1;
      const bgClass = `bg-color-${number}`;

      const jerseyAttrs = {
        classes: [bgClass, "bg-jersey"],
        getStatus: () => state.getJerseyStatus(i),
        onclick: () => actions.toggleJersey(i)
      };

      const helmetAttrs = {
        classes: [bgClass, "bg-helmet"],
        getStatus: () => state.getHelmetStatus(i),
        onclick: () => actions.toggleHelmet(i)
      };

      return m("div.row", [
        m(`div.cell.${bgClass}`, number),
        m(ToggleCell, jerseyAttrs),
        m(ToggleCell, helmetAttrs),
      ]);
    });

    return [
      m("div.grid.jerseys", rows),
      m(NavBar)
    ]
  }
}
