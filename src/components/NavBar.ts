import m from "mithril";

export default class NavBar {
  static readonly NAV_ROUTES = {
    home: "/",
    concessions: "/concessions",
    jersey: "/jerseys",
    bets: "/bets",
  };

  static readonly NAV_ITEMS = [
    "home",
    "concessions",
    "jersey",
    "bets",
  ];

  view() {
    return [
      m("div#bottom-spacing"),
      m("div#navbar", [
        Object.entries(NavBar.NAV_ROUTES).map(([name, route]) => {
          const onclick = () => { m.route.set(route); };

          const cssClasses = ["item", `bg-${name}`];

          const isCurrent = (
            m.route.get("path") === route ||
              (m.route.get("path") === "" && name === "home")
          );

          if (isCurrent) { cssClasses.push("current"); }

          return m("div", { onclick, class: cssClasses.join(" ") });
        })
      ]),
    ];
  }
}
