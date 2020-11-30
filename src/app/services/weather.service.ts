import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private HTTP: HttpClient) { }

  getWeather() {
    return this.HTTP.get<any>('http://localhost:3000/weather');
  }

}
