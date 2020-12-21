import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  edit = false;
  error = false;
  settings = { location: ''};

  constructor(private HTTP: HttpClient) { }

  ngOnInit() {
    this.HTTP.get<any>('http://newweather-env.eba-hfxmu3rp.eu-west-3.elasticbeanstalk.com/settings').subscribe( data => {
      if (data.message.settings) {
        this.settings = data.message.settings;
      }
    });
  }

  applySettings() {
    if (this.settings.location) {
      this.error = false;
      this.HTTP.post('http://newweather-env.eba-hfxmu3rp.eu-west-3.elasticbeanstalk.com/settings', this.settings).subscribe( data => {
      console.log(data);
    });
      this.edit = false;
    } else {
      this.error = true;
    }

  }
}
