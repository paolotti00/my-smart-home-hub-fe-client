import { Component } from '@angular/core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import {defaultRoutesNames} from "../../constants/routes.names.constant";
import {Router} from "@angular/router";

@Component({
  selector: 'app-botton-navbar',
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.scss']
})
export class BottomNavbarComponent {
  constructor(private router: Router) {
  }
  faHouse = faHouse;
  goHome(){
    this.router.navigate([defaultRoutesNames.HOME])
  }

}
