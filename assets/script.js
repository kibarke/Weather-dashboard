const container = document.querySelector('.container');
const search = document.querySelector('.search-box');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const cityHide = document.querySelector('.city-hide');


search addEventListener('click', () => {
    const APIKey = 'c180e5ec2d17abbcfebe00a1ac5f1f74';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
    return;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metricappid=${APIKey}`).then(response => response.json()).then(json =>
    {

        // if the city is non-existent

        if (json.cod == '404') {
            cityHide.textContent = city;
            container.computedStyleMap.height = '400px'
            weatherBox.classList.remove('active');
            weatherDetails.classList.remove('active');
            error404.classList.add('active');
            return;
        }

        const image = document.querySelector('.weather-box img');
        const tempature = document.querySelector('.weather-box .tempature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

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
       
            setTimeout(() => {
                container.classList.remove('active');
            }, 2500);


        // Making it so that when the user looks up the city, they have an image that coordinates with the weather of the city

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/cartoonsun.png';
                break;

            case 'Rain':
                image.src = 'images/rain.png';
                break;

            case 'Snow':
                image.src = 'images/cartoonsnow.png';
                break;

            case 'Clouds':
                image.src = 'images/cartooncloud.png';
                break;

            case 'Wind':
                image.src = 'images/wind.png';
                break;

            case 'Mist':
                image.src = 'images/carmist.png';
                break;

            case 'Haze':
                image.src = 'images/mist.png';
                break;

            default:
                image.src = 'image/cartoonsun.png';
        }

        tempature.innerHTML = `${parseInt(json.main.temp)}<span>°F</span>`;
        description.innerHTML = `${json.weather[0].decription}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        tempature.innerHTML = `${parseInt(json.main.speed)}Mi/h`;
        
        const infoWeather = document.querySelector('.info-weather');
        const infoHumidity = document.querySelector('.info-humidity');
        const infoWind = document.querySelector('.info-wind');

        const elCLoneInfoWeather = infoWeather.cloneNode(true);
        const elCLoneInfoHumidity = infoHumidity.cloneNode(true);
        const elCLoneInfoWind = infoWind.cloneNode(true);

        elCLoneInfoWeather.id = 'clone-info-weather';
        elCLoneInfoWeather.id = 'active-clone';

        elCLoneInfoHumidity.id = 'clone-info-humidity';
        elCLoneInfoWeather.id = 'active-clone';

        elCLoneInfoWind.id = 'clone-info-wind';
        elCLoneInfoWeather.id = 'active-clone';

        // Added a timer

        setTimeout(() =>{
            infoWeather.insertAdjacentElement("afterend", elCLoneInfoWeather);
            infoHumidity.insertAdjacentElement("afterend", elCLoneInfoHumidity);
            infoWind.insertAdjacentElement("afterend", elCLoneInfoWind);
        }, 2200);

        const totalCloneInfoWeather = document.querySelectorAll('.info-weather.active-clone');
        }

    });

});
