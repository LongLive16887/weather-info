class WeatherService{
    _apiKey = 'd25e3b86e61841b68df113649230411';
    _apiBase = 'https://api.weatherapi.com/v1/forecast.json?'



    getResource = async (url) => {
        let res = await fetch(url);
    
        if(!res.ok){
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };


    getWeather = async (region,featureWeather = false) => {
        const res = await this.getResource(`${this._apiBase}key=${this._apiKey}&q=${region}&days=4&aqi=no&alerts=no`);
        return featureWeather ? res.forecast.forecastday.map(basePath => this._transformFeatureWeather(basePath.day)) : this._transformWeather(res);
    }

    _transformWeather = (basePath) => {
        return {
            location: basePath.location.name,
            last_updated: basePath.current.last_updated,
            temp_c: basePath.current.temp_c,
            text: basePath.current.condition.text,
            icon_path: basePath.current.condition.icon
        }
    }

    _transformFeatureWeather = (basePath) => {
        return{
            temp_c: basePath.avgtemp_c,
            text: basePath.condition.text,
            icon_path: basePath.condition.icon
        }
    }
}


export default WeatherService;