const apiKey = "002244641d0b086a2d87ea3704c3addf";
const city = "London";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(url)
.then(function(response) {

    const data = response.data;

    document.getElementById("cityName").innerText = data.name;
    document.getElementById("temperature").innerText = data.main.temp + "°C";
    document.getElementById("description").innerText = data.weather[0].description;

    const iconCode = data.weather[0].icon;
    document.getElementById("icon").src =
      `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

})
.catch(function(error) {
    console.log("Error fetching weather:", error);
});