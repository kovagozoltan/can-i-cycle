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
    this.HTTP.get<any>('http://localhost:3000/settings').subscribe( data => {
      if (data.message.settings) {
        this.settings = data.message.settings;
      }
    });
  }

  applySettings() {
    if (this.settings.location) {
      this.error = false;
      this.HTTP.post('http://localhost:3000/settings', this.settings).subscribe( data => {
      });
      this.edit = false;
    } else {
      this.error = true;
    }
  }
}
