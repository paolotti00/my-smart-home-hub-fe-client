import {Component, OnInit} from '@angular/core';
import {InitService} from "./core/services/init.service";
import {Route, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-smart-home';
  constructor(private initService:InitService,private router: Router) {
  }

  ngOnInit(): void {
    //todo understand from where this idUser has to be got. maybe this init app has to move after login
    this.initService.initApp("1");
    // todo delete it when development is finished
    this.printpath('', this.router.config);
  }

  printpath(parent: String, config: Route[]) {
    for (let i = 0; i < config.length; i++) {
      const route = config[i];
      console.log(parent + '/' + route.path);
      if (route.children) {
        const currentPath = route.path ? parent + '/' + route.path : parent;
        this.printpath(currentPath, route.children);
      }
    }
  }
}
