
module.exports = {
    showWeather: function (conversation, weatherInfo, account) {
        // taking and converting the temperature in Celsius
        let temperatureCelsius = Math.round(Number(weatherInfo.main.temp) - 273.15);

        account.service.conversation.sendTextMessage(conversation, `The temperature in ${weatherInfo.name} is ${temperatureCelsius} °C.`);
    }
}


