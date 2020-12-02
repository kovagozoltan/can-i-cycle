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
  constructor(private WEATHERSERVICE: WeatherService) { }

  ngOnInit() {
    this.WEATHERSERVICE.getWeather().subscribe( data => {
      this.weather = data;
      if (this.weather['error']) {
        this.firstTimeUser = true;
      }
    });

    this.today = this.weekDays[ new Date().getDay() ];
    this.todayPlusOne = this.weekDays[ new Date((new Date()).getTime() + (60*60*24*1000*1)).getDay() ];
    this.todayPlusTwo = this.weekDays[ new Date((new Date()).getTime() + (60*60*24*1000*2)).getDay() ];
    this.todayPlusThree = this.weekDays[ new Date((new Date()).getTime() + (60*60*24*1000*3)).getDay() ];
  }

}
