import React, { Component } from "react/cjs/react.production.min";
import "./weatherDays.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import WeatherService from "../../services/WeatherService";
import dayName from "../../services/DayNameService";
class WeatherDays extends Component{
    constructor(props){
        super(props);
        this.state = {
            weathers: []
        }
    
    }
    weatherService = new WeatherService();


    componentDidMount(){
        console.log(1);
        this.updateWeather();
    }

    componentDidUpdate(prevProps){
        console.log(32)
        if(this.props.name !== prevProps.name){
            this.updateWeather();
        }
    }
    
    updateWeather = () => {
        console.log(2)
        this.weatherService
            .getWeather(this.props.name,true)
            .then(this.onWeatherLoaded)
            .catch(res => console.log(res));
    }


    onWeatherLoaded  = (weathers) => {
        console.log(3)
        this.setState({weathers});
        console.log(weathers)
    }


    renderItems(arr) {
        console.log(6);
        return arr.map((item, i) => {
            console.log(this.props.date,i);
            const day_name = dayName(this.props.date,++i);
            return (
                <Col key={i}>
                    <div className="day day1">
                        <h1 className="days-name">{day_name}</h1>
                        <img src={item.icon_path} alt="" />
                        <p className="temperature">{item.temp_c}&deg;C</p>
                    </div>
                </Col>
            );
        });
    }
    

    render(){
        const {weathers} = this.state;
        const items = this.renderItems(weathers);
        return (
            <div className="weather-days">
                <div className="days">
                    <Row>
                        {items}
                    </Row>
                </div>
            </div>
        )
    }
}

export default WeatherDays;