import m from "mithril";

import NavBar from "./NavBar";
import TopBar from "./TopBar";

export default class MainPage {
  view({ attrs: { state, actions } }) {
    return m("div", [
      m(TopBar, { state, actions }),
      m(NavBar),
    ]);
  }
}
