import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  todayPlusOne;
  todayPlusTwo;
  todayPlusThree;
  today;
  firstTimeUser;

  weather =  {};
  weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satuday']

  //displayed data
  currentConditionText;
  currentConditionIcon
  location;
  currentTemp;

  forecastDay0;
  forecastDay1;
  forecastDay2;
  forecastDay0Icon;
  forecastDay1Icon;
  forecastDay2Icon;

  constructor(private WEATHERSERVICE: WeatherService) { }

  ngOnInit() {
    this.WEATHERSERVICE.getWeather().subscribe( data => {
      this.weather = data;
      if (this.weather['error']) {
        this.firstTimeUser = true;
      } else {
        this.currentConditionText = this.weather['current']['condition']['text']
        this.currentConditionIcon = this.weather['current']['condition']['icon']
        this.location = this.weather['location']['name']
        this.currentTemp = this.weather['current']['temp_c']
        this.forecastDay0 = this.weather['forecast']['forecastday'][0]['day']['avgtemp_c']
        this.forecastDay1 = this.weather['forecast']['forecastday'][1]['day']['avgtemp_c']
        this.forecastDay2 = this.weather['forecast']['forecastday'][2]['day']['avgtemp_c']
        this.forecastDay0Icon = this.weather['forecast']['forecastday'][0]['day']['condition']['icon']
        this.forecastDay1Icon = this.weather['forecast']['forecastday'][1]['day']['condition']['icon']
        this.forecastDay2Icon = this.weather['forecast']['forecastday'][2]['day']['condition']['icon']
      }
    });

    this.today = this.weekDays[ new Date().getDay() ];
    this.todayPlusOne = this.weekDays[ new Date((new Date()).getTime() + (60*60*24*1000*1)).getDay() ];
    this.todayPlusTwo = this.weekDays[ new Date((new Date()).getTime() + (60*60*24*1000*2)).getDay() ];
    this.todayPlusThree = this.weekDays[ new Date((new Date()).getTime() + (60*60*24*1000*3)).getDay() ];
  }

}
