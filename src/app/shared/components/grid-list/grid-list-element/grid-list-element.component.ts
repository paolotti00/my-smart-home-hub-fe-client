import {Component, EventEmitter, Output,Input} from '@angular/core';
import { faGear, faCheck } from '@fortawesome/free-solid-svg-icons';
import {GridListItemInputModel} from "../../../../core/models/gridListItemInput.model";

@Component({
  selector: 'app-grid-list-element',
  templateUrl: './grid-list-element.component.html',
  styleUrls: ['./grid-list-element.component.scss']
})
export class GridListElementComponent {
  @Input()
  index:number=0
  @Input()
  item:GridListItemInputModel= {} as GridListItemInputModel
  @Output()
  idOnClickEvent = new EventEmitter<number>;
  selectedItem=-1
  faGear = faGear;
  faCheck = faCheck;
  showBack:boolean = false;

  clickOnItem(itemId:string,arrayIndex:number){
    this.selectedItem = arrayIndex;
    this.idOnClickEvent.emit(Number(itemId))
  }
}
