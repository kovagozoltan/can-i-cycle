import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  constructor(private WEATHERSERVICE: WeatherService, private ROUTER: Router) { }

  week = [];
  hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00',
  '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
  '21:00', '22:00', '23:00', '24:00'];
  selectedDay;
  selectedHour;
  temperature = 50;
  wind = 50;
  rain = 50;
  data = { }

  ngOnInit() {
    for (let i = 0; i <= 6; i++) {
      const date = new Date(new Date().getTime() - (60*60*24*1000*i))
      const today = date.getFullYear()  + '-' + (date.getMonth() + 1) + '-' + String(date.getDate()).padStart(2, '0');
      this.week.push(today);
    }
  }

  submitWeather(){
    const data = {
      day: this.selectedDay,
      hour: this.selectedHour,
      rating: {
        temperature: this.temperature,
        wind: this.wind,
        rain: this.rain
      }
    };
    console.log(data);
    if(this.selectedDay && this.selectedHour) {
    this.WEATHERSERVICE.submitWeather(data).subscribe(  (resp: any)  => {
      if(resp.status === 'ok') {
        this.ROUTER.navigate(['weather']);
      }
    })
  }
  }

}
