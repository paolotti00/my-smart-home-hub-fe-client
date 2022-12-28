import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {GridListItemInputModel} from "../../../core/models/gridListItemInput.model";

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent {
  @Input()
  items?:GridListItemInputModel[]
  @Output()
  idOnClickEvent = new EventEmitter<string>;

  emitClikEvent(itemId:string){
    this.idOnClickEvent.emit(itemId)
  }
}
