const axios = require("axios");

class ArticleSearch {
  constructor() { }
  buildUrl() {
    return "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=covid&api-key=CMCuEEjWzG7o7BDcP56TMGCAKlYVfxRg";
  }
  search() {
    return axios.get(this.buildUrl());
  }
}

module.exports = ArticleSearch;
