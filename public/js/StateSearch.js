const axios = require("axios");

class StateSearch {
  buildUrl(state) {
    return `https://api.covidtracking.com/v1/states/${state}/current.json`;
  }
  search(state) {
    return axios.get(this.buildUrl(state));
  }
}

module.exports = StateSearch;
