import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private HTTP: HttpClient) { }

  getWeather() {
    return this.HTTP.get<any>('http://newweather-env.eba-hfxmu3rp.eu-west-3.elasticbeanstalk.com/weather/get');
  }

  submitWeather(data) {
    return this.HTTP.post('http://newweather-env.eba-hfxmu3rp.eu-west-3.elasticbeanstalk.com/weather/submit', data);
  }

}
