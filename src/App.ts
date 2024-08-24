import m from "mithril";
import { State, Actions } from "./State";

import MainPage from "./components/MainPage";
import ConcessionsPage from "./components/ConcessionsPage";
import BetsPage from "./components/BetsPage";
import JerseysPage from "./components/JerseysPage";

const state = new State();
const actions = new Actions(state);

m.route(document.body, "/", {
  "/": { view: () => m(MainPage, { state, actions }) },
  "/concessions": { view: () => m(ConcessionsPage, { state, actions }) },
  "/jerseys": { view: () => m(JerseysPage, { state, actions }) },
  "/bets": { view: () => m(BetsPage, { state, actions }) },
  "/scoring": { view: () => m(ScoringPage, { state, actions }) },
});
