const container = document.querySelector('.container');
const search = document.querySelector('.search-box');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search addEventListener('click', () => {
    const APIKey = 'c180e5ec2d17abbcfebe00a1ac5f1f74';
    const city = document.querySelector('.search-box input').value;

    if (city == '')
    return;

    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metricappid=${APIKey}`).then(response => response.json()).then(json =>
    {
        const image = document.querySelector('.weather-box img');
        const tempature = document.querySelector('.weather-box .tempature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = '';

            break;

            default:
                break;
        }
    });

});