import { Component, Input } from '@angular/core';

import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: 'app-card-compact-with-icon-and-text',
  templateUrl: './card-compact-with-icon-and-text.html',
  styleUrls: ['./card-compact-with-icon-and-text.scss']
})
export class CardCompactWithIconAndTextComponent {
  @Input()
  text: string =""
  @Input()
  icon : IconDefinition = {} as IconDefinition
  @Input()
  isSelected: boolean = false;
}
