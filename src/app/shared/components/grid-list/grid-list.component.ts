import {Component, Input} from '@angular/core';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import {GridListItemInputModel} from "../../../core/models/gridListItemInput.model";

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent {
  @Input()
  items?:GridListItemInputModel[]
  faLightbulb=faLightbulb

}
