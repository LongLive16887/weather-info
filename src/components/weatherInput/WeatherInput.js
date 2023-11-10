import React , { Component } from "react/cjs/react.production.min";
import "./weatherInput.css";

class WeatherInfo extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
        }
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }
    onUpdateSearch = (e) => {
        const name = e.target.value;
        
        this.setState({ name });
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
        }
        this.timeoutId = setTimeout(() => {
          this.props.onUpdateSearch(name);
        }, 1000); 
      }
      
    
    render(){
        return(
            <input 
                type="text" 
                className = "form-control search-input" 
                placeholder = "Enter a City..."
                value={this.state.name}
                onChange = {this.onUpdateSearch}/>
        );
    }
}

export default WeatherInfo;