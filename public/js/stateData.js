const StateSearch = require("./StateSearch");

const state = new StateSearch();

state.search("va").then(res => console.log(res.data));
