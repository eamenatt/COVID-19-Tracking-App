$(document).ready(() => {
  $.get("/api/user_data").then(data => {
    $.ajax({
      url: `https://api.covidtracking.com/v1/states/${data.state}/current.json`,
      method: "GET"
    }).then(res => $(".member-name").text(res.positive));
  });
});
