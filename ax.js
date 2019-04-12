var axios = require('axios');
axios.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22').then(function(payload){
    console.log(`Cloud: ${payload.data.clouds.all}`);
    console.log(`Temp: ${payload.data.main.temp}`);
    console.log(`ID: ${payload.data.id}`);
}).catch(function(error){
    console.log(error);
});