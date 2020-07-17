$(document).ready(function () {
  const currentDate = moment().format('ll');
  const tomorrowDate = moment().add(1, 'days').format("ll");
  const dayAftertomorrowDate = moment().add(2, 'days').format("ll");
  const thirdDate = moment().add(3, 'days').format("ll");
  const fourthDate = moment().add(4, 'days').format("ll");
  const fifthDate = moment().add(5, 'days').format("ll");
  $("#todaysDate").text("(" + currentDate + ")");
  $("#tomorrow").text(tomorrowDate);
  $("#dayAfterTomorrow").text(dayAftertomorrowDate);
  $("#thirdDay").text(thirdDate);
  $("#fourthDay").text(fourthDate);
  $("#fifthDay").text(fifthDate);
  //the above bracket and parentheses are for searchEl variable
  function weatherForcast(event) {
    event.preventDefault();
    renderLastRegistered();

    var searchEl = $("#searchInput").val()
    const city = searchEl;
    const queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=d65b297ed8d03be4ee57ae89ca060728";
    const APIKey = "d65b297ed8d03be4ee57ae89ca060728";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(response);
      console.log(response.list[0].weather[0].icon);
      console.log(response.list[3].weather[0].icon)

      const bigNameofCity = response.city.name;
      const todayTempKelvin = response.list[0].main.temp;
      const todayTemperature = (todayTempKelvin - 273.15) * 1.8 + 32;
      const todayHumidity = response.list[0].main.humidity;
      const todayWindSpeed = response.list[0].wind.speed;
      const todayIconUrl = " http://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + "@2x.png";
      // const todayUVindex = response.

      const tomorrowTempKelvin = response.list[3].main.temp;
      const tomorrowTemperature = (tomorrowTempKelvin - 273.15) * 1.8 + 32;
      const tomorrowHumidity = response.list[3].main.humidity;
      const tomorrowIconUrl = " http://openweathermap.org/img/wn/" + response.list[3].weather[0].icon + "@2x.png";

      const dayAfterTomorrowTempKelvin = response.list[9].main.temp;
      const dayAfterTomorrowTemperature = (dayAfterTomorrowTempKelvin - 273.15) * 1.8 + 32;
      const dayAfterTomorrowHumidity = response.list[9].main.humidity;
      const dayAfterTomorrowIconUrl = " http://openweathermap.org/img/wn/" + response.list[9].weather[0].icon + "@2x.png";

      const thirdDayTempKelvin = response.list[17].main.temp;
      const thirdDayTemperature = (thirdDayTempKelvin - 273.15) * 1.8 + 32;
      const thirdDayHumidity = response.list[17].main.humidity;
      const thirdDayIconUrl = " http://openweathermap.org/img/wn/" + response.list[17].weather[0].icon + "@2x.png";

      const fourthDayTempKelvin = response.list[25].main.temp;
      const fourthDayTemperature = (fourthDayTempKelvin - 273.15) * 1.8 + 32;
      const fourthDayHumidity = response.list[25].main.humidity;
      const fourthDayIconUrl = " http://openweathermap.org/img/wn/" + response.list[25].weather[0].icon + "@2x.png";



      const fifthDayTempKelvin = response.list[33].main.temp;
      const fifthDayTemperature = (fifthDayTempKelvin - 273.15) * 1.8 + 32;
      const fifthDayHumidity = response.list[33].main.humidity;
      const fifthDayIconUrl = " http://openweathermap.org/img/wn/" + response.list[33].weather[0].icon + "@2x.png";

      $("#cityName").text(bigNameofCity);

      $("#todayTemperature").text("Temperature: " + Math.round(todayTemperature) + " degrees");
      $("#todayHumidity").text("Humidity:  " + todayHumidity + "%");
      $("#todayWindSpeed").text("Wind Speed:  " + todayWindSpeed);
      $("#todayIcon").attr("src", todayIconUrl);


      $("#tomorrowTemperature").text("Temp: " + Math.round(tomorrowTemperature));
      $("#tomorrowHumidity").text("Humidity:  " + tomorrowHumidity);
      $("#tomorrowIcon").attr("src", tomorrowIconUrl);

      $("#dayAfterTomorrowTemperature").text("Temp:  " + Math.round(dayAfterTomorrowTemperature));
      $("#dayAfterTomorrowHumidity").text("Humidity  " + dayAfterTomorrowHumidity);
      $("#dayAfterTomorrowIcon").attr("src", dayAfterTomorrowIconUrl);

      $("#thirdDayTemperature").text("Temp:  " + Math.round(thirdDayTemperature));
      $("#thirdDayHumidity").text("Humidity:  " + thirdDayHumidity);
      $("#thirdDayIcon").attr("src", thirdDayIconUrl);

      $("#fourthDayTemperature").text("Temp:  " + Math.round(fourthDayTemperature));
      $("#fourthDayHumidity").text("Humidity:  " + fourthDayHumidity);
      $("#fourthDayIcon").attr("src", fourthDayIconUrl);

      $("#fifthDayTemperature").text("Temp:  " + Math.round(fifthDayTemperature));
      $("#fifthDayHumidity").text("Humidity:  " + fifthDayHumidity);
      $("#fifthDayIcon").attr("src", fifthDayIconUrl);
      
     

    
    });
    //the above are ajax call closing brackets
    localStorage.setItem("city", city);
    function renderLastRegistered() {
      const lastCity = localStorage.getItem("city");
      for (let i =0; i<8; i++){}
      $(".list-group-item").text(lastCity)
    };
    //the above are the renderLastRegistered closing brackets
  };
  //the above are the weatherForcast function closing brackets
  $("#searchButton").on("click", weatherForcast);




});
//the above are the document.ready closing brackets