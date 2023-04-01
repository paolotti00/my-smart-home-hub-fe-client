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

  getConvertedValueByFieldType(fieldTypeEnum:FieldTypeEnumEnum, originalValue : any): string {
    let value = originalValue;
    switch (fieldTypeEnum) {
      case FieldTypeEnumEnum.COLOR:
        value = this.hexToRgb(originalValue)
        break
      default:
        value = originalValue
    }
    return  value;
  }

  hexToRgb(hex: string): number[] {
    // convert the hexadecimal string to rgb value
    let rgbArray: number[] =[]
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    rgbArray.push(r);
    rgbArray.push(g);
    rgbArray.push(b);
    return rgbArray;
  }
}
