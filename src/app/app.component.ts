import {Component, OnInit} from '@angular/core';
import {InitService} from "./core/services/init.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-smart-home';
  constructor(private initService:InitService) {
  }

  ngOnInit(): void {
    //todo understand from where this idUser has to be got. maybe this init app has to move after login
    this.initService.initApp("1");
  }
}
