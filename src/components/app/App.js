import React , { Component } from "react/cjs/react.production.min";
import Container from 'react-bootstrap/Container';
import WeatherDays from "../weatherDays/WeatherDays";
import WeatherInfo from "../weatherInfo/WeatherInfo";
import WeatherInput from "../weatherInput/WeatherInput";
import "./app.css";

class App extends Component{
    state = {
        name: "Tashkent",
        date: "2023-11-11"
    }

    onUpdateSearch = (name) => {
        this.setState({name});
    }

    onUpdateDate = (date) => {
        this.setState({date});
    }


    render(){
        console.log(623);
        console.log(this.state.name);
        console.log(this.state.date);
        return (
            <div className="app">
                <Container>
                    <div className="main-app">
                        <div className="weather-input" >
                            <WeatherInput onUpdateSearch = {this.onUpdateSearch}/>
                        </div>
                        <main>
                            <Container className="wrapper">
                                <WeatherInfo name = {this.state.name} onUpdateDate = {this.onUpdateDate}/>
                            </Container>
                            <WeatherDays name = {this.state.name} date = {this.state.date}/>
                        </main>
                    </div>
                </Container>
            </div>
        )
    }
}

export default App;