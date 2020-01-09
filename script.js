//  beginning load with user input and adding cities
$(document).ready(function() {
    //my specific API key
    var API = "186f0ba8d0e4fc1b44628ede64658ed5";
    $("#addCity").on("click", function(event) {
        event.preventDefault()
      var input = $("#input").val();
        currentWeather(input)
      // clear input box
      $("#input").val("");
console.log("checking input", input);

    });
    $(".history").on("click", "li", function() {
      searchWeather($(this).text());
    });
    function makeRow(text) {
      var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
      $(".history").append(li);
    }


//current weather

  function currentWeather(input) {
    $.ajax({
      type: "GET",
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + input + API,
      dataType: "json"})
      .then((data) => function() {
        // create history link for this search
        console.log("checking data", data);
        if (history.indexOf(input) === -1) {
          history.push(input);
          window.localStorage.setItem("history", JSON.stringify(history));
    
          makeRow(input);
        }
      })
}
})
