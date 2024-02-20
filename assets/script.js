const container = document.querySelector('.container');
const search = document.querySelector('.search-box');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');


search.addEventListener('click', () => {
    const APIKey = 'ea48c36be72c20dd3617d53560667a07';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`).then(response => response.json()).then(json =>
    {
        console.log('test')
        // if the city is non-existent
        
        if (json.cod == '404' || !json) {
            cityHide.textContent = city;
            container.computedStyleMap.height = '400px'
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.temperature');
        const description = document.querySelector('.description');
        const humidity = document.querySelector('.humidity span');
        const wind = document.querySelector('.wind');

        if (cityHide.textContent == city) {
            return;
        }
        else {
            cityHide.textContent = city;

            container.computedStyleMap.height = '555px';
            container.classList.add('active');
            weatherBox.classList.add('active');
            weatherDetails.classList.add('active');
            error404.classList.remove('active');
       
            // setTimeout(() => {
            //     container.classList.remove('active');
            // }, 2500);
            console.log(json)
        // if (!json||!json[0] || !json[0]) {
        //         console.error('Weather information not available in the response');
        //         return;
        //       }
          


        // Making it so that when the user looks up the city, they have an image that coordinates with the weather of the city

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/sun.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/cartoonsnow.png';
                break;

            case 'Clouds':
                image.src = 'images/cloud.png';
                break;

            case 'Wind':
                image.src = 'images/wind.png';
                break;

            case 'Mist':
            case 'Haze':
                image.src = 'images/mist.png';
                break;

            default:
                image.src = 'images/cartoonsun.png';
        }

      
        temperature.innerHTML = `${(json.main.temp)}<span>°F</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${(json.wind.speed)}Mi/h`;
        
        const infoWeather = document.querySelector('.info-weather');
        const infoHumidity = document.querySelector('.info-humidity');
        const infoWind = document.querySelector('.info-wind');

        // const elCloneInfoWeather = infoWeather.cloneNode(true);
        // const elCloneInfoHumidity = infoHumidity.cloneNode(true);
        // const elCloneInfoWind = infoWind.cloneNode(true);

        // elCloneInfoWeather.id = 'clone-info-weather';
        // elCloneInfoWeather.classList.add( 'active-clone');

        // elCloneInfoHumidity.id = 'clone-info-humidity';
        // elCloneInfoHumidity.classList.add( 'active-clone');

        // elCloneInfoWind.id = 'clone-info-wind';
        // elCloneInfoWind.classList.add( 'active-clone');

        // Added a timer

        // setTimeout(() =>{
        //     infoWeather.insertAdjacentElement("afterend", elCLoneInfoWeather);
        //     infoHumidity.insertAdjacentElement("afterend", elCLoneInfoHumidity);
        //     infoWind.insertAdjacentElement("afterend", elCLoneInfoWind);
        // }, 2200);

        const cloneInfoWeather = document.querySelectorAll('.info-weather.active-clone');
        const totalCloneInfoWeather = cloneInfoWeather.length;
        const cloneInfoWeatherFirst = cloneInfoWeather[0];

        const cloneInfoHumidity = document.querySelectorAll('.info-humidity.active-clone');
        const cloneInfoHumidityFirst = cloneInfoHumidity[0];
        
        const cloneInfoWind = document.querySelectorAll('.info-wind.active-clone');
        const cloneInfoWindFirst = cloneInfoWind[0];

        // if(totalCloneInfoWeather > 0) {
        //     cloneInfoWeatherFirst.classList.remove('active-clone');
        //     cloneInfoHumidityFirst.classList.remove('active-clone');
        //     cloneInfoWeatherFirst.classList.remove('active-clone');
            
            // setTimeout (() => {
            //     cloneInfoWeatherFirst.remove();
            //     cloneInfoHumidityFirst.remove();
            //     cloneInfoWindFirst.remove();
            // }, 2200);
            // }
         }  
    });
});
