import {Injectable} from '@angular/core';
import {FieldModel} from "../models/field.model";
import {FieldTypeEnumEnum} from "../enums/fieldTypeEnum.enum";

@Injectable({
  providedIn: 'root'
})
export class HtmlService {

  constructor() { }

  getHtmlFieldType(field: FieldModel): string{
    let typeToReturn="input";
    if (field.type!=undefined){
      switch(field.type){
        case FieldTypeEnumEnum.NUMBER:
          if(field.max!=undefined && field.min!=undefined){
            typeToReturn = "range"
          } else {
            typeToReturn = "input";
          }
          break
        case FieldTypeEnumEnum.STRING:
          typeToReturn = "input";
          break
        default:
          typeToReturn = field.type
      }
    }
    return typeToReturn;
  }
}
