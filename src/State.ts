export class State {
  constructor() {
    this.reset();
  }

  reset() {
    this._state = {};

    const create2dArray = (rows, cols, value) => (
      [...Array(rows)].map(_ => Array(rows).fill(value))
    );

    this._state.concessionsGrid = create2dArray(4, 4, false);
    this._state.prizesGrid = create2dArray(4, 3, false);
    this._state.jerseys = Array(8).fill(false);
    this._state.helmets = Array(8).fill(false);
    this._state.bets = Array(8).fill(0);
    this._state.wilds = Array(3).fill(false);

    this._state.money = 12;
  }

  getConcessionStatus(row, col) {
    return this._state.concessionsGrid[row][col];
  }

  getPrizeStatus(row, col) {
    return this._state.prizesGrid[row][col];
  }

  getJerseyStatus(index) {
    return this._state.jerseys[index];
  }

  getHelmetStatus(index) {
    return this._state.helmets[index];
  }

  getBets(index) {
    return this._state.bets[index];
  }

  getWildStatus(index) {
    return this._state.wilds[index];
  }

  getMoney() {
    return this._state.money;
  }
}

export class Actions {
  constructor(state) {
    this.state = state;
  }

  toggleConcession(row, col) {
    this.state._state.concessionsGrid[row][col] = !this.state.getConcessionStatus(row, col);
  }

  togglePrize(row, col) {
    this.state._state.prizesGrid[row][col] = !this.state.getPrizeStatus(row, col);
  }

  toggleJersey(index) {
    this.state._state.jerseys[index] = !this.state.getJerseyStatus(index);
  }

  toggleHelmet(index) {
    this.state._state.helmets[index] = !this.state.getHelmetStatus(index);
  }

  toggleWild(index) {
    this.state._state.wilds[index] = !this.state.getWildStatus(index);
  }

  incrementBets(index, value) {
    const current = this.state.getBets(index);
    if (current + value < 0) { return; }

    this.state._state.bets[index] = current + value;
  }

  incrementMoney(value) {
    const current = this.state.getMoney();
    if (current + value < 0) { return; }

    this.state._state.money = current + value;
  }

  setMoney(value) {
    this.state._state.money = value;
  }
}
