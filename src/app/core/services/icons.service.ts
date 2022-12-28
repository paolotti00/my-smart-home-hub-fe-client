import { Injectable } from '@angular/core';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import {lightComponentActionIconsConstant} from "../constants/action.icons.constant";

@Injectable({
  providedIn: 'root'
})
export class IconsService {
  DEFAULT_KEY:string="default";

  getLightComponentActionIcon(actionName:string):IconDefinition{
    let icon:IconDefinition;
    icon = lightComponentActionIconsConstant[actionName]
    if(!icon){
      // key not exist setting a default
      icon = lightComponentActionIconsConstant[this.DEFAULT_KEY]
    }
    return icon;
  }
}
