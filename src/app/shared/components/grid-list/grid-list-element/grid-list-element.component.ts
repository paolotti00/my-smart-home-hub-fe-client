import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faCheck, faGear} from '@fortawesome/free-solid-svg-icons';
import {GridListItemInputModel} from "../../../../core/models/gridListItemInput.model";
import {GridListElementTypeEnum} from "../../../../core/enums/gridListElementType.enum";

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
  @Input()
  backIsActive :boolean = false
  @Output()
  idOnClickEvent = new EventEmitter<number>;
  @Input()
  selectedItem=-1
  @Input()
  listElementType:GridListElementTypeEnum=GridListElementTypeEnum.BIG_ICON
  faGear = faGear;
  faCheck = faCheck;
  showBack:boolean = false;
  gridListElementTypeEnum=GridListElementTypeEnum

  clickOnItem(itemId:string,arrayIndex:number){
    console.log(arrayIndex)
    this.selectedItem = arrayIndex;
    this.idOnClickEvent.emit(Number(itemId))
  }
}
