import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-grid-list-container',
  templateUrl: './grid-list-container.component.html',
  styleUrls: ['./grid-list-container.component.scss']
})

export class GridListContainerComponent {
  @Input()
  numberOfColumns:number = 2;
}
