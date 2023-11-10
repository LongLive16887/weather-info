import React , { Component } from "react/cjs/react.production.min";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WeatherService from "../../services/WeatherService";
import dayName from "../../services/DayNameService";
import "./weatherInfo.css"

class WeatherInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            weather: {}
        }
    
    }
    weatherService = new WeatherService();

    componentDidMount(){
        this.updateWeather();
    }

    componentDidUpdate(prevProps){
        if(this.props.name !== prevProps.name){
            this.updateWeather();
        }
    }
    
    updateWeather = () => {
        this.weatherService
            .getWeather(this.props.name)
            .then(this.onWeatherLoaded)
            .catch(res => console.log(res));
    }


    onWeatherLoaded  = (weather) => {
        this.setState({weather});
        this.props.onUpdateDate(weather.last_updated);
    }

    render(){
        const {temp_c,location,text,icon_path,last_updated} = this.state.weather;
        const day_name = dayName(last_updated);
        const sliced_location = location ? location.slice(0, 10)  : '';
        const sliced_text = text ? text.slice(0, 10)  : '';

        return (
            <div className="weather-info">
                <Row >
                    <Col className="col">
                        <div className="weather_left_side">
                            <img src={icon_path} alt="img" />
                        </div>
                    </Col>
                    <Col className="col">
                        <div className="weather_right_side">
                            <h3 className="days-info-name">{day_name}</h3>
                            <p className="name-city">{sliced_location}</p>
                            <p className="info-temperature"><b>{temp_c}</b>&deg;C</p>
                            <p className="info">
                                {sliced_text} 
                            </p>
                            <h6 >{last_updated}</h6>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default WeatherInfo;