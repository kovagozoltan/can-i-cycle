import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dayToShow = 1;

  dayOneKeys;
  ;
  dayTwoKeys;
  ;
  dayThreeKeys;
  ;


  todayPlusOne;
  todayPlusTwo;
  todayPlusThree;
  today;

  weather =  {};
  weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  constructor(private WEATHERSERVICE: WeatherService) { }

  ngOnInit() {
    this.WEATHERSERVICE.getWeather().subscribe( data => {
      this.weather = data;

      this.dayOneKeys = Object.keys(this.weather['forecast']['forecastday']['0']['hour']);

      this.dayTwoKeys = Object.keys(this.weather['forecast']['forecastday']['1']['hour']);

      this.dayThreeKeys = Object.keys(this.weather['forecast']['forecastday']['2']['hour']);

    });

    this.today = this.weekDays[ new Date().getDay() ];
    this.todayPlusOne = this.weekDays[ new Date((new Date()).getTime() + (60*60*24*1000*1)).getDay() ];
    this.todayPlusTwo = this.weekDays[ new Date((new Date()).getTime() + (60*60*24*1000*2)).getDay() ];
    this.todayPlusThree = this.weekDays[ new Date((new Date()).getTime() + (60*60*24*1000*3)).getDay() ];
  }

  splitDateTime(data){
    if (data && data.indexOf(' ') ) {
      return data.split(' ')[1];
    }
  }

}
