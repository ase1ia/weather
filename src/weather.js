import React, {Component} from "react";
import WeatherDetails from "./WeatherDetails";
import Image from "./image";
import ErrorImg from "./error";
import { InputGroup, FormControl} from 'react-bootstrap';


class Weather extends Component {
    state = {
        data: '',
        city: '',
        error: false,
        loader: false,
    };

    apiKey= '9ffac96c31e576680e43a78fdfdbb033';

    handleChange = (event)=>{
        this.setState({city:event.target.value})
    };
     getWeather = (event) => {
        event.preventDefault();
        let city = this.state.city;
        this.setState({
            loader: true
        }, () => {
            {
                 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`)
                    .then(res => res.json())
                    .then(data => {
                        if(data.cod === 200){
                            this.setState({
                                data: data,
                                loader: false,
                            })
                        } else (
                            this.setState({error: true,
                            loader: false,})
                        )
                        

                    });
            }
        })
    };
    

    render() {
        let weatherContent = <div className='image-content'>
            <Image/>
        </div>;
        if(this.state.loader){
            weatherContent =
                <div className="spinner-border text-secondary m-lg-5" role="status" >
                    <span className="sr-only">Loading...</span>
                </div>
        } else if (!this.state.loader && this.state.data){
            weatherContent = <WeatherDetails data={this.state.data}/>
        } else if (this.state.error){
            weatherContent = <div className='error-image'>
                <ErrorImg/>
            </div>;
        }
        console.log(this.state.data);

        return(
            <div className='all-info'>
                <h2 className='header'>Weather App</h2>
                <form className='inputs' onSubmit={this.getWeather}>
                    <InputGroup
                        onChange={this.handleChange}
                        className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text
                                onChange={this.handleChange}
                                id="inputGroup-sizing-default">City:</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            onChange={this.handleChange}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    <button
                        className='btn-primary form-control'
                    >
                        Search
                    </button>


                </form>
                {weatherContent}
            </div>
        )
    }
}

export default Weather;
