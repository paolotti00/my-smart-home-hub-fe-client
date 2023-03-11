import {Component, EventEmitter, Output} from '@angular/core';
@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  @Output() colorChange = new EventEmitter<string>();
  currentColor: string = 'rgb(123,122,122)';

  onColorChange(color: any) {
    this.currentColor = color;
    this.colorChange.emit(this.currentColor);
    console.log('Selected color:', color);
  }

}
