import m from "mithril";

export default class ToggleCell {

  view({ attrs: { text, classes = [], getStatus, onclick }}) {
    const status = getStatus();

    classes.push("cell");

    return m("div", { class: classes.join(" "), onclick }, [
      m("div", text),
      status ? m("div.x", "X") : null
    ]);
  }
}
