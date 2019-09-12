import moment from 'moment';

function transformInfo(info) {
    var filteredList = info.list.filter((elem, index) => {
        return index % 8 === 0;
    });
    var transfomedList = filteredList.map((elem, index, array) => {
        var city = info.city.name;
        var country = info.city.country;
        return {
            day: moment.unix(elem.dt).format('ddd'),
            fullDay: moment.unix(elem.dt).format('dddd'),
            icon: `http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`,
            min: Math.round(elem.main.temp_min - 273.15) + '°',
            max: Math.round(elem.main.temp_max - 273.15) + '°',
            num: index,
            country: country,
            city: city,
            hum: elem.main.humidity,
            speed: elem.wind.speed,
            desc: elem.weather[0].description,
            dir: elem.wind.deg,
            pre: elem.main.pressure,
        };
    });
    return transfomedList;
}

export default transformInfo;