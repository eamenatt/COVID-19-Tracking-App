$(document).ready(() => {
  $.get("/api/user_data").then(data => {
    $.ajax({
      url: `https://api.covidtracking.com/v1/states/${data.state}/current.json`,
      method: "GET"
    }).then(res => {
      $("#state").text(res.state);
      $("#positive-cases").text(res.positive);
      $("#current-hosp").text(res.hospitalizedCurrently);
      $("#new-cases24").text(res.negativeIncrease);
      $("#death-cases24").text(res.deathIncrease);
      $("#total-deaths").text(res.death);
    });
  });
});

// $(document).ready(() => {
//   $.get("/api/user_data").then(data => {
//     console.log(data);
//     $.ajax({
//       url: "https://api.covidtracking.com/v1/states/md/current.json",
//       method: "GET"
//     }).then(res => console.log(res));
//   });
// });
function stateRelatedInfo() {
  const selectElement = document.querySelector("#state2");
  const state2 = selectElement.options[selectElement.selectedIndex].value;
  if (state2 !== "" || state2 !== "States") {
    $.ajax({
      url: `https://api.covidtracking.com/v1/states/${state2}/current.json`,
      method: "GET"
    }).then(res2 => {
      $("#state").text(res2.state);
      $("#positive-cases").text(res2.positive);
      $("#current-hosp").text(res2.hospitalizedCurrently);
      $("#new-cases24").text(res2.negativeIncrease);
      $("#death-cases24").text(res2.deathIncrease);
      $("#total-deaths").text(res2.death);
    });
  }
}
