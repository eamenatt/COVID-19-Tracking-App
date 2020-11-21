const ArticleSearch = require("./ArticleSearch");

const results = new ArticleSearch();

results.search().then(res => console.log(res.data.response.docs));
